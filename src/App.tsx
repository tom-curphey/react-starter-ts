import React, { useReducer } from 'react';
import { AppContext, initialAppState } from './contexts/App.context';
import { appReducer } from './reducers/app.reducer';
import Routes from './Routes';
import { GlobalStyle } from './styles/Global.styles';

function App() {
  const [state, dispatch] = useReducer(appReducer, initialAppState);
  return (
    <div>
      <GlobalStyle />
      <AppContext.Provider value={{ ...state, dispatch }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
