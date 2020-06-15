import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './styles/index.scss';
import rootReducer from './redux/reducers';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
	<Provider store={createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    	<App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
