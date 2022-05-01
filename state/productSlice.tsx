import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface InnerObjShema {
  id: number
  name: string
}
interface AddressSchema {
  city: { name: string; countryId: any; stateId: any }
  cityRegion: any
  country: { name: string; region: any }
  fallbackString: any
  house: string
  id: any
  latitude: string
  longitude: string
  state: any
  street: string
  zipCode: string
}

interface UserSchema {
  email: string
  firstName: string
  id: number
  lastName: string
  position: string
  profilePicture: string
  sex: any
}

interface ProductShema {
  businessModels: InnerObjShema[]
  categories: InnerObjShema[]
  company: { address: AddressSchema; logo: string; name: string }
  description: string
  id: number
  implementationEffortText: any
  investmentEffort: string
  name: string
  picture: string
  trl: InnerObjShema
  type: InnerObjShema
  user: UserSchema
}

const initialState: any = {
  value: {},
}

export const productSlice = createSlice({
  name: 'Config',
  initialState,
  reducers: {
    updateProduct: (state, action: PayloadAction<ProductShema>) => {
      state.value = action.payload
    },
  },
})

export const { updateProduct } = productSlice.actions
export default productSlice.reducer
