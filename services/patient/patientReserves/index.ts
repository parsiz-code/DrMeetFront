import { IResBase } from "@/services/base";
import { useParsizAxios } from "@/utils/axios/parsiz";

export const PatientReserveServices = () => {
  const { parsizTebAxios } = useParsizAxios();

  const getPatientReservesAsync = async () => {
    const res = await parsizTebAxios.get<IResBase<any>>(
      "PatientInfo/ReserveTimes"
    );
    return res.data;
  };

  return {
    getPatientReservesAsync,
  };
};
