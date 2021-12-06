import { authors, botMessage } from '../../utils/constants';

export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (chatID, newMsg) => ({
    type: ADD_MESSAGE,
    payload: { chatID, newMsg },
});

export const addMessageWithThunk = (message, chatID) => (dispatch) => {
    dispatch( addMessage( chatID, message ) );
    setTimeout(() => {
      if ( message.author === authors.human ) {
        const newMsg = { author: authors.bot, text: botMessage[chatID] };
        dispatch(addMessage(chatID, newMsg));
      }
    }, 1500);
};