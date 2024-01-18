import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialUserStoreState } from './initialState'
import { ILoginUserInfoPayload } from './interfaces/payloads/loginAction'
import { IUserInfo } from '@/services/account/interface/loginResponse'
import { localStoragesName } from '@/utils/models/enum/localStoragesName'

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUserStoreState,
  reducers: {
    login: (state, action: PayloadAction<ILoginUserInfoPayload>) => {
      state.token = action.payload.token.token
      sessionStorage.setItem(localStoragesName.token, action.payload.token.token)
    },
    setUserInfo: (state, action: PayloadAction<IUserInfo>) => {
      state.userInfo = action.payload
    },
    setUserType: (state, action: PayloadAction<string | number>) => {
      state.userType = action.payload
      sessionStorage.setItem(localStoragesName.userType, JSON.stringify(action.payload))
    },
    logout: state => {
      state.token = undefined
      state.userInfo = undefined
      state.userType = undefined
    },
  },
})

export const { login, logout, setUserInfo, setUserType } = userSlice.actions

export default userSlice.reducer
