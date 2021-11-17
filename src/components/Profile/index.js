import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { toggleCheckbox } from "../../store/profile/actions";
import './Profile.css';

const Profile = () => {
    const checkboxValue = useSelector(state => state.checkbox);
    const name = useSelector(state => state.name);
    const dispatch = useDispatch();

    const handleChange = () => {
        dispatch(toggleCheckbox);
    };

    return (
        <div className="profile">
            <h3 className="profile-header">Профиль</h3>
            <input type="checkbox" checked={checkboxValue} onChange={handleChange} />
            <span>{name}</span>            
        </div>
    );
  }
  
  export default Profile;