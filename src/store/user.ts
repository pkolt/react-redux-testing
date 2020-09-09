import { createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import { AppState } from '.';

export interface UserData {
  login: string;
  password: string;
}

export interface User {
  data?: UserData;
  error?: SerializedError;
}

const initialState: User = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changedData: (state, action: PayloadAction<UserData>): void => {
      state.data = action.payload;
    },
  },
});

export const selectUser = (state: AppState) => state.user;
export const userActions = userSlice.actions;
export default userSlice.reducer;
