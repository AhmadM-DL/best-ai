import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import LogIn from './components/LogIn';
import SignUp from "./components/SignUp";
import Main from './components/Main';

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogIn = () => {
    setIsLoggedIn(true)
};

  return (
      <div className="App">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={isLoggedIn ? <Main /> : <LogIn loginHandler={handleLogIn}/>} />
            <Route path="/login" element={isLoggedIn ? <Main /> : <LogIn loginHandler={handleLogIn}/>} />
            <Route path="/signup" element={isLoggedIn ? <Main /> : <SignUp />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
      </Router>  
    </div>
  );

};

export default App;