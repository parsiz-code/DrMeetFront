import { configureStore } from '@reduxjs/toolkit'
import { commonSlice } from './common'
import { doctorSlice } from './doctor'
import { userSlice } from './user'

export const globalStore = configureStore({
  reducer: {
    common: commonSlice.reducer,
    user: userSlice.reducer,
    doctorData: doctorSlice.reducer,
  },
})

export type RootState = ReturnType<typeof globalStore.getState>
export type AppDispatch = typeof globalStore.dispatch
