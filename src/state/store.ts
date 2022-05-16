import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { enhancer as withReduxEnhancer } from 'addon-redux'
import environmentReducer from './slice';

const reducer = {
  environment: environmentReducer
}

export const store = configureStore({
  reducer: reducer,
  enhancers: [withReduxEnhancer]
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
