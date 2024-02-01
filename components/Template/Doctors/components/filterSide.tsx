import { Grid, Slider, Switch } from "@mui/material";
import {
  Autocomplete,
  AutocompleteItem,
  Checkbox,
  CheckboxGroup,
  Divider,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useState } from "react";
import { useDoctorsCtx } from "../context";
import { CustomCheckbox } from "@/components/Modules/CheckBoxUi/CheckBoxUi";

interface center {
  title: string;
  value: string;
}

interface IWeekDays {
  lable: string;
  value: string;
}

const weekDays: IWeekDays[] = [
  {
    lable: "شنبه",
    value: "saturday",
  },
  {
    lable: "یکشنبه",
    value: "sunday",
  },
  {
    lable: "دوشنبه",
    value: "monday",
  },
  {
    lable: "سه شنبه",
    value: "tuesday",
  },
  {
    lable: "چهارشنبه",
    value: "wednesday",
  },
  {
    lable: "پنجشنبه",
    value: "thursday",
  },
  {
    lable: "جمعه",
    value: "friday",
  },
];

const FilterSideBar = () => {
  const [isOnlineConsultant, setIsOnlineConsultant] = useState<boolean>(false);
  const {
    allCityListArray,
    allStateListArray,
    setSelectedState,
    setSelectedCity,
    selectedCity,
    selectedState,
    allExperties,
    setSearchInputValue,
    searchInputValue,
    selectExperty,
    setSelectExperty,
  } = useDoctorsCtx();

  const centerType: center[] = [
    {
      title: "همه",
      value: "all",
    },
    {
      title: "دولتی",
      value: "govermental",
    },
    {
      title: "خصوصی",
      value: "private",
    },
  ];

  const stateChangeHandler = (state) => {
    setSelectedState(state);
  };

  const cityChangeHandler = (city) => {
    setSelectedCity(city);
  };

  const expertyChangeHandler = (experty) => {
    setSelectExperty(experty);
  };
  return (
    <Grid item xs={12} sm={12} md={3.5} lg={3.5} className="p-2">
      <div className="border rounded-2xl py-2">
        <h3 className="text-center py-2 mb-2">جستجو کنید</h3>
        <Grid container className="">
          <Grid item xs={6} className="">
            <button
              className="text-center bg-green-600 text-white w-full py-2 hover:bg-green-700"
              onClick={() => setIsOnlineConsultant(false)}
            >
              نوبت دهی
            </button>
          </Grid>
          <Grid item xs={6} className="">
            <button
              className="text-center bg-blue-600 text-white w-full py-2 hover:bg-blue-700"
              onClick={() => setIsOnlineConsultant(true)}
            >
              مشاوره آنلاین
            </button>
          </Grid>
        </Grid>
        {isOnlineConsultant && (
          <div className="flex justify-center items-center gap-2 my-3">
            <button className="p-2 shadow bg-[#f8f9ff] rounded hover:bg-gray-100">
              تلفنی
            </button>
            <button className="p-2 shadow bg-[#f8f9ff] rounded hover:bg-gray-100">
              متنی
            </button>
            <button className="p-2 shadow bg-[#f8f9ff] rounded hover:bg-gray-100">
              تصویری
            </button>
          </div>
        )}
        <Grid container className="px-2 my-2" alignItems={"center"}>
          <Grid xs={3} className="w-fit">
            نام پزشک
          </Grid>
          <Grid xs={9}>
            <Input
              type="text"
              label="جستجو بر اساس نام پزشک"
              size="sm"
              classNames={{
                inputWrapper: "h-10",
              }}
              value={searchInputValue}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSearchInputValue(event.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Grid container className="px-2 my-2" alignItems={"center"}>
          <Grid xs={3} className="w-fit">
            استان
          </Grid>
          <Grid xs={9}>
            <Autocomplete
              size="sm"
              defaultSelectedKey="همه استان‌ها"
              selectedKey={selectedState}
              onSelectionChange={stateChangeHandler}
            >
              {allStateListArray.map((state) => (
                <AutocompleteItem key={state.value} value={state.value}>
                  {state.stateName}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          </Grid>
        </Grid>
        <Grid container className="px-2 my-2" alignItems={"center"}>
          <Grid xs={3} className="w-fit">
            شهر
          </Grid>
          <Grid xs={9}>
            <Autocomplete
              size="sm"
              label="شهر مورد نظر خود را انتخاب کنید"
              isDisabled={selectedState ? false : true}
              selectedKey={selectedCity}
              onSelectionChange={cityChangeHandler}
            >
              {allCityListArray.length &&
                allCityListArray.map((city) => (
                  <AutocompleteItem key={city.id} value={city.name}>
                    {city.name}
                  </AutocompleteItem>
                ))}
            </Autocomplete>
          </Grid>
        </Grid>
        <Grid container className="px-2 my-2" alignItems={"center"}>
          <Grid xs={3} className="w-fit">
            تخصص
          </Grid>
          <Grid xs={9}>
            <Autocomplete
              label="تخصص مورد نظر خود را انتخاب کنید"
              selectedKey={selectExperty}
              onSelectionChange={expertyChangeHandler}
            >
              {allExperties.map((item, index) => (
                <AutocompleteItem key={index} value={item}>
                  {item}
                </AutocompleteItem>
              ))}
            </Autocomplete>
          </Grid>
        </Grid>
        <Grid container className="px-2 my-2" alignItems={"center"}>
          <Grid xs={3} className="w-fit">
            خدمت
          </Grid>
          <Grid xs={9}>
            <Input
              type="text"
              size="sm"
              classNames={{
                inputWrapper: "h-3",
              }}
            />
          </Grid>
        </Grid>
        <Grid container className="px-2 my-2" alignItems={"center"}>
          <Grid xs={3} className="w-fit">
            درجه علمی
          </Grid>
          <Grid xs={9}>
            <Input
              type="text"
              size="sm"
              classNames={{
                inputWrapper: "h-3",
              }}
            />
          </Grid>
        </Grid>
        <Grid container className="px-2 my-2" alignItems={"center"}>
          <Grid xs={3} className="w-fit">
            نوع مرکز
          </Grid>
          <Grid xs={9}>
            <Select
              label="نوع مرکز مورد نظر خود را انتخاب کنید"
              size="sm"
              defaultSelectedKeys={["all"]}
              classNames={{
                // selectorIcon:
                innerWrapper:
                  "flex justify-center items-center flex-row-reverse",
                value: "text-right",
                selectorIcon: "hidden",
              }}
            >
              {centerType.map((center) => (
                <SelectItem key={center.value} value={center.value}>
                  {center.title}
                </SelectItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Grid container className="px-2 my-2">
          <Grid xs={3} className="w-fit">
            جنسیت
          </Grid>
          <Grid xs={9}>
            <CheckboxGroup
              orientation="horizontal"
              color="primary"
              //   defaultValue={["buenos-aires", "san-francisco"]}
            >
              {/* <Checkbox value="all" classNames={{ label: "mr-1" }} name="all">
                همه
              </Checkbox> */}
              <Checkbox value="man" classNames={{ label: "mr-1" }}>
                آقا
              </Checkbox>
              <Checkbox value="woman" classNames={{ label: "mr-1" }}>
                خانم
              </Checkbox>
            </CheckboxGroup>
          </Grid>
        </Grid>
        <Grid container className="px-2 my-2">
          <Grid xs={3} className="w-fit text-sm">
            پذیرش بیمه
          </Grid>
          <Grid xs={9}>
            <CheckboxGroup
              orientation="horizontal"
              color="primary"
              //   defaultValue={["buenos-aires", "san-francisco"]}
            >
              <Checkbox value="yes" classNames={{ label: "mr-1" }} name="yes">
                بله
              </Checkbox>
              <Checkbox value="no" classNames={{ label: "mr-1" }} name="no">
                خیر
              </Checkbox>
            </CheckboxGroup>
          </Grid>
        </Grid>
        <Grid container className="px-2 my-2">
          <Grid xs={3} className="w-fit text-sm">
            پذیرش اطفال
          </Grid>
          <Grid xs={9}>
            <CheckboxGroup
              orientation="horizontal"
              color="primary"
              //   defaultValue={["buenos-aires", "san-francisco"]}
            >
              <Checkbox value="yes" classNames={{ label: "mr-1" }} name="yes">
                بله
              </Checkbox>
              <Checkbox value="no" classNames={{ label: "mr-1" }} name="no">
                خیر
              </Checkbox>
            </CheckboxGroup>
          </Grid>
        </Grid>
        <Grid container className="px-2 my-2">
          <Grid xs={3} className="w-fit text-sm">
            روزهای کاری
          </Grid>
          <Grid xs={9}>
            <CheckboxGroup
              className=""
              orientation="horizontal"
              // value={groupSelected}
              // onChange={setGroupSelected}
            >
              {weekDays.map((day) => (
                <CustomCheckbox value={day.value}>{day.lable}</CustomCheckbox>
              ))}
            </CheckboxGroup>
          </Grid>
        </Grid>
        <Grid container className="px-2 my-2" alignItems={"center"}>
          <Grid xs={3} className="w-fit text-sm">
            میزان محبوبیت
          </Grid>
          <Grid xs={9} alignItems={"center"} className="px-3">
            <Slider min={0} max={100} step={5} valueLabelDisplay="auto" />
          </Grid>
        </Grid>
        <Grid container className="px-2 my-2" alignItems={"center"}>
          <Grid xs={3} className="w-fit text-sm">
            بیشترین امتیاز
          </Grid>
          <Grid xs={9} alignItems={"center"} className="px-3">
            <Slider min={0} max={10} step={1} valueLabelDisplay="auto" />
          </Grid>
        </Grid>
        <Grid container className="px-2 my-2" alignItems={"center"}>
          <Grid xs={3} className="w-fit text-sm">
            کمترین تعرفه
          </Grid>
          <Grid xs={9} alignItems={"center"} className="px-3">
            <Switch />
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default FilterSideBar;

{
  /* <Grid container className="px-2 my-2">
  <Grid xs={3} className="w-fit">
    شهر
  </Grid>
  <Grid xs={9}>
    <Input
      type="text"
      size="sm"
      classNames={{
        inputWrapper: "h-3",
      }}
    />
  </Grid>
</Grid>; */
}
