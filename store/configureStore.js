import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'


export default function configureStore(initialState) {
  const isProduction = process.env.NODE_ENV === 'production';
  let store;
  if (isProduction) {
    store = createStore(
      rootReducer,
      initialState);
  }else{
    const enhancer = compose(
      applyMiddleware(thunk, createLogger()),
      DevTools.instrument()
    );
    store = createStore(rootReducer, initialState, enhancer)
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
