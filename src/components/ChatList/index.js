/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { v4 as uuid } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { initChats } from "../../utils/constants";
import { addChat } from "../../store/chats/actions";
import { selectChats } from "../../store/chats/selectors";
import ChatListPresenter from "../ChatListPresenter";
import AddChatForm from "../AddChatForm";
// import { onValue, set } from "firebase/database";
import './ChatList.css';

const ChatList = ({ chatID }) => {
  const chats = useSelector(selectChats);

  const chatsIncludes = React.useCallback( chat => {
    return chats.map(chatInList => chat.id === chatInList.id).reduce((a, b) => a || b, false);
  }, [chats]);

  const dispatch = useDispatch();
  const [newChatName, setNewChatName] = React.useState('');

  const handleAddChat = React.useCallback( event => {
    event.preventDefault();
    dispatch(addChat({name: newChatName.substr(0, 12), id: uuid()}));
    setNewChatName('');
  }, [dispatch, newChatName]);

  React.useEffect(() => {
    initChats.forEach(chat => {
      if (!chatsIncludes(chat)) dispatch(addChat(chat));
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