import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Router, Switch } from 'react-router-dom';
import { store, persistor, history } from './reducers';
import './styles/theme.scss'

import { PublicRoute } from './components/Routes';
import { BasicLayout } from './components/Layouts';
import Home from './pages/Home';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Switch>
            <PublicRoute extract path="/" component={Home} layout={BasicLayout} />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
