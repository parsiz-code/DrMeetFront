import { RecordReferServices } from "@/services/patient/recordRefer";
import { IGetReceptions } from "@/services/patient/recordRefer/interface/GetPatientReception";
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
  allReceptions: IGetReceptions[];
}
const PatientRecordReferCtx = createContext<ICtxValue | undefined>(undefined);
const PatientRecordReferCtxProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [allReceptions, setAllReceptions] = useState<IGetReceptions[]>([]);

  const { getReceptionAsync } = RecordReferServices();

  useEffect(() => {
    getReceptions();
  }, []);

  const getReceptions = async () => {
    setLoading(true);
    try {
      const { data, statusCode } = await getReceptionAsync();
      if (statusCode === 200) {
        setAllReceptions(data!);
      }
    } finally {
      setLoading(false);
    }
  };

  const ctxValue: ICtxValue = {
    loading,
    allReceptions,
  };

  return (
    <PatientRecordReferCtx.Provider value={ctxValue}>
      {children}
    </PatientRecordReferCtx.Provider>
  );
};

export default PatientRecordReferCtxProvider;
export const usePatientRecordsRefer = () => useContext(PatientRecordReferCtx)!;
