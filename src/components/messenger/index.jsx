import React, { Component } from 'react'
import { Launcher } from "react-chat-window";
import Logo from '../../logo.svg'
export default class Messenger extends Component
{
    state={
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
    }
    _onMessageWasSent(message) {
        console.log(message);
        this.setState({
          messageList: [...this.state.messageList, message]
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
      render()
      {
          return <Launcher
          agentProfile={{
            teamName: "Group chat",
            imageUrl: { Logo }
          }}
          newMessagesCount={10}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={this.state.messageList}
          showEmoji
        />
      }
}