import React from "react";
import { v4 as uuid } from 'uuid';
import ChatItem from '../ChatItem';
import './ChatListPresenter.css';

const ChatListPresenter = ({chats, chatID}) => {
    return (
        <ul className="chatList">
        {
          chats.map(chat => <ChatItem 
            key={ uuid() }
            chat={chat}
            chatClass={chat.id === chatID ? "activeChat" : "passiveChat"} 
            /> )
        }
        </ul>
    );
};

export default ChatListPresenter;