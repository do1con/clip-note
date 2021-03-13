import React from 'react';
import ContextProvider from './Context/ContextProvider';
import Header from './Layout/Header';
import Body from './Layout/Body';
import './app.css';

function App(): JSX.Element {
  return (
    <div className="App">
      <ContextProvider>
        <Header />
        <Body />
      </ContextProvider>
    </div>
  );
}

export default App;
