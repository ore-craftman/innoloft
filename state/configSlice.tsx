import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface configSchema {
  id: number
  logo: string
  mainColor: string
  hasUserSection: boolean
}

const initialState = {
  value: {
    id: 1,
    logo: 'img.innoloft.de/logo.svg',
    mainColor: '#272e71',
    hasUserSection: true,
  },
}

export const configSlice = createSlice({
  name: 'Config',
  initialState,
  reducers: {
    updateConfig: (state, action: PayloadAction<configSchema>) => {
      state.value = action.payload
    },
  },
})

export const { updateConfig } = configSlice.actions
export default configSlice.reducer
