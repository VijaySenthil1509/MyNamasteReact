import React from "react";

class UserCalss extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="user-card">
        <h1>Name : {this.props.name}</h1>
        <h2>location : {this.props.location}</h2>
        <h3>@name is dheeran</h3>
      </div>
    );
  }
}

export default UserCalss;
