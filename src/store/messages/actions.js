export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";

export const addMessage = (chatID, newMsg) => ({
    type: ADD_MESSAGE,
    payload: { chatID, newMsg },
  });