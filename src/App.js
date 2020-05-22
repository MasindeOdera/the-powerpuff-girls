import React from 'react';
import PathHeader from './components/PathHeader';
import Navigation from './components/Navigation';
import './App.css';

function App() {
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
