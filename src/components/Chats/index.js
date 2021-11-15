import React from 'react';
import { useParams } from 'react-router';
import ChatList from '../ChatList';
import { Messages } from '../Messages';
import { Form } from '../Form';
import { authors, botMessage, initChatsState } from '../../utils/constants';
import './Chats.css';

const Chats = () => {
    const { chatID = 'FoolBot' } = useParams();
    const [msgList, setMsgList] = React.useState(initChatsState);
  
    const handleFormSendMessage = (text) => {
      const newMsg = {author: 'Вы', text: text};
      setMsgList({...msgList, [chatID]: [...msgList[chatID], newMsg]});
    }
  
    React.useEffect( () => {
      const timeout = setTimeout(() => {
        if (
          msgList[chatID].length 
          && msgList[chatID][msgList[chatID].length - 1].author === authors.human
          ) {
          const newMsg = {author: authors.bot, text: botMessage[chatID] };
          setMsgList({...msgList, [chatID]: [...msgList[chatID], newMsg]});
        }
      }, 1500);
  
      return () => {
        clearTimeout(timeout);
      }
    }, [msgList, chatID]);
  
    return (
      <div className="chats">
        <h1 className="chats-header">Чат</h1>
        <div className="chats-content">
          <ChatList chatID={chatID} />
          <Messages messageList={ msgList[chatID] } />
        </div>
        <Form change={handleFormSendMessage} className="chats-footer" />
      </div>
    );
  }
  
  export default Chats;