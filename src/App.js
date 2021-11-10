import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import Chats from './components/Chats';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/chats" element={<Chats />}>
          <Route path=":chatID" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
