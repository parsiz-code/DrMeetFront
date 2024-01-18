// import { USER_TYPES_INDEX } from '@/utils/models/enum/user'
// import { IInitialStoreDoctor } from './interfaces/InitialState'
// import { localStoragesName } from '@/utils/models/enum/localStoragesName'

// const condtionCenterSetting = () => {
//   if (!sessionStorage.getItem(localStoragesName.token)) return false
//   if (sessionStorage.getItem(localStoragesName.officeId) || sessionStorage.getItem(localStoragesName.clinicId)) return false
//   if (!sessionStorage.getItem(localStoragesName.userType)) return true
//   const userType = JSON.parse(sessionStorage.getItem(localStoragesName.userType) || '')
//   if (userType == USER_TYPES_INDEX.patient) return false
//   return true
// }

// export const initialDoctorStore: IInitialStoreDoctor = {
//   officeId: sessionStorage.getItem(localStoragesName.officeId) ? +sessionStorage.getItem(localStoragesName.officeId)! : null,
//   clinicId: sessionStorage.getItem(localStoragesName.clinicId) ? +sessionStorage.getItem(localStoragesName.clinicId)! : null,
//   doctorId: sessionStorage.getItem(localStoragesName.doctorId) ? +sessionStorage.getItem(localStoragesName.doctorId)! : undefined,
//   visibleCenterSetting: condtionCenterSetting(),
//   medicalSystemCode: sessionStorage.getItem(localStoragesName.medicalSystemCode),
//   departmentID: sessionStorage.getItem(localStoragesName.departmentID) ? +sessionStorage.getItem(localStoragesName.departmentID)! : undefined,
//   tokenAutomation: sessionStorage.getItem(localStoragesName.tokenAutomation),
//   centerIsPatientOwner: !!sessionStorage.getItem(localStoragesName.centerIsPatientOwner) ??false
// }

import { USER_TYPES_INDEX } from '@/utils/models/enum/user'
import { IInitialStoreDoctor } from './interfaces/InitialState'
import { localStoragesName } from '@/utils/models/enum/localStoragesName'

const isSessionStorageAvailable = () => typeof sessionStorage !== 'undefined';

const getItemFromSessionStorage = (key: string): string | null => {
  return isSessionStorageAvailable() ? sessionStorage.getItem(key) : null;
}

const condtionCenterSetting = () => {
  if (!getItemFromSessionStorage(localStoragesName.token)) return false;
  if (getItemFromSessionStorage(localStoragesName.officeId) || getItemFromSessionStorage(localStoragesName.clinicId)) return false;
  if (!getItemFromSessionStorage(localStoragesName.userType)) return true;
  const userType = JSON.parse(getItemFromSessionStorage(localStoragesName.userType) || '');
  if (userType === USER_TYPES_INDEX.patient) return false;
  return true;
}

const getSessionStorageItemAsNumber = (key: string): number | undefined => {
  const value = getItemFromSessionStorage(key);
  return value ? +value : undefined;
}

export const initialDoctorStore: IInitialStoreDoctor = {
  officeId: getSessionStorageItemAsNumber(localStoragesName.officeId),
  clinicId: getSessionStorageItemAsNumber(localStoragesName.clinicId),
  doctorId: getSessionStorageItemAsNumber(localStoragesName.doctorId),
  visibleCenterSetting: condtionCenterSetting(),
  medicalSystemCode: getItemFromSessionStorage(localStoragesName.medicalSystemCode),
  departmentID: getSessionStorageItemAsNumber(localStoragesName.departmentID),
  tokenAutomation: getItemFromSessionStorage(localStoragesName.tokenAutomation),
  centerIsPatientOwner: !!getItemFromSessionStorage(localStoragesName.centerIsPatientOwner) ?? false
}

