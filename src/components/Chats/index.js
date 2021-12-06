/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useParams } from 'react-router';
import ChatList from '../ChatList';
import { Messages } from '../Messages';
import { Form } from '../Form';
import { onValue, push } from "firebase/database";
import { messagesRef, getChatMsgsRefById } from "../../services/firebase";
import { authors, botMessage } from '../../utils/constants';

import './Chats.css';

export const Chats = () => {
    const { chatID = 'FoolBot' } = useParams();
    const [chatMsgs, setChatMsgs] = React.useState([]);

    React.useEffect(() => {
      onValue(messagesRef, (chatsSnap) => {
        chatsSnap.forEach((snapshot) => {
          if (snapshot.key === chatID) {
            let msgs = [];
            snapshot.forEach((message) => {
              msgs.push(message.val());
            });
            setChatMsgs(msgs);
          }
        });
      });
    }, [chatID]);

  
    const handleFormSendMessage = React.useCallback(
      (newMessage) => {
        const newMsg = { author: authors.human, text: newMessage };
        push(getChatMsgsRefById(chatID), newMsg);
        setTimeout(() => {
           if (botMessage[chatID]) {
            const reply = { author: authors.bot, text: botMessage[chatID] };
            push(getChatMsgsRefById(chatID), reply);
           }
        }, 1500);
      }, [chatID]);

      //<Messages messageList={ chatMsgs } />
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