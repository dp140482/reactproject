import React from "react";
import { v4 as uuid } from 'uuid';
import { Link, Navigate } from 'react-router-dom';
import { initChats } from "../../utils/constants";
import './ChatList.css';

const ChatList = ({ chatID }) => {
    const [chats] = React.useState(initChats);

  if (!( chatID && chats.find(chat => chat.id === chatID))) {
    return (<Navigate replace to="/chats/FoolBot" />);
  }

  return (
    <ul className="chatList">
    {
      chats.map(chat => <li
        key={ uuid() }
        className={chat.id === chatID ? "activeChat" : "passiveChat"}
      ><Link to={chat.id}>{chat.name}</Link></li>)
    }
    </ul>
    );
}

export default ChatList;