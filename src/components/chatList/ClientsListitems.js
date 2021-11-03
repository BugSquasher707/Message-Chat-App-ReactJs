import React, { Component } from "react";
import Avatar from "./Avatar";

export default class ClientsListItems extends Component {
  
  state={
    isActive: false
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
    this.props.handleData(e.currentTarget)
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

  render() {
    return (
      <>
       <div
        style={{ animationDelay: `0.${this.props.animationDelay}s` }}
        onClick={this.selectChat}
        className={`chatlist__item clientList__item ${
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
          {/* <i className='fas fa-angle-down downIcon'></i> */}
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
      
      </>
    );
  }
}
