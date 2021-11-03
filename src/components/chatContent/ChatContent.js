import React, { Component, createRef } from "react";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

export default class ChatContent extends Component {

  messagesEndRef = createRef(null);

  chatItms = [
    {
      key: 1,
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
      type: "",
      msg: "Hi Tim, How are you?",
    },
    {
      key: 2,
      image: this.props.avatar,
      type: "other",
      msg: "I am fine.",
    },
    {
      key: 3,
      image: this.props.avatar,
      type: "other",
      msg: "What about you?",
    },
    {
      key: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
      type: "",
      msg: "Awesome these days.",
    },
    {
      key: 5,
      image: this.props.avatar,
      type: "other",
      msg: "Finally. What's the plan?",
    },
    {
      key: 6,
      image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
      type: "",
      msg: "what plan mate?",
    },
    {
      key: 7,
      image: this.props.avatar,
      type: "other",
      msg: "I'm taliking about the tutorial",
    },
  ];

    state = {
      chat: this.chatItms,
      msg: "",
    }

    scrollToBottom = () => {
      this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };

    componentDidMount() {
      window.addEventListener("keydown", (e) => {
        if (e.keyCode == 13) {
          if (this.state.msg != "") {
            this.chatItms.push({
              key: 1,
              type: "",
              msg: this.state.msg,
              image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
            });
            this.setState({ chat: [...this.chatItms] });
            this.scrollToBottom()
            this.setState({ msg: "" });
          }
        }
      });
  
      let btnSendMsg = document.querySelector('.btnSendMsg')
      console.log(btnSendMsg);
      btnSendMsg.addEventListener("click", (e) => {
          if (this.state.msg != "") {
            this.chatItms.push({
              key: 1,
              type: "",
              msg: this.state.msg,
              image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
            });
            this.setState({ chat: [...this.chatItms] });
            this.scrollToBottom()
            this.setState({ msg: "" });
          }
      });
    }
  
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className="main__chatcontent">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
                image= {this.props.avatar}
              />
              <p>{this.props.user}</p>
            </div>
          </div>

          <div className="blocks">
            <div className="settings">
              <button className="btn-nobg">
                <i className="fa fa-cog settingIcon"></i>
              </button>
              <button className="btn-nobg btn-close" onClick={this.props.handleClose}>
                <i className="fas fa-times settingIcon closeIcon"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
        <div className="content__footer">
          <div className="sendNewMessage">
            <label htmlFor='fileSelect'>

              <div className="addFiles">
                <i className="fa fa-plus" style={{color:'#fff'}}></i>
              </div>

            </label>

            <input type='file' id='fileSelect' />

            <input
              type="text"
              placeholder="Type a message here"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
              <i className="fa fa-paper-plane" style={{color:'#fff'}}></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
