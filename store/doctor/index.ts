import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialDoctorStore } from './initialState'
import { ISetDataDoctorAction } from './interfaces/payloads/setDataDoctor'
import { localStoragesName } from '@/utils/models/enum/localStoragesName'

export const doctorSlice = createSlice({
  name: 'doctor',
  initialState: initialDoctorStore,
  reducers: {
    setDataDoctor: (state, action: PayloadAction<ISetDataDoctorAction>) => {
      if (action.payload.clinicId) {
        state.clinicId = action.payload.clinicId
        sessionStorage.setItem(localStoragesName.clinicId, action.payload.clinicId?.toString())
      }
      if (action.payload.doctorId) {
        state.doctorId = action.payload.doctorId
        sessionStorage.setItem(localStoragesName.doctorId, action.payload.doctorId?.toString())
      }
      if (action.payload.officeId) {
        state.officeId = action.payload.officeId
        sessionStorage.setItem(localStoragesName.officeId, action.payload.officeId?.toString())
      }
      if (action.payload.medicalSystemCode) {
        state.medicalSystemCode = action.payload.medicalSystemCode
        sessionStorage.setItem(localStoragesName.medicalSystemCode, action.payload.medicalSystemCode)
      }
      if (action.payload.departmentID) {
        state.departmentID = action.payload.departmentID
        sessionStorage.setItem(localStoragesName.departmentID, action.payload.departmentID?.toString())
      }
      if (action.payload.tokenAutomation) {
        state.tokenAutomation = action.payload.tokenAutomation
        sessionStorage.setItem(localStoragesName.tokenAutomation, action.payload.tokenAutomation)
      }
      if (action.payload.centerIsPatientOwner) {
        state.centerIsPatientOwner = action.payload.centerIsPatientOwner
        sessionStorage.setItem(localStoragesName.centerIsPatientOwner, action.payload.centerIsPatientOwner?.toString())
      }
      
    },
    setVisibleCenterSetting: (state, action: PayloadAction<boolean>) => {
      state.visibleCenterSetting = action.payload
    },
    resetDoctorData: state => {
      state.officeId = undefined
      state.clinicId = undefined
      state.doctorId = undefined
      state.visibleCenterSetting = undefined
      state.medicalSystemCode = undefined
      state.tokenAutomation = undefined
      state.centerIsPatientOwner = undefined
    },
  },
})

export const { setDataDoctor, setVisibleCenterSetting, resetDoctorData } = doctorSlice.actions

export default doctorSlice.reducer
