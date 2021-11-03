import React, { Component } from "react";
import Avatar from "./Avatar";
import ClientsListItems from "./ClientsListitems";

export default class ChatListItems extends Component {
  
  state={
    isActive: false,
    isDropDown: false,
    rotate: '0'
  }
  
  selectChat = (e) => {
    for (
      let index = 0;
      index < e.currentTarget.parentNode.children.length;
      index++
    ) {
      e.currentTarget.parentNode.children[index].classList.remove("active");
    }
    e.currentTarget.classList.add("active");
    this.handleDropDown()
  };

  handleActive = () => {
    if(this.state.isActive === true){
      this.setState({
        isActive: false
      })
    }
    else{
      this.setState({
        isActive: true
      })
    }
  }

  handleDropDown = () => {
    if(this.state.isDropDown === true){
      this.setState({
        isDropDown: false,
        rotate: '0'
      })
    }
    else{
      this.setState({
        isDropDown: true,
        rotate: '90'
      })
    }
  }

  render() {
    return (
      <>
      <div
        style={{ animationDelay: `0.${this.props.animationDelay}s` }}
        onClick={this.selectChat}
        className={`chatlist__item ${
          this.props.active ? this.props.active : ""
        } `}
      >
        <Avatar
          image={
            this.props.image ? this.props.image : "http://placehold.it/80x80"
          }
          isOnline={this.props.isOnline}
        />

        <div className="userMeta">
          <p>{this.props.name}</p>
          <span className="activeTime">32 mins ago</span>
          <h1 className='dotCLass' onClick={this.handleActive}>...</h1>
          <i className={`fas fa-angle-down downIcon ${this.state.isDropDown ? 'rotate' : ''}`} onClick={this.handleDropDown}></i> 
        </div>

        {this.state.isActive && <div className='deleteDiv'
        style={{ animationDelay: `0.${this.props.animationDelay}s` }}
        >

            <div className='liDiv'>

              <i className='fas fa-trash deleteIcon'></i>
              <span>Delete</span>

            </div>

        </div>}

      </div>
      
      {
        this.state.isDropDown &&  this.props.item.clients.map((ele,i) => {  
          return(
              <>
              
                <ClientsListItems 
                
                name={ele.name}
                key={ele.id}
                animationDelay={ele + 1}
                active={ele.active ? "active" : ""}
                isOnline={ele.isOnline ? "active" : ""}
                image={ele.image}
                handleData={this.props.handleData}
                isClicked={this.props.isClicked}
                />

              </>
            )
          })
        }

      </>
    );
  }
}
