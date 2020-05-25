import React from 'react';
import PathHeader from './components/PathHeader';
import Navigation from './components/Navigation';
import Main from './components/Main';
import EpisodeList from './components/EpisodeList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.scss';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <PathHeader />
        <header className="App-header">
          <h1>The Powerpuff Girls</h1>
        </header>
        <Navigation />
        <Switch>
          <Route path="/" component={Main} />
          <Route path="/episodes" component={EpisodeList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
