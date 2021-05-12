import React, { Component } from "react";
import "./App.css"
import axios from "axios"

export default class App extends Component {
  state = {
    users: [],
    isloading:true
  };
  componentDidMount() {
    setTimeout(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then((data) => data.data)
        .then((users) => {
          this.setState({
            users: users,
            isloading: false

          });
        });
    },3000)

  }

  render() {
    const { isloading } = this.state;
    
    return (
      <div className="App">
        <h1>Users</h1>
        {isloading ? "Loading...": ""}
        {this.state.users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    );
  }
}
