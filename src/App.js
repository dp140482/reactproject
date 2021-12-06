/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { CircularProgress } from "@mui/material";
import { store, persistor } from "./store";
import Router from "./components/Router";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<CircularProgress />} persistor={persistor}>
        <Router />
      </PersistGate>
    </Provider>
  );
}

export default App;
