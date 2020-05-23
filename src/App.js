import React, { useState, useEffect } from 'react';
import PathHeader from './components/PathHeader';
import Navigation from './components/Navigation';
import Main from './components/Main';
import { useSelector, useDispatch } from 'react-redux';
import './App.scss';

function App() {

  const counter = useSelector( (state) => state.counter );
  const dispatch = useDispatch();

  const [initialData, setInitialData] = useState('');

  useEffect(() => {
    fetch('http://api.tvmaze.com/singlesearch/shows?q=the-powerpuff-girls')
      .then(res => res.json())
      .then(data => {
        console.log({data});
        setInitialData(data);
      });
  }, []);

  useEffect(() => {
    dispatch({type:"DISPLAY", payload: initialData})
  });


  return (
    <div className="App">
      <PathHeader />
      <header className="App-header">
        <h3>The Powerpuff Girls</h3>
      </header>
      <Navigation />
      <h2>Counter: {counter}</h2>
      <button onClick={()=> dispatch({type:"INCREMENT"})}>INCREMENT</button>
      <button onClick={()=> dispatch({type:"DECREMENT"})}>DECREMENT</button>
      <Main />
    </div>
  );
}

export default App;
