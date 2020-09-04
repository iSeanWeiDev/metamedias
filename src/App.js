import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router, Switch } from 'react-router-dom';
import { store, persistor, history } from './reducers';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Switch>
            
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
