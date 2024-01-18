import { TGenderType } from "../types";

export interface ILoginResData {
  availableClinics: IAvailableClinics[];
  availableDoctors: IAvailableDoctors[];
  availableOffices: IAvailableOffices[];
  hotKey: IHotKey;
  token: ITokenData;
  userInfo: IUserInfo;
  isTwoStep: boolean;
}

export interface IHotKey {
  save: IHotkeyObj;
  moveUp: IHotkeyObj;
  moveDown: IHotkeyObj;
  edit: IHotkeyObj;
  delete: IHotkeyObj;
  search: IHotkeyObj;
  refresh: IHotkeyObj;
  create: IHotkeyObj;
  report: IHotkeyObj;
  select: IHotkeyObj;
}

export interface IHotkeyObj {
  key1: number;
  key2: number;
}

export interface ITokenData {
  token: string;
  expiredDate: Date;
}

export interface IUserInfo {
  birthDate?: string;
  email: string;
  firstName: string;
  gender: TGenderType;
  id: number;
  lastName: string;
  mobile: string;
  nationalCode: string;
  phoneNumber: string;
  userName: string;
  userRoles: IUserRole[];
  userTypes: IUserTypes[];
  token: string;
  picture: string;
  isFirstLogin?: boolean;
  hasAutomation?: boolean;
}
export interface IAvailableClinics {
  cityId: number;
  cityName: string;
  id: number;
  name: string;
  organizationId: number;
  siamId: string;
  stateId: number;
  departments: IResGetDepartments[];
}

export interface IAvailableDoctors {
  expertis: string;
  id: number;
  medicalSystemCode: string;
  name: string;
  salamatPassword?: string;
  salamatUsername?: string;
  userId: number;
  specializedModules: ISpecializedModules;
}

export interface IResGetDepartments {
  id: number;
  title: string;
  officeId?: number | null;
  clinicId?: number | null;
}

export interface IResGetDoctors {
  id: number;
  userId: number;
  firstName: string;
  lastName: string;
  medicalSystemCode: string;
  expertiseId: number;
  persentOfCooperation: number;
  doctorColor: string;
  expertise: string;
  gender: number;
  nationalCode: string;
  birthDate?: string;
  email: string;
  webSite: string;
  phoneNumber: string;
  mobile: string;
  userName: string;
  fatherName?: string;
  salamatUsername?: string;
  salamatPassword?: string;
  isDelete: boolean;
  accountingObjectId: number;
  customId?: number;
  picture?: string;
  comment?: string;
  automationUsername?: string;
  automationPassword?: string;
  automationEmployeeJobId?: number;
  bio?: string;
  specializedModules: ISpecializedModules;
  showInOnlineReserveTime: boolean;
  durationOfVisit: number;
  signature?: string;
}

export interface IAddDoctorResponse {
  doctorId: number;
}

export interface ISpecializedModules {
  [key: string]: string;
}

export interface IUserRole {
  id: number;
  roleName: string;
}

export interface IUserTypes {
  name: string;
  id: number;
}
export interface IAvailableOffices {
  city: string;
  cityId: number;
  id: number;
  organizationId: number;
  stateId: number;
  title: string;
  departments: IResGetDepartments[];
}
