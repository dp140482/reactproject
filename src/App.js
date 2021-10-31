import React, { useCallback, useEffect, useState } from 'react';
import { Message } from './components/Message/Message';
import { Form } from './components/Form/Form';
import './App.css';

const App = () => {
  const [messageList, setMessageList] = useState([]);

  const lastMessage = useCallback(() => {
    if (messageList.length === 0) {
      return {id: 0, author: '', text: ''};
    }
    return messageList[messageList.length - 1];
  }, [messageList]);

  const handleFormSendMessage = (text) => {
    const newMsg = {id: lastMessage().id + 1, author: 'Вы', text: text};
    setMessageList([...messageList, newMsg]);
  }

  useEffect( () => {
    const timeout = setTimeout(() => {
      if (messageList.length > 0) {
        if (lastMessage().author === 'Вы') {
          const newMsg = {id: lastMessage().id + 1, author: 'Бот', text: 'Оператор ответит Вам позже.'};
          setMessageList([...messageList, newMsg]);
        }
      }
    }, 1500);

    return () => {
      clearTimeout(timeout);
    }
  }, [messageList, lastMessage]);

  return (
    <div className="app">
      <h1 className="app-header">Чат</h1>
      <div className="app-content">
        {messageList.map(mes => <Message msg={mes} key={mes.id} />)}
      </div>
      <Form change={handleFormSendMessage} className="app-footer" />
    </div>
  );
}

export default App;
