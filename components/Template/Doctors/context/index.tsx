import { DoctorServices } from "@/services/doctors";
import { IGetCitiesResponse } from "@/services/doctors/interface/getAllCitiesResponse";
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
import _ from "lodash";
import { useRouter } from "next/router";

interface ICtxValue {
  loading: boolean;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  allDoctorsData: IGetAllDoctorsResponse | undefined;
  allDoctorsDataList: IDoctorData[];
  allCitiesList: IGetCitiesResponse[];
  searchInputValue: string | undefined;
  setSearchInputValue: Dispatch<SetStateAction<string | undefined>>;
  searchCityInputValue: string;
  setSearchCityInputValue: Dispatch<SetStateAction<string>>;
  selectedCity: IGetCitiesResponse | undefined;
  setSelectedCity: Dispatch<SetStateAction<IGetCitiesResponse | undefined>>;

  getCities: (name?: string) => Promise<void>;
  getDoctors: (city?: IGetCitiesResponse, query?: string) => Promise<void>;
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
  const [allCitiesList, setAllCitiesDataList] = useState<IGetCitiesResponse[]>(
    []
  );
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(12);
  const [searchInputValue, setSearchInputValue] = useState<string>();
  const [searchCityInputValue, setSearchCityInputValue] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<
    IGetCitiesResponse | undefined
  >();
  const [timerID, setTimerID] = useState<NodeJS.Timeout | null>(null);

  const { getAllDoctorAsync, getAllCitiesAsync } = DoctorServices();

  const router = useRouter();

  useEffect(() => {
    router.push(
      {
        query: { q: searchInputValue },
      },
      undefined,
      { shallow: true }
    );
  }, [searchInputValue]);

  useEffect(() => {
    if (router.query.q) {
      timerID && clearTimeout(timerID);
      const tId = setTimeout(() => {
        setSearchInputValue(router.query.q as string);
        getDoctors(undefined, router.query.q as string);
      }, 1000);
      setTimerID(tId);
    } else {
      getDoctors();
    }
  }, [router, currentPage]);

  const getDoctors = async (city?: IGetCitiesResponse, query?: string) => {
    setLoading(true);
    try {
      const { data } = await getAllDoctorAsync({
        SearchParameter: query,
        CityName: city?.name,
        PageNumber: currentPage,
        PageSize: pageSize,
      });
      data && setAllDoctorsData(data);
      setAllDoctorsDataList(data!.list);
    } finally {
      setLoading(false);
    }
  };

  const getCities = async (name?: string) => {
    setLoading(true);
    try {
      const { data } = await getAllCitiesAsync({
        name,
      });
      const groupedByStateName = _.groupBy(data, "stateName");
      const groupedArray: IGetCitiesResponse[] = _.orderBy(
        data,
        ["stateName", "name"],
        ["asc", "asc"]
      );

      data && setAllCitiesDataList(groupedArray);
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
    allCitiesList,
    searchInputValue,
    setSearchInputValue,
    selectedCity,
    setSelectedCity,
    getCities,
    getDoctors,
    searchCityInputValue,
    setSearchCityInputValue,
  };

  return <DoctorCtx.Provider value={ctxValue}>{children}</DoctorCtx.Provider>;
};

export default DoctorsCtxProvider;
export const useDoctorsCtx = () => useContext(DoctorCtx)!;
