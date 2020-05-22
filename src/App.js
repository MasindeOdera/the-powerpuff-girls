import React, { useEffect } from 'react';
import PathHeader from './components/PathHeader';
import Navigation from './components/Navigation';
import './App.scss';

function App() {

  useEffect(() => {
    fetch('http://api.tvmaze.com/singlesearch/shows?q=the-powerpuff-girls')
      .then(res => res.json())
      .then(data => {
        console.log({data});
      });
  }, []);

  return (
    <div className="App">
      <PathHeader />
      <header className="App-header">
        <h3>The Powerpuff Girls</h3>
      </header>
      <Navigation />
    </div>
  );
}

export default App;
