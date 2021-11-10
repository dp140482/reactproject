import React from 'react';
import { ChatList } from './components/ChatList';
import { Messages } from './components/Messages';
import { Form } from './components/Form';

const Chats = () => {
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
          <ChatList />
          <Messages messageList={ messageList } />
        </div>
        <Form change={handleFormSendMessage} className="chats-footer" />
      </div>
    );
  }
  
  export default Chats;