import { createSlice, configureStore } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: ''
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
  }
})

export const { setName } = userSlice.actions

export const store = configureStore({
  reducer: userSlice.reducer
})

export interface UserSliceState {
    name: string;
}