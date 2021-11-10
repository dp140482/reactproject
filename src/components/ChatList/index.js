import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { v4 as uuid } from 'uuid';

export const ChatList = () => {
    const [chats] = React.useState([{
        name: "Глупый бот",
        id: "FoolBot"
      }, {
        name: "Злой бот",
        id: "AngryBot"
      }, {
        name: "Бот-зануда",
        id: "BoringBot"
      }]);

    return (
        <List>
            {
            chats.map(chat => <ListItem key={ uuid() }>
                                              <ListItemText primary={chat.name} />
                                            </ListItem>)
            }
        </List>
    );
}