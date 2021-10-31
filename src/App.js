import React, { useEffect, useState } from 'react';
import { Message } from './components/Message/Message';
import { Form } from './components/Form/Form';
import './App.css';

const App = () => {
  const [messageList, setMessageList] = useState([]);

  const handleFormSendMessage = (text) => {
    const newMsg = {author: 'Вы', text: text};
    setMessageList([...messageList, newMsg]);
  }

  useEffect( () => {
    const timeout = setTimeout(() => {
      if (messageList.length > 0) {
        if (messageList[messageList.length - 1].author === 'Вы') {
          const newMsg = {author: 'Бот', text: 'Оператор ответит Вам позже.'};
          setMessageList([...messageList, newMsg]);
        }
      }
    }, 1500);

    return () => {
      clearTimeout(timeout);
    }
  }, [messageList]);

  return (
    <div className="app">
      <h1 className="app-header">Чат</h1>
      <div className="app-content">
        {messageList.map(mes => <Message msg={mes} />)}
      </div>
      <Form change={handleFormSendMessage} className="app-footer" />
    </div>
  );
}

export default App;
