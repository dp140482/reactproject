import React from "react";
import { useDispatch } from "react-redux";
import { deleteChat } from "../../store/chats/actions";
import { Link } from 'react-router-dom';
import './ChatItem.css';

const ChatItem = ({ chat, chatClass }) => {
    const dispatch = useDispatch();

    return (
        <li className= {chatClass}>
            <button className="deleteBtn" onClick={
                () => {dispatch(deleteChat(chat.id))}
            }>–</button>
            <Link to={chat.id}>{chat.name}</Link>
        </li>
    );
}

export default ChatItem;