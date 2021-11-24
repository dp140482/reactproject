import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import Home from './components/Home';
import Profile from './components/Profile';
import { Chats } from './components/Chats';
import { store } from "./store";
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/chats" element={<Chats />}>
            <Route path=":chatID" element={<Chats />}/>
          </Route>
          <Route path="*" element={
            <h3 className="nopage">Страница не найдена</h3>
          } />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
