import React from 'react';
import { Message } from './components/Message/Message';
import './App.css';

const msgText = 'Моё первое сообщение.';

const App = () => {
  return (
    <div className="app">
      <h1 className="app-header">Чат</h1>
      <p>Сообщения:</p>
      <Message text={msgText} />
    </div>
  );
}

export default App;
