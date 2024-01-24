import { IResBase } from "@/services/base";
import { useParsizAxios } from "@/utils/axios/parsiz";
import { IGetConsultationResponse } from "./interface/GetConsultationResponse";

export const PatientConsultationServices = () => {
  const { parsizTebAxios } = useParsizAxios();
  const getAllConsultation = async () => {
    const res = await parsizTebAxios.get<IResBase<IGetConsultationResponse[]>>(
      "OnlineConsultant/GetConsultant"
    );
    return res.data;
  };

  return {
    getAllConsultation,
  };
};
