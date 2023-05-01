import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {

  const[page, setPage] = useState('/');

  function onNav(event){
    event.preventDefault();
    const target = event.target.getAttribute('href');
    setPage(target);
  }

  return (
    <div className="app">
      <Header onNav={onNav}/>
      <Main page={page} onNav = {onNav}/>
      <Footer />
    </div>
  );
}

export default App;
