import React, { Component } from "react";
import { Launcher } from "react-chat-window";
import Logo from "../../logo.svg";
import axios from "axios";
export default class Messenger extends Component {
  state = {
    messageList: [
      {
        author: "them",
        type: "text",
        data: {
          text: "some text"
        }
      },
      {
        author: "me",
        type: "emoji",
        data: {
          emoji: "😣"
        }
      }
    ]
  };
  componentDidMount() {
    let uid = localStorage.getItem("uid");
    axios
      .get("http://localhost:5000/chat/get", { headers: { uid: uid } })
      .then(res => {
        let msgs = res.data.map(temp => {
          console.log(temp);
          if (temp.author === localStorage.getItem("uid")) {
            return {
              author: "me",
              type: temp.type,
              data: temp.data
            };
          } else {
            return {
              author: "them",
              type: temp.type,
              data: temp.data
            };
          }
        });
        this.setState({ messageList: msgs });
      });
  }
  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message]
    });
    let uid = localStorage.getItem("uid");
    axios.post("http://localhost:5000/chat/add", {
      uid: uid,
      text: message.data.text
    });
  }
  _sendMessage(text) {
    if (text.length > 0) {
      this.setState({
        messageList: [
          ...this.state.messageList,
          {
            author: "them",
            type: "text",
            data: { text }
          }
        ]
      });
    }
  }

  render() {
    return (
      <Launcher
        agentProfile={{
          teamName: "Group chat",
          imageUrl: { Logo }
        }}
        newMessagesCount={1}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        showEmoji
      />
    );
  }
}
