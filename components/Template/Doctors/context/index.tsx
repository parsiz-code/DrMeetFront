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
interface allStates {
  id: number;
  stateName: string;
  value: string;
}

interface allCities {
  id: number;
  cityName: string;
  value: string;
}

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
  // selectedCity: IGetCitiesResponse | undefined;
  // setSelectedCity: Dispatch<SetStateAction<IGetCitiesResponse | undefined>>;
  allStateListArray: any[];
  selectedState: string;
  setSelectedState: Dispatch<SetStateAction<string>>;
  allCityListArray: any[];
  setSelectedCity: Dispatch<SetStateAction<string>>;
  selectedCity: string;
  allExperties: any[];
  setSelectExperty: React.Dispatch<React.SetStateAction<string>>;
  selectExperty: string;

  getCities: (name?: string) => Promise<void>;
  getDoctors: (city?: IGetCitiesResponse, query?: string) => Promise<void>;
  createUniqueCityList: (selectedStateName: string) => void;
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
  const [allStateListArray, setAllStateListArray] = useState<any[]>([]);
  const [selectedState, setSelectedState] = useState<any>();
  const [allCityListArray, setAllCityListArray] = useState<any[]>([]);
  const [selectedCity, setSelectedCity] = useState<any>();
  const [allExperties, setAllExperties] = useState<any[]>([]);
  const [selectExperty, setSelectExperty] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(12);
  const [searchInputValue, setSearchInputValue] = useState<string>();
  const [searchCityInputValue, setSearchCityInputValue] = useState<string>("");
  // const [selectedCity, setSelectedCity] = useState<
  //   IGetCitiesResponse | undefined
  // >();

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
      setSearchInputValue(router.query.q as string);
      getDoctors(undefined, router.query.q as string);
    } else {
      getDoctors();
      getCities();
    }
  }, [router, currentPage]);

  useEffect(() => {
    getCities();
  }, []);

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
      let uniqueSortedExperties = _.orderBy(
        _.uniq(data.list.map((doctor) => doctor.expertise))
      );
      setAllExperties(uniqueSortedExperties);
      console.log(uniqueSortedExperties);
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

      // let uniqueStateNames = _.uniq(_.map(data, "stateName"));
      let uniqueSortedData = _.orderBy(
        _.uniq(_.map(data, "stateName")),
        ["stateName"],
        ["asc"]
      );
      uniqueSortedData = ["همه استان‌ها"].concat(uniqueSortedData);
      const states: allStates[] = _.map(
        uniqueSortedData,
        (stateName, index) => {
          const id = stateName === "همه استان‌ها" ? 0 : index;

          return {
            id: id,
            stateName: stateName,
            value: stateName,
          };
        }
      );

      setAllStateListArray(states);

      data && setAllCitiesDataList(groupedArray);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    createUniqueCityList(selectedState);
    console.log(selectedState);
  }, [selectedState]);

  const createUniqueCityList = (selectedStateName: string) => {
    const filteredCities = allStateListArray.filter(
      (city) => city.stateName === selectedStateName
    );
    const uniqueCities = _.uniqBy(filteredCities, "cityName");

    const cityList: allCities[] = _.map(uniqueCities, (city, index) => ({
      id: city.id,
      cityName: city.name,
      value: city.name,
    }));
    const allCitiesList = _.concat(
      [{ id: 0, cityName: "همه شهرها", value: "همه شهرها" }],
      cityList
    );

    setAllCityListArray(allCitiesList);
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
    allStateListArray,
    allCityListArray,
    setSelectedState,
    selectedState,
    createUniqueCityList,
    allExperties,
    selectExperty,
    setSelectExperty,
  };

  return <DoctorCtx.Provider value={ctxValue}>{children}</DoctorCtx.Provider>;
};

export default DoctorsCtxProvider;
export const useDoctorsCtx = () => useContext(DoctorCtx)!;
