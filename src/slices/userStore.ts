import AsyncStorage from '@react-native-community/async-storage';
import { createSlice, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

export interface UserSliceState {
  name: string;
}

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

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, userSlice.reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }),
})


export const persistor = persistStore(store);

