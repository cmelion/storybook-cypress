import { configureStore, ThunkAction, Action, combineReducers } from '@reduxjs/toolkit';
import { enhancer as withReduxEnhancer } from 'addon-redux'
import { connectRoutes } from 'redux-first-router';
import {routes} from '../routes';
import environmentReducer from './slice';

const reducer = {
  environment: environmentReducer
}

const {
  middleware: routerMiddleware,
  enhancer: routerEnhancer,
  reducer: location,
  initialDispatch
} = connectRoutes(routes, { initialDispatch: false });

// @ts-ignore
initialDispatch();

export const store = configureStore({
  reducer: combineReducers({...reducer, location}),
  enhancers: [withReduxEnhancer, routerEnhancer],
  middleware: [routerMiddleware]
});


// expose store, so it's available when run in Cypress and Storybook
// @ts-ignore
window.store = store

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
