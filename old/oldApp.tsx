import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../src/store/old/store';
import { App } from '../src/screens/old';

const MainApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default MainApp;
