import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { basketSlice } from '../features/basket/basketSlice';
import { counterSlice } from '../features/contact/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    basket: basketSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDiscpatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDiscpatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
