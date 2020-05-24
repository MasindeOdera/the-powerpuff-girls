import React from 'react';
import PathHeader from './components/PathHeader';
import Navigation from './components/Navigation';
import Main from './components/Main';
import { useSelector, useDispatch } from 'react-redux';
import './App.scss';
import './mediaQueries.css';

function App() {

  const counter = useSelector( (state) => state.counter );
  const dispatch = useDispatch();

  return (
    <div className="App">
      <PathHeader />
      <header className="App-header">
        <h1>The Powerpuff Girls</h1>
      </header>
      <Navigation />
      <Main />
      <h2>Counter: {counter}</h2>
      <button onClick={()=> dispatch({type:"INCREMENT"})}>INCREMENT</button>
      <button onClick={()=> dispatch({type:"DECREMENT"})}>DECREMENT</button>
    </div>
  );
}

export default App;
