/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useParams } from 'react-router';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ChatList from '../ChatList';
import { Messages } from '../Messages';
import { Form } from '../Form';
import { addMessageWithThunk } from "../../store/messages/actions";
import { selectMessages } from "../../store/messages/selectors";
import './Chats.css';

export const Chats = () => {
    const { chatID = 'FoolBot' } = useParams();
    const chatMsgs = useSelector(selectMessages(chatID), shallowEqual);
    const dispatch = useDispatch();
  
    const handleFormSendMessage = React.useCallback( (text) => {
      const newMsg = {author: 'Вы', text: text};
      dispatch(addMessageWithThunk(newMsg, chatID));
    }, [chatID, dispatch]);
  
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