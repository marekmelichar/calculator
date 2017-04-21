import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './containers/app';
import { persistStore, autoRehydrate } from 'redux-persist'
import { asyncSessionStorage } from 'redux-persist/storages'
// import localForage from 'localForage'

// import { loadState, saveState } from './localStorage';
// import throttle from 'lodash/throttle';

// const persistedState = loadState();
// const store = createStore(reducers, persistedState)
// const store = autoRehydrate()(createStore)(reducers);

const store = createStore(reducers,autoRehydrate())

persistStore(store, {
  storage: asyncSessionStorage,
  debounce: 500
})

//
// store.subscribe(throttle( () => {
//   saveState({
//     tree: store.getState().tree
//   })
// }, 1000))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('main')
);
