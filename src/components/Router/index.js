/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Profile from '../Profile';
import NOD from '../NOD';
import SignUp from '../SignUp';
import { Chats } from '../Chats';
import PrivateRoute from '../PrivateRoute';
import { auth } from "../../services/firebase";
import { signIn, signOut } from "../../store/profile/actions";
import './Router.css';

const Router = () => {

    const dispatch = useDispatch();
    React.useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(signIn());
            } else {
                dispatch(signOut());
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chats" element={<PrivateRoute><Chats /></PrivateRoute>}>
              <Route path=":chatID" element={<PrivateRoute><Chats /></PrivateRoute>}/>
            </Route>
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>}/>
            <Route path="/number" element={<NOD />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="*" element={
              <h3 className="nopage">Страница не найдена</h3>
            } />
          </Routes>
        </BrowserRouter>
    );
};

export default Router;