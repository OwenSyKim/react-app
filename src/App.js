import React from 'react'
import Main from './components/Main.js'
import logo from './img/teamhybridlogo.png';
import './App.css';

const App = () => {
  return (
    <>
      <a target="_blank" href="http://localhost:3000/" role="mainlogo">
        <img src={logo} />
      </a>
      <section>
        <Main />
      </section>
    </>
  );
}

        export default App;

