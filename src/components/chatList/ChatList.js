import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import 'antd/dist/antd.css';
import { Modal, Input } from 'antd';

const { TextArea } = Input;

export default class ChatList extends Component {
  
  allChatUsers = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTA78Na63ws7B7EAWYgTr9BxhX_Z8oLa1nvOA&usqp=CAU",
      id: 1,
      name: "Coach 1",
      active: false,
      isOnline: true,
      clients:[
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 1,
          name: "Ayub Rossi",
          active: false,
          isOnline: true,
        },
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 2,
          name: "Ayub Rossi",
          active: false,
          isOnline: false,
        },
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 3,
          name: "Ayub Rossi",
          active: false,
          isOnline: true,
        }
      ]
    },
    {
      image:
      "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
      id: 2,
      name: "Coach 2",
      active: false,
      isOnline: false,
      clients: [
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 1,
          name: "Ayub Rossi",
          active: false,
          isOnline: true,
        },
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 2,
          name: "Ayub Rossi",
          active: false,
          isOnline: false,
        }
      ]
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU",
      id: 3,
      name: "Coach 3",
      active: false,
      isOnline: false,
      clients: [
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 1,
          name: "Ayub Rossi",
          active: false,
          isOnline: true,
        }
      ]
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZ6tM7Nj72bWjr_8IQ37Apr2lJup_pxX_uZA&usqp=CAU",
      id: 4,
      name: "Coach 4",
      active: false,
      isOnline: true,
      clients: [
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 1,
          name: "Ayub Rossi",
          active: false,
          isOnline: true,
        },
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 2,
          name: "Ayub Rossi",
          active: false,
          isOnline: false,
        },
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 3,
          name: "Ayub Rossi",
          active: false,
          isOnline: true,
        },
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 4,
          name: "Ayub Rossi",
          active: false,
          isOnline: false,
        }
      ]
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRJo1MiPQp3IIdp54vvRDXlhbqlhXW9v1v6kw&usqp=CAU",
      id: 5,
      name: "Coach 5",
      active: false,
      isOnline: false,
      clients: [
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 1,
          name: "Ayub Rossi",
          active: false,
          isOnline: true,
        },
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 2,
          name: "Ayub Rossi",
          active: false,
          isOnline: false,
        }
      ]
    },
    {
      image:
        "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
      id: 6,
      name: "Coach 6",
      active: false,
      isOnline: true,
      clients: [
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 1,
          name: "Ayub Rossi",
          active: false,
          isOnline: true,
        }
      ]
    },
    {
      image:
        "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
      id: 7,
      name: "Coach 7",
      active: false,
      isOnline: true,
      clients: [
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 1,
          name: "Ayub Rossi",
          active: false,
          isOnline: true,
        }
      ]
    },
    {
      image:
        "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
      id: 8,
      name: "Coach 8",
      active: false,
      isOnline: true,
      clients: [
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 1,
          name: "Ayub Rossi",
          active: false,
          isOnline: true,
        },
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 2,
          name: "Ayub Rossi",
          active: false,
          isOnline: false,
        },
      ]
    },
    {
      image:
        "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
      id: 9,
      name: "Coach 9",
      active: false,
      isOnline: true,
      clients: [
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 1,
          name: "Ayub Rossi",
          active: false,
          isOnline: true,
        }
      ]
    },
    {
      image:
        "https://www.paintingcontest.org/components/com_djclassifieds/assets/images/default_profile.png",
      id: 10,
      name: "Coach 10",
      active: false,
      isOnline: true,
      clients: [
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 1,
          name: "Ayub Rossi",
          active: false,
          isOnline: true,
        },
        {
          image:
            "https://huber.ghostpool.com/wp-content/uploads/avatars/3/596dfc2058143-bpfull.png",
          id: 2,
          name: "Ayub Rossi",
          active: false,
          isOnline: false,
        },
      ]
    }
  ];
  
    state = {
      allChats: this.allChatUsers,
      modal1Visible: false
    }

    setModal1Visible(modal1Visible) {
      this.setState({ modal1Visible });
    }

  render() {
    return (
      <div className="main__chatlist">
        <div className="chatlist__heading">
          <h2 style={{marginLeft: '5px'}}>Chats</h2>
          <button className="btn-nobg" onClick={() => this.setModal1Visible(true)}>
            <i className="fas fa-edit addBtn"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search searchIcon"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
                handleData={this.props.handleData}
                isClicked={this.props.isClicked}
                item={item}
              />
            );
          })}
        </div>

        <Modal
          title="Create a Chat"
          centered
          visible={this.state.modal1Visible}
          onOk={() => this.setModal1Visible(false)}
          okText='Send Message'
          onCancel={() => this.setModal1Visible(false)}
        >
          <Input placeholder="Enter Subject" style={{borderRadius:'5px'}} />
          
          <TextArea
          placeholder="Enter Message Here"
          autoSize={{ minRows: 5, maxRows: 8 }}
          style={{marginTop:'1rem',borderRadius:'5px'}}
        />

        </Modal>

      </div>
    );
  }
}
