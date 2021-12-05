import { ADD_MESSAGE } from "./actions";
import { ADD_CHAT } from "../chats/actions";
import { initChatsState } from '../../utils/constants';

export const messagesReducer = (state = initChatsState, { type, payload }) => {
  switch (type) {
    case ADD_MESSAGE:
        return {...state, [payload.chatID]: [...state[payload.chatID], payload.newMsg]};
    case ADD_CHAT:
          if (state[payload.id]) return state;
          return {...state, [payload.id]: []};
    default:
        return state;
  }
};