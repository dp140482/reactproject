import React from "react";
import { Link } from "react-router-dom";
import { logIn } from "../../services/firebase";
import SignForm from "../SignForm";
import './Home.css';

const Home = () => {
    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleSignIn = async (email, pass) => {
        setLoading(true);
        try {
          await logIn(email, pass);
        } catch (err) {
          console.log(err);
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };

    return (
        <>
        <div className="links-container">
            <Link to="/chats">Чаты</Link>
            <Link to="/profile">Профиль</Link>
            <Link to="/number">Число дня</Link>
        </div>
        <div className="links-container">
            <SignForm onSubmit={handleSignIn} error={error} loading={loading} />
            <Link to="/signup">Sign Up</Link>
        </div>
        </>
    );
  }
  
  export default Home;