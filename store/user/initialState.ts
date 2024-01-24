import { localStoragesName } from "@/utils/models/enum/localStoragesName";
import { IInitialStateStoreUser } from "./interfaces/InitialState";

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