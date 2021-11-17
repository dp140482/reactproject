import { ADD_MESSAGE, ADD_CHAT } from "./actions";
import { initChatsState } from '../../utils/constants';

export const messagesReducer = (state = initChatsState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE:
        const {chatID: id, newMsg: msg} = payload;
        return {...state, [id]: [...state[id], msg]};
    case ADD_CHAT:
        return {...state, payload};
    default:
        return state;
  }
};