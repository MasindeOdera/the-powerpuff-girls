import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import PathHeader from './components/PathHeader';
import Navigation from './components/Navigation';
import Main from './components/Main';
import EpisodeList from './components/EpisodeList';
import EpisodeDetail from './components/EpisodeDetail';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useCountRenders } from './components/useCountRenders';

import './App.scss';

function App() {
  // eslint-disable-next-line 
  const [initialData, setInitialData] = useState([]);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  
  //Keeping an eye on how many times this component renders in the console.
  useCountRenders(); 

  const fetchShows = useCallback(() => {
    fetch('https://api.tvmaze.com/shows/6771?embed=episodes')
	.then(res => res.json())
	.then(data => {
	  setInitialData(data);
	  dispatch({type:"DISPLAY", payload: data});
	  dispatch({type:"LIST", payload: data._embedded.episodes});
	})
	.catch(error => setError(error.message));
  }, [dispatch, setInitialData, setError]);

  useEffect(() => {
	  fetchShows();
  }, [fetchShows]);

  return (
	<div className="App">
	  <BrowserRouter>
		<PathHeader />
		<header className="App-header">
		  <h1>The Powerpuff Girls</h1>
		</header>
		<Navigation />
		<h3 className="Error-message">{ error }</h3>
		<Switch>
		  <Route exact path="/the-powerpuff-girls" component={Main} />
		  <Route path="/the-powerpuff-girls/episodes" component={EpisodeList} />
		  <Route path="/the-powerpuff-girls/detail/:id" component={EpisodeDetail} />
		</Switch>
	  </BrowserRouter>
	</div>
  );
}

export default App;
