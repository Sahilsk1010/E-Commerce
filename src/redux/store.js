// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from './cartRedux';

// const store = configureStore({
//     reducer:cartReducer
// })
// export default store;

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartRedux';

const rootReducer = combineReducers({
  cart: cartReducer,
  // add any other reducers here
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
