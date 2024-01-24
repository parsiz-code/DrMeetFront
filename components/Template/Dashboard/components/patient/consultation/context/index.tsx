import { PatientConsultationServices } from "@/services/patient/consultation";
import { IGetConsultationResponse } from "@/services/patient/consultation/interface/GetConsultationResponse";
import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ICtxValue {
  loading: boolean;
  allCosultationData: IGetConsultationResponse[] | undefined;
}
const PatientConsultationCtx = createContext<ICtxValue | undefined>(undefined);
const PatientConsultationCtxProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [allCosultationData, setAllConsultationData] =
    useState<IGetConsultationResponse[]>();
  const { getAllConsultation } = PatientConsultationServices();

  useEffect(() => {
    getAllData()
  }, []);

  const getAllData = async () => {
    setLoading(true);
    try {
      const { data, statusCode } = await getAllConsultation();
      statusCode === 200 && setAllConsultationData(data!);
    } finally {
      setLoading(false);
    }
  };

  const ctxValue: ICtxValue = {
    loading,
    allCosultationData,
  };

  return (
    <PatientConsultationCtx.Provider value={ctxValue}>
      {children}
    </PatientConsultationCtx.Provider>
  );
};

export default PatientConsultationCtxProvider;
export const usePatientConsultation = () => useContext(PatientConsultationCtx)!;
