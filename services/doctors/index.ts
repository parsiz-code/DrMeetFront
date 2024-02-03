import { useParsizAxios } from "@/utils/axios/parsiz";
import { IGetAllDoctors } from "./interface/getAllDoctor";
import { IGetAllDoctorsResponse } from "./interface/getAllDoctorResponse";
import { IResBase } from "../base";
import { IGetCitiesResponse } from "./interface/getAllCitiesResponse";
import { IGetCities } from "./interface/getAllCities";

export const DoctorServices = () => {
  const { parsizTebAxios } = useParsizAxios();

  const getAllDoctorAsync = async (params: IGetAllDoctors) => {
    const res = await parsizTebAxios.get<IResBase<IGetAllDoctorsResponse>>(
      "OnlineReserveTime/GetDoctors/pagination",
      { params }
    );
    return res.data;
  };

  const getAllCitiesAsync = async (params?: IGetCities) => {
    const res = await parsizTebAxios.get<IResBase<IGetCitiesResponse[]>>(
      "City/GetCities" , {params}
    );

    return res.data;
  };

  return {
    getAllDoctorAsync,
    getAllCitiesAsync,
  };
};
