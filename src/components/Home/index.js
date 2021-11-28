import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signIn } from "../../store/profile/actions";
import './Home.css';

const Home = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(signIn());
    };

    return (
        <>
        <div className="links-container">
            <Link to="/chats">Чаты</Link>
            <Link to="/profile">Профиль</Link>
            <Link to="/number">Число дня</Link>
        </div>
        <div className="links-container">
            <button onClick={handleClick}>SIGN IN</button>
        </div>
        </>
    );
  }
  
  export default Home;