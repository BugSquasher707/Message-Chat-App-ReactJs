import React, { Component } from "react";
import "./chatBody.css";
import ChatList from "../chatList/ChatList";
import ChatContent from "../chatContent/ChatContent";

export default class ChatBody extends Component {
  
  state={
    isClicked: false,
    avatar: '',
    user: ''
  }

  handleData = (payload) => {
      let avatar = payload.querySelector('img').src
      let user = payload.querySelector('p').innerText;

      this.setState({
        isClicked: true,
        avatar: avatar,
        user: user
      })
  }

  handleClose = () => {

    let chatItem = document.querySelectorAll('.chatlist__item')

    chatItem.forEach(element => {
        element.classList.remove('active')
    });

    console.log(chatItem);

    this.setState({
      isClicked: false
    }) 
  }
  
  render() {
    return (
      <>
        <div className="main__chatbody">
          <ChatList handleData={this.handleData} />
          { this.state.isClicked && <ChatContent isClicked={this.state.isClicked} handleClose={this.handleClose} avatar={this.state.avatar} user={this.state.user} />}
        </div>

        <div className='main__chatbody1'>

          <h1 className='sorryH1'>Sorry for Inconvenience, Please Open it on Larger Screen Size</h1>

        </div>
      </>
    );
  }
}
