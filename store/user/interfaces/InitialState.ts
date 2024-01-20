import { IUserInfo } from "@/services/account/interface/loginResponse"


export interface IInitialStateStoreUser {
  token?: string
  userInfo?: IUserInfo
  userType?: string | number | null
}
