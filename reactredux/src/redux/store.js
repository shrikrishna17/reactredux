// import { createStore } from "redux";
// import reducers from './reducer/index';

// const store = createStore(
//   reducers,{},
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

// store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer/index';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production' 
});

export default store;
