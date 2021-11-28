import React from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../services/firebase";
import SignForm from "../SignForm";

const SignUp = () => {
    const [error, setError] = React.useState("");
    const [loading, setLoading] = React.useState(false);
  
    const handleSignUp = async (email, pass) => {
      setLoading(true);
      try {
        await signUp(email, pass);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <>
        <SignForm onSubmit={handleSignUp} error={error} loading={loading} />
        <Link to="/">Sign In</Link>
      </>
    );
};

export default SignUp;