import React from 'react';
import { useParams } from 'react-router';
import ChatList from '../ChatList';
import { Messages } from '../Messages';
import { Form } from '../Form';
import './Chats.css';

const Chats = () => {
    const { chatID } = useParams();
    const [messageList, setMessageList] = React.useState([]);
  
    const handleFormSendMessage = (text) => {
      const newMsg = {author: 'Вы', text: text};
      setMessageList([...messageList, newMsg]);
    }
  
    React.useEffect( () => {
      const timeout = setTimeout(() => {
        if (messageList.length && messageList[messageList.length - 1].author === 'Вы') {
          const newMsg = {author: 'Бот', text: 'Оператор ответит Вам позже.'};
          setMessageList([...messageList, newMsg]);
        }
      }, 1500);
  
      return () => {
        clearTimeout(timeout);
      }
    }, [messageList]);
  
    return (
      <div className="chats">
        <h1 className="chats-header">Чат</h1>
        <div className="chats-content">
          <ChatList chatID={chatID} />
          <Messages messageList={ messageList } />
        </div>
        <Form change={handleFormSendMessage} className="chats-footer" />
      </div>
    );
  }
  
  export default Chats;