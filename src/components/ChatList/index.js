import React from "react";
import { v4 as uuid } from 'uuid';
import { Link, Navigate } from 'react-router-dom';
import { initChats } from "../../utils/constants";
import './ChatList.css';

const ChatList = ({ chatID }) => {
  const [chats, setChats] = React.useState(initChats);
  const [newChatName, setNewChatName] = React.useState('');

  const addChat = event => {
    event.preventDefault();
    setChats( [ ...chats, {name: newChatName, id: uuid()} ] );
    setNewChatName('');
  }

  if (!( chatID && chats.find(chat => chat.id === chatID))) {
    return (<Navigate replace to="/chats/FoolBot" />);
  }

  return (
    <div className="chatListContainer">
      <ul className="chatList">
      {
        chats.map(chat => <li
          key={ uuid() }
          className={chat.id === chatID ? "activeChat" : "passiveChat"}
        >
          <button className="deleteBtn" onClick={
            () => {
              setChats(chats.filter(el => el.id !== chat.id))
            }
          }>–</button>
          <Link to={chat.id}>{chat.name}</Link></li>)
      }
      </ul>
      <form onSubmit={addChat}>
        <input
          type="text"
          value={newChatName}
          onChange={event=>setNewChatName(event.target.value)}
        />
        <input type="submit" value="+"/>
      </form>
    </div>
    );
}

export default ChatList;