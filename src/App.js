import React, { usetState, useEffect, useContext } from 'react';
import logo from './logo.svg';
import './App.css';
import Context from './reducers/context';

function App() {
  const store = useContext(Context);
  const [state, setState] = usetState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });

    return () => {
      unsubscribe();
    };
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{JSON.stringify(state)}</p>
      </header>
    </div>
  );
}

export default App;
