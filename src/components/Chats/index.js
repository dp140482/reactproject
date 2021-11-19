/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useParams } from 'react-router';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ChatList from '../ChatList';
import { Messages } from '../Messages';
import { Form } from '../Form';
import { authors, botMessage } from '../../utils/constants';
import { addMessage } from "../../store/messages/actions";
import { selectMessages } from "../../store/messages/selectors";
import './Chats.css';

export const Chats = () => {
    const { chatID = 'FoolBot' } = useParams();
    const chatMsgs = useSelector(selectMessages(chatID), shallowEqual);
    const dispatch = useDispatch();
  
    const handleFormSendMessage = React.useCallback( (text) => {
      const newMsg = {author: 'Вы', text: text};
      dispatch(addMessage(chatID, newMsg));
    }, [chatID]);
  
    React.useEffect( () => {
      const timeout = setTimeout(() => {
        if ( chatMsgs.length && chatMsgs[chatMsgs.length - 1].author === authors.human ) {
          const newMsg = { author: authors.bot, text: botMessage[chatID] };
          dispatch(addMessage(chatID, newMsg));
        }
      }, 1500);
  
      return () => {
        clearTimeout(timeout);
      }
    }, [chatID, chatMsgs]);
  
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