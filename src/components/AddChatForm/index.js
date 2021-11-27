import React from "react";
import './AddChatForm.css';

const AddChatForm = ({handleAddChat, newChatName, setNewChatName}) => {
    return (
        <form onSubmit={handleAddChat}>
        <input
          type="text"
          value={newChatName}
          onChange={event=>setNewChatName(event.target.value)}
          className="chatInput"
        />
        <input type="submit" value="+"/>
      </form>
    );
};

export default AddChatForm;