import { ADD_MESSAGE } from "./actions";
import { ADD_CHAT } from "../chats/actions";
import { initChatsState } from '../../utils/constants';

export const messagesReducer = (state = initChatsState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE:
        const {chatID: id, newMsg: msg} = payload;
        return {...state, [id]: [...state[id], msg]};
    case ADD_CHAT:
        return {...state, [payload.id]: []};
    default:
        return state;
  }
};