import React, {useState, useEffect, useRef} from "react";
import { Button, TextField } from "@material-ui/core";
import { Send } from '@mui/icons-material';
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
            <TextField 
                variant="outlined"
                className="textInput"
                size="small"
                sx={{ outline: 'none' }}
                margin="normal"
                fullWidth
                value={text}
                onChange={handleChange}
                ref={formRef}
            />
            <Button variant="contained" style={{ margin: '17px' }} type="submit" >
                <Send style={{ color: 'blue' }} />
            </Button>
        </form>
    );
}