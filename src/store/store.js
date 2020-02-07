// import { createStore } from 'redux';
import { countReducer } from './reducers/counterReducer'; 
// let store = createStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), countReducer);

// export default store;


import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(countReducer, composeWithDevTools(
//   applyMiddleware(...middleware),
  // other store enhancers if any
));

export default store;