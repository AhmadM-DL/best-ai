import './Header.css';
import React from 'react';
import Menu from './Menu.js';

function Header({showMenu}) {

    return (
        <header>
            <span className="logo">Best AI</span>
            <div className='menubtn'>
                {showMenu && <Menu />}
            </div>
        </header>
    );
}

export default Header;