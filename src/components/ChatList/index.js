/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { v4 as uuid } from 'uuid';
import { Navigate } from 'react-router-dom';
import { initChats, initChatsState } from "../../utils/constants";
import ChatListPresenter from "../ChatListPresenter";
import AddChatForm from "../AddChatForm";
import { onValue, set } from "firebase/database";
import { chatsRef, getChatRefById, getChatMsgsRefById } from "../../services/firebase";
import './ChatList.css';

const ChatList = ({ chatID }) => {
  const [chats, setChats] = React.useState([]);

  React.useEffect(() => {
    onValue(chatsRef, (chatsSnap) => {
      const newChats = [];
      chatsSnap.forEach((snapshot) => {
        newChats.push(snapshot.val());
      });
      setChats(newChats);
    });
  }, []);
  const [newChatName, setNewChatName] = React.useState('');

  const handleAddChat = React.useCallback( event => {
    event.preventDefault();
    const chatID = uuid();
    set(getChatRefById(chatID), {id: chatID, name: newChatName.substr(0, 12)});
    setNewChatName('');
    console.log(chats);
  }, [newChatName]);

  React.useEffect(() => {
    initChats.forEach(chat => {
      set(getChatRefById(chat.id), {id: chat.id, name: chat.name});
      set(getChatMsgsRefById(chat.id), initChatsState[chat.id]);
    });
  }, []);

  React.useEffect(() => {
    if (!( chatID && chats.find(chat => chat.id === chatID))) {
      return (<Navigate replace to="/chats/FoolBot" />);
    }
  }, [chatID]);

  return (
    <div className="chatListContainer">
      <ChatListPresenter chats={chats} chatID={chatID} />
      <AddChatForm 
        handleAddChat={handleAddChat}
        newChatName={newChatName}
        setNewChatName={setNewChatName}
      />
    </div>
  );
}

export default ChatList;