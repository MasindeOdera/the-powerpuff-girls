import React, { useState, useEffect } from 'react';
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
  const [initialData, setInitialData] = useState('');
  const dispatch = useDispatch();
  
  //Keeping an eye on how many times this component renders in the console.
  useCountRenders();

  useEffect(() => {
	fetch('https://api.tvmaze.com/shows/6771?embed=episodes')
	  .then(res => res.json())
	  .then(data => {
		setInitialData(data);
		dispatch({type:"DISPLAY", payload: data});
		dispatch({type:"LIST", payload: data._embedded.episodes});
	  })
	  .catch(error => console.log(error));
  }, [dispatch]);

  return (
	<div className="App">
	  <BrowserRouter>
		<PathHeader />
		<header className="App-header">
		  <h1>The Powerpuff Girls</h1>
		</header>
		<Navigation />
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
