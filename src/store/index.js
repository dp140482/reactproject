import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage

import { profileReducer } from "./profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messagesReducer } from "./messages/reducer";
import { NODReducer } from "./number/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ["profile", "nod"]
};

const rootReducer = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
  messages: messagesReducer,
  nod: NODReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);