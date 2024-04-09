import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";


import './App.css';
import Header from './components/Header';
import LogIn from './components/LogIn';
import SignUp from "./components/SignUp";
import Home from './components/Home';

const App = () => {

  const [user, loading] = useAuthState(auth);

  return (
      <div className="App">
        <Header showMenu={user} />
        <Router>
          <Routes>
            <Route path="/" element={(loading || user) ? <Home /> : <LogIn />} />
            <Route path="/login" element={(loading || user) ? <Home /> : <LogIn />} />
            <Route path="/signup" element={(loading || user) ? <Home /> : <SignUp />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>
      </Router>  
    </div>
  );

};

export default App;