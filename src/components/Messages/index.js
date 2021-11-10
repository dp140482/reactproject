import React from "react";
import { Message } from '../Message';
import './Messages.css';
import { v4 as uuid } from 'uuid';

export const Messages = ({messageList}) => {
    return (
        <div className="messages">
            {messageList.map(mes => <Message msg={mes} key={ uuid() } />)}
        </div>
    );
}