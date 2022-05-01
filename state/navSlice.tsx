import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface NavSchema {
  value: boolean
}

const initialState: NavSchema = {
  value: false,
}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

export const { toggle } = navSlice.actions
export default navSlice.reducer
