import {messagesReducer} from "../reducer";
import { ADD_MESSAGE } from "../actions";
import { ADD_CHAT } from "../../chats/actions";
import { initChatsState } from '../../../utils/constants';

let state;
it ("Тестирование инициализации", () => {
    const expected = initChatsState;
    state = messagesReducer(undefined, {type: "none", payload: ""});
    expect(state).toEqual(expected);
});
it ("Тестирование добавления чата", () => {
    const expected = { ...initChatsState, testChat: [] };
    state = messagesReducer(state, {type: ADD_CHAT, payload: {id: "testChat"}});
    expect(state).toEqual(expected);
});
it ("Тестирование добавления сообщения", () => {
    const expected = { ...initChatsState, testChat: ["test message"] };
    state = messagesReducer(state, 
        {type: ADD_MESSAGE, payload: {chatID: "testChat", newMsg: "test message"}}
    );
    expect(state).toEqual(expected);
});