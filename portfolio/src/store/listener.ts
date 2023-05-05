import {
  createListenerMiddleware,
  TypedStartListening,
} from '@reduxjs/toolkit';
import { AppDispatch, RootState } from './store';

const listenerMiddleware = createListenerMiddleware();

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const startAppListening =
  listenerMiddleware.startListening as AppStartListening;

export default listenerMiddleware;
