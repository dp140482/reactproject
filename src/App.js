import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { CircularProgress } from "@mui/material";
import Home from './components/Home';
import Profile from './components/Profile';
import NOD from './components/NOD';
import { Chats } from './components/Chats';
import { store, persistor } from "./store";
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<CircularProgress />} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/chats" element={<Chats />}>
              <Route path=":chatID" element={<Chats />}/>
            </Route>
            <Route path="/profile" element={<Profile />}/>
            <Route path="/number" element={<NOD />}/>
            <Route path="*" element={
              <h3 className="nopage">Страница не найдена</h3>
            } />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
