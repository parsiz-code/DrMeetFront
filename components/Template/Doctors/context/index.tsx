import { DoctorServices } from "@/services/doctors";
import {
  IGetAllDoctorsResponse,
  IDoctorData,
} from "@/services/doctors/interface/getAllDoctorResponse";
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
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  allDoctorsData: IGetAllDoctorsResponse | undefined;
  allDoctorsDataList: IDoctorData[];
}
const DoctorCtx = createContext<ICtxValue | undefined>(undefined);
const DoctorsCtxProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [allDoctorsData, setAllDoctorsData] = useState<
    IGetAllDoctorsResponse | undefined
  >();
  const [allDoctorsDataList, setAllDoctorsDataList] = useState<IDoctorData[]>(
    []
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(12);

  const { getAllDoctorAsync } = DoctorServices();

  useEffect(() => {
    getDoctors();
  }, []);

  useEffect(() => {
    getDoctors();
  }, [currentPage]);

  const getDoctors = async () => {
    setLoading(true);
    try {
      const { data } = await getAllDoctorAsync({
        PageNumber: currentPage,
        PageSize: pageSize,
      });
      data && setAllDoctorsData(data);
      setAllDoctorsDataList(data!.list);
    } finally {
      setLoading(false);
    }
  };

  const ctxValue: ICtxValue = {
    loading,
    currentPage,
    setCurrentPage,
    allDoctorsData,
    allDoctorsDataList,
  };

  return <DoctorCtx.Provider value={ctxValue}>{children}</DoctorCtx.Provider>;
};

export default DoctorsCtxProvider;
export const useDoctorsCtx = () => useContext(DoctorCtx)!;
