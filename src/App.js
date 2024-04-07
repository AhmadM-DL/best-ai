import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import LogIn from './LogIn';
import SignUp from "./SignUp";
import Main from './Main';

const App = () => {
  const [page, setPage] = useState('login');

  const navigateTo = (pageName) => {
      setPage(pageName);
  };

  return (
      <div className="App">
        <Header />
          <main>
              {page === 'main' && <Main />}
              {page === 'login' && <LogIn onRegisterClick={()=> navigateTo("signup")} />}
              {page === 'signup' && <SignUp onBackToLogIn={()=> navigateTo("login")}/>}
          </main>
      </div>
  );

};

export default App;