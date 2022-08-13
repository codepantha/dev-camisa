import { compose, createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import logger from 'redux-logger';

import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['userReducer'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Don't log middleware when in production
const middlewares = [process.env.NODE_ENV !== 'production' && logger].filter(
  Boolean,
);

// if we're not in production, and window object exists,
// then use the redux_devtools extension
const composedEnhancer = (process.env.NODE_ENV !== 'production'
    && window
    && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
  || compose;

const composedEnhancers = composedEnhancer(applyMiddleware(...middlewares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers,
);

export const persistor = persistStore(store);
