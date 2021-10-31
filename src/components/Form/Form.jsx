import React, {useState, useEffect, useRef} from "react";
import './Form.css';

export const Form = (props) => {
    const [text, setText] = useState('');
    const formRef = useRef(null);

    useEffect(() => {
        formRef.current?.scrollIntoView({ behavior: "auto" });
        formRef.current?.focus();
    });

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
            <input type="text" value={text} onChange={handleChange} className="textInput" ref={formRef} />
            <button type="submit" className="sendBtn">⇧</button>
        </form>
    );
}