import React from "react";
import { authors } from "../../utils/constants";
import './Message.css';

export const Message = ({msg}) => {
    if (msg.author === authors.bot) {
        return (
            <div className="msg botmsg">
                <p className="msg-head botmsg-head">{msg.author}</p>
                <p className="msg-text botmsg-text">{msg.text}</p>
            </div>
        );
    }
    return (
        <div className="msg">
            <p className="msg-head humanmsg-head">{msg.author}</p>
            <p className="msg-text">{msg.text}</p>
        </div>
    );
}