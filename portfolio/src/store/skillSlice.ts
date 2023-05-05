import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SkillState {
  currentSkillTabIndex: number;
  isShownTab: boolean;
  progressValue: number;
}

const initialState: SkillState = {
  currentSkillTabIndex: 0,
  isShownTab: true,
  progressValue: 0,
};

const skillSlice = createSlice({
  name: 'skill',
  initialState,
  reducers: {
    changeSkillTab(state, action: PayloadAction<number>) {
      state.currentSkillTabIndex = action.payload;
    },
    setIsShownTab(state, action: PayloadAction<boolean>) {
      state.isShownTab = action.payload;
    },
    incrementValue(state) {
      state.progressValue += 1;
      console.log(state.progressValue);
    },
  },
});

export const { changeSkillTab, setIsShownTab, incrementValue } =
  skillSlice.actions;
export default skillSlice.reducer;
