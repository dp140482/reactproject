import React from "react";
import { Button, TextField, ThemeProvider, createTheme } from "@material-ui/core";
import { Send } from '@mui/icons-material';
import './Form.css';

const theme = createTheme({
    palette: {
        primary: {
            main: "#A9A9A9",
        }
    },
});

export const Form = (props) => {
    const [text, setText] = React.useState('');
    const formRef = React.useRef(null);

    React.useEffect(() => {
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
            <ThemeProvider theme={theme}>
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
            </ThemeProvider>
        </form>
    );
}