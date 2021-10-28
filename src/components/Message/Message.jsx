import React from "react";
import './Message.css';

export const Message = ({text}) => {
    return (
        <div className="msg">
            <p className="msg-text">{text}</p>
        </div>
    );
}