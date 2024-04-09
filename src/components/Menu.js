import './Menu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';
import {logout} from "../firebase";


function Menu() {

    const [toggled, setToggle] = useState(false);

    return (
        <div>
            <FontAwesomeIcon icon={faBars} onClick={()=>setToggle(!toggled)}/>
            <div className="menu" style={toggled ? {display: "block"} : {display: "none"}}>
                <span >Settings</span>
                <span onClick={logout}>Log Out</span>
            </div>
        </div>
    );
}

export default Menu;