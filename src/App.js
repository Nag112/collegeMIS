import React, { Fragment } from "react";
import Sidebar from "./components/Sidebar";
import Calendar from "react-calendar";
import Timetable from './components/timetable'
import UpcomAssign from './components/upcomAssign'
import "./App.css";
import Logo from './logo.svg'
import { Launcher } from "react-chat-window";
import Profile from './components/profile'
export default class App extends React.Component {
  state = {
    date: new Date(),
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

  onChange = date => this.setState({ date });
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
  render() {
    return (
      <Fragment>
        <header className="App-header px-4 py-3">
          <h3>College MIS</h3>
          <div className="header-icons">
            <i className="fa fa-check-square-o"></i>
            <i className="fa fa-bell-o"></i>
            <i className="fa fa-user-circle-o"></i>
          </div>
        </header>
        <div className="App">
          <Sidebar />
          <Profile/>
          <Calendar
            className="calendar"
            onChange={this.onChange}
            value={this.state.date}
          />
         <Timetable/>
         <UpcomAssign/>
         </div>
        <Launcher
          agentProfile={{
            teamName: "Group chat",
            imageUrl: { Logo }
          }}
          newMessagesCount={10}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          messageList={this.state.messageList}
          showEmoji
        />
      </Fragment>
    );
  }
}
