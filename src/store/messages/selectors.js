export const selectMessages = chatID => { return state => state.messages[chatID]; }
export const selectAllMessages = (state) => state.messages;