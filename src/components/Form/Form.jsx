import React, {useState} from "react";
import './Form.css';

export const Form = (props) => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (text !== '') {
            props.change(text);
            setText('');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="sendForm">
            <input type="text" value={text} onChange={handleChange} className="textInput" />
            <button type="submit" className="sendBtn">⇧</button>
        </form>
    );
}