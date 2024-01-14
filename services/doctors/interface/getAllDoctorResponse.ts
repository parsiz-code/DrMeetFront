export interface IGetAllDoctorsResponse {
  list: IDoctorData[];
  pagination: IPagination;
}

export interface IDoctorData {
  id: number;
  picture: string;
  firstName: string;
  lastName: string;
  medicalSystemCode: string;
  expertise: string;
  hasOnlineReserveTime: string;
  cityName: string;
  bio?: string;
  onlineConsultant?: IOnlineConsultant;
}

export interface IOnlineConsultant {
  serviceCost: number;
}

export interface IPagination {
  totalCount: number;
  totalPages: number;
  pageNumber: number;
  pageSize: number;
}
