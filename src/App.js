import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'


import { LandingPage } from './pages'


const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
  	<Provider store={store}>
	    <div className="wrapper">

	      <LandingPage />
	      
	    </div>
	</Provider>
  );
}

export default App;
