/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from 'uuid';
import { Navigate } from 'react-router-dom';
import { initChats } from "../../utils/constants";
import { addChat } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import ChatItem from '../ChatItem';
import './ChatList.css';

const ChatList = ({ chatID }) => {
  const chats = useSelector(selectChats);
  const dispatch = useDispatch();
  const [newChatName, setNewChatName] = React.useState('');

  const handleAddChat = React.useCallback( event => {
    event.preventDefault();
    dispatch(addChat({name: newChatName.substr(0, 12), id: uuid()}));
    setNewChatName('');
  }, [dispatch, newChatName]);

  React.useEffect(() => {
    initChats.map(chat => dispatch(addChat(chat)));
  }, []);

  React.useEffect(() => {
    if (!( chatID && chats.find(chat => chat.id === chatID))) {
      return (<Navigate replace to="/chats/FoolBot" />);
    }
  }, [chatID]);

  return (
    <div className="chatListContainer">
      <ul className="chatList">
      {
        chats.map(chat => <ChatItem 
          key={ uuid() }
          chat={chat}
          chatClass={chat.id === chatID ? "activeChat" : "passiveChat"} 
          /> )
      }
      </ul>
      <form onSubmit={handleAddChat}>
        <input
          type="text"
          value={newChatName}
          onChange={event=>setNewChatName(event.target.value)}
          className="chatInput"
        />
        <input type="submit" value="+"/>
      </form>
    </div>
    );
}

export default ChatList;