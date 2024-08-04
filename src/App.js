import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ChatDashboard from "./ChatDashboard";

class App extends Component {
  state = {
    messages: [
      { username: "gowri", text: "Hi, gowthami!" },
      { username: "gowri", text: "How are you?" },
      { username: "gowthami", text: "Hi, gowri! Good, you?" },
    ],
    users: [{ username: "Gowri" }, { username: "gowthami" }],
  };

  updateMessageListing = (message) => {
    let update_messages_list = this.state.messages;
    update_messages_list.push(message);

    this.setState({
      messages: update_messages_list,
    });
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          {this.state.users.map((user) => (
            <ChatDashboard
              key={user.username}
              user={user}
              updateMessages={this.updateMessageListing}
              messages={this.state.messages}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
