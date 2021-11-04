import React from 'react';
import { ChatList } from './components/ChatList/ChatList';
import { Messages } from './components/Messages/Messages';
import { Form } from './components/Form/Form';
import './App.css';

const App = () => {
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
    <div className="app">
      <h1 className="app-header">Чат</h1>
      <div className="app-content">
        <ChatList />
        <Messages messageList={ messageList } />
      </div>
      <Form change={handleFormSendMessage} className="app-footer" />
    </div>
  );
}

export default App;
