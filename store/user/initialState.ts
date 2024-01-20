import { localStoragesName } from "@/utils/models/enum/localStoragesName";
import { IInitialStateStoreUser } from "./interfaces/InitialState";

// export const initialUserStoreState: IInitialStateStoreUser = {
//   token: sessionStorage.getItem(localStoragesName.token) || undefined,
//   userType: sessionStorage.getItem(localStoragesName.userType),
// };


// export const initialUserStoreState: IInitialStateStoreUser = {
//   token: (typeof sessionStorage !== 'undefined' && sessionStorage.getItem(localStoragesName.token)) || undefined,
//   userType: sessionStorage.getItem(localStoragesName.userType),
// }

const getTokenFromSessionStorage = (): string | undefined => {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(localStoragesName.token) || undefined
  }
  return undefined
}

const getUserTypeFromSessionStorage = (): string | undefined => {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(localStoragesName.userType) || undefined
  }
  return undefined
}

export const initialUserStoreState: IInitialStateStoreUser = {
  token: getTokenFromSessionStorage(),
  userType: getUserTypeFromSessionStorage(),
}