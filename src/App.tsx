import React from 'react';
import Header from './Layout/Header';
import Body from './Layout/Body';
import './app.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
