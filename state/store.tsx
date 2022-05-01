import { configureStore } from '@reduxjs/toolkit'
import navReducer from './navSlice'
import configSlice from './configSlice'
import productSlice from './productSlice'

export const store = configureStore({
  reducer: {
    nav: navReducer,
    config: configSlice,
    product: productSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
