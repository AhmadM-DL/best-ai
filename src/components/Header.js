import './Header.css';
import React from 'react';
import Profile from './Profile.js';

function Header({showMenu}) {

    return (
        <header>
            <span className="logo">Best AI</span>
            <div className='menubtn'>
                {showMenu && <Profile />}
            </div>
            <div className="actionbtn">
                {showMenu && <button>Add Resource</button>}
            </div>
        </header>
    );
}

export default Header;