export interface ISetDataDoctorAction {
  officeId?: number|null
  clinicId?: number|null
  doctorId?: number
  medicalSystemCode?: string
  departmentID?: number
  tokenAutomation?: string,
  centerIsPatientOwner?:boolean
}
