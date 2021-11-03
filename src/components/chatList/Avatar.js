import React, { Component } from "react";

export default class Avatar extends Component {
  
  render() {
    return (
      <div className="avatar">
        <div className="avatar-img">
          <img src={this.props.image} />
        </div>
        <span className={`isOnline ${this.props.isOnline}`}></span>
      </div>
    );
  }
}
