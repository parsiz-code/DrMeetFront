type valuesTypes = string | null

export interface IInitialStoreDoctor {
  officeId?: number|null
  clinicId?: number|null
  doctorId?: number
  visibleCenterSetting?: boolean
  medicalSystemCode?: valuesTypes
  departmentID?: number
  tokenAutomation?: valuesTypes,
  centerIsPatientOwner?:boolean
}
