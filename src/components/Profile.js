import './Profile.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';
import {logout} from "../firebase";


function Profile() {

    const [toggled, setToggle] = useState(false);

    return (
        <div>
            <FontAwesomeIcon icon={faUser} onClick={()=>setToggle(!toggled)}/>
            <div className="menu" style={toggled ? {display: "block"} : {display: "none"}}>
                <span >Settings</span>
                <span onClick={logout}>Log Out</span>
            </div>
        </div>
    );
}

export default Profile;