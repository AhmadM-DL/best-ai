import './Header.css';
import React from 'react';
import Profile from './Profile.js';
import { useNavigate } from 'react-router-dom';

function Header({showMenu}) {
    const navigate = useNavigate();

    const addResource = () =>  {
        navigate("/addresource");
    }

    return (
        <header>
            <span className="logo">Best AI</span>
            <div className='menubtn'>
                {showMenu && <Profile />}
            </div>
            <div className="actionbtn">
                {showMenu && <button onClick={addResource}>Add Resource</button>}
            </div>
        </header>
    );
}

export default Header;