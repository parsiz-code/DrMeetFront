import { IResBase } from "@/services/base";
import { useParsizAxios } from "@/utils/axios/parsiz";

export const RecordReferServices = () => {
  const { parsizTebAxios } = useParsizAxios();
  const getReceptionAsync = async () => {
    const res = await parsizTebAxios.get<IResBase<any>>(
      "PatientInfo/Receptions"
    );
    return res.data;
  };

  return {
    getReceptionAsync,
  };
};
