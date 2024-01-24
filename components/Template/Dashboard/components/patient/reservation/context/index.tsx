import { PatientReserveServices } from "@/services/patient/patientReserves";
import { IGetPatientReservesResponse } from "@/services/patient/patientReserves/interface/GetPatientReservesResponse";
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
  allReservedData: IGetPatientReservesResponse[] | undefined;
}
const PatientReservationCtx = createContext<ICtxValue | undefined>(undefined);
const PatientReservationCtxProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [allReservedData, setAllReservedData] =
    useState<IGetPatientReservesResponse[]>();

  const { getPatientReservesAsync } = PatientReserveServices();

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    setLoading(true);
    try {
      const { data, statusCode } = await getPatientReservesAsync();
      if (statusCode === 200) {
        setAllReservedData(data!);
      }
    } finally {
      setLoading(false);
    }
  };

  const ctxValue: ICtxValue = {
    loading,
    allReservedData,
  };

  return (
    <PatientReservationCtx.Provider value={ctxValue}>
      {children}
    </PatientReservationCtx.Provider>
  );
};

export default PatientReservationCtxProvider;
export const usePatientReservationRecord = () => useContext(PatientReservationCtx)!;
