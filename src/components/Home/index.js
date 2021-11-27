import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="links-container">
            <Link to="/chats">Чаты</Link>
            <Link to="/profile">Профиль</Link>
            <Link to="/number">Число дня</Link>
        </div>
    );
  }
  
  export default Home;