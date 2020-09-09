import { configureStore, ThunkDispatch, Action, Store, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import user from './user';

const rootReducer = combineReducers({
  user,
});

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<AppState, null, Action<string>>;

const createStore = (): Store<AppState> => {
  const isDevMode = process.env.NODE_ENV === 'development';
  const logger = createLogger();
  const middlewares = [...getDefaultMiddleware(), ...(isDevMode ? [logger] : [])];
  const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
  });
  return store;
};

export default createStore;
