import React from "react";

const SignForm = ({ onSubmit, error, loading }) => {
  const [email, setEmail] = React.useState("");
  const [pass, setPass] = React.useState("");

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangePass = (event) => {
    setPass(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(email, pass);
    setEmail("");
    setPass("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={email} onChange={handleChangeEmail} />
        <input type="password" value={pass} onChange={handleChangePass} />
        <input type="submit" disabled={loading} />
      </form>
      {error && <h4>{error}</h4>}
    </>
  );
};

export default SignForm;