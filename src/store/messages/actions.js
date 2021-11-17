export const ADD_MESSAGE = "MESSAGES::ADD_MESSAGE";
export const ADD_CHAT= "MESSAGES::ADD_CHAT";

export const addMessage = (chatID, newMsg) => ({
    type: ADD_MESSAGE,
    payload: { chatID, newMsg },
  });

  export const addChat = chatID => ({
    type: ADD_CHAT,
    payload: chatID,
  });