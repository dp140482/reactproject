/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useParams } from 'react-router';
import { shallowEqual, useDispatch, useSelector } from "react-redux"; //comment out
import ChatList from '../ChatList';
import { Messages } from '../Messages';
import { Form } from '../Form';
import { addMessageWithThunk } from "../../store/messages/actions"; //comment out
import { selectMessages } from "../../store/messages/selectors"; //comment out
// import { push, onValue } from "firebase/database";
// import { getChatMsgsListRefById, messagesRef } from "../../services/firebase";

import './Chats.css';

export const Chats = () => {
    const { chatID = 'FoolBot' } = useParams();
    // const [chatMsgs, setMsgs] = React.useState({});
    /* Comment out begin */
    const chatMsgs = useSelector(selectMessages(chatID), shallowEqual);
    const dispatch = useDispatch();
    /* Comment out end */
  
    const handleFormSendMessage = React.useCallback( (text) => {
      const newMsg = {author: 'Вы', text: text};
      dispatch(addMessageWithThunk(newMsg, chatID));
    }, [chatID, dispatch]);
 
    /*
    const handleFormSendMessage = React.useCallback(
      (newMessage) => {
        push(getChatMsgsListRefById(chatID), newMessage);
      },
      [chatID]
    );
       

    React.useEffect(() => {
      onValue(messagesRef, (snapshot) => {
        const newMsgs = {};
  
        snapshot.forEach((chatMsgsSnap) => {
          newMsgs[chatMsgsSnap.key] = Object.values(
            chatMsgsSnap.val().messageList || {}
          );
        });
  
        setMsgs(newMsgs);
      });
    }, []);
    */
  
    return (
      <div className="chats">
        <h1 className="chats-header">Чат</h1>
        <div className="chats-content">
          <ChatList chatID={chatID} />
          <Messages messageList={ chatMsgs } />
        </div>
        <Form change={handleFormSendMessage} className="chats-footer" />
      </div>
    );
  };