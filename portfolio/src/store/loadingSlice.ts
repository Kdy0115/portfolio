import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoadingState {
  loading: boolean;
  loaded: boolean;
  value: number;
}

const initialState: LoadingState = {
  loading: false,
  loaded: false,
  value: 0,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    increment(state) {
      if (state.loading) {
        state.value += 1;
      }
    },
    loadedSuccess(state) {
      state.loading = false;
      state.loaded = true;
    },
  },
});

export const { setLoading, increment, loadedSuccess } = loadingSlice.actions;
export default loadingSlice.reducer;
