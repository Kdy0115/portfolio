import { configureStore, createListenerMiddleware } from '@reduxjs/toolkit';
import loadingReducer from './loadingSlice';
import skillReducer from './skillSlice';
import listener from './listener';

const listenerMiddleware = createListenerMiddleware();

const store = configureStore({
  reducer: {
    loading: loadingReducer,
    skill: skillReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).prepend(
      listener.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
