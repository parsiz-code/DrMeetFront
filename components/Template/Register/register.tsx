import { Grid } from "@mui/material";
import {
  Button,
  Image,
  Input,
  Link,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useEffect, useMemo, useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { toPersianDigits } from "@/helper/dateTimeHelper";
import { useRouter } from "next/router";

const RegisterPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [firstNameInputValue, setFirstNameInputValue] = useState<string>("");
  const [lastNameInputValue, setLastNameInputValue] = useState<string>("");
  const [userNameInputValue, setUserNameInputValue] = useState<string>("");
  const [nationalCodeInputValue, setNationCodeInputValue] =
    useState<string>("");
  const [phoneNumberInputValue, setphoneNumberInputValue] =
    useState<string>("");
  const [genderSelected, setGenderSelected] = useState<number>(0);
  const [insuranceSelected, setInsuranceSelected] = useState<string>("");
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");
  const [repeatPasswordInputValue, setRepeatPasswordInputValue] =
    useState<string>("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  const router = useRouter()

  //   const validateEmail = (value: string) =>
  //     value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  //   const isInvalidEmail = useMemo(() => {
  //     if (emailInputValue === "") return false;

  //     return validateEmail(emailInputValue) ? false : true;
  //   }, [emailInputValue]);

  const isInvalidPassword = useMemo(() => {
    if (passwordInputValue === "") return false;

    return passwordInputValue.length < 3 ? true : false;
  }, [passwordInputValue]);

  const isRepeatValid = useMemo(() => {
    return repeatPasswordInputValue === passwordInputValue ? true : false;
    // return passwordInputValue === repeatPasswordInputValue ? true : false;
  }, [repeatPasswordInputValue]);

  //   event: React.ChangeEvent<HTMLInputElement>

  let token: string | null = "";

  // Check if the code is running in the browser
  if (typeof window !== "undefined") {
    token = sessionStorage.getItem("token");
  }

  useEffect(() => {
    if (token) {
      router.push("/dashboard");
    }
  }, []);

  return (
    <div className="h-[100vh] bg-gradient-to-bl from-[#3dffbf] to-blue-500 text-center">
      <div className="pt-10 px-3 lg:w-[70rem] my-0 mx-auto">
        <Grid container className="bg-white py-10 px-4 rounded-xl">
          <Grid item container xs={12} sm={12} md={8} lg={8} className="">
            <Grid item xs={12} sm={12} md={12} lg={12} className="p-3">
              <Link className="" href="/">
                <Image src="/images/drmeet final1.png" width={150} />
              </Link>
            </Grid>

            <Grid item xs={12} sm={6} md={6} lg={6} className="p-3">
              <div className="flex !flex-col justify-center items-center">
                <div className="w-full flex !flex-col items-center gap-3">
                  <Input
                    type="text"
                    label="نام"
                    size="sm"
                    fullWidth
                    required
                    value={firstNameInputValue}
                    onValueChange={setFirstNameInputValue}
                    classNames={{
                      input: "text-center text-black",
                    }}
                  />
                  <Input
                    type="text"
                    label="نام خانوادگی"
                    size="sm"
                    fullWidth
                    required
                    value={lastNameInputValue}
                    onValueChange={setLastNameInputValue}
                    classNames={{
                      input: "text-center text-black",
                    }}
                  />
                  <Input
                    type="text"
                    label="نام کاربری"
                    size="sm"
                    fullWidth
                    required
                    value={userNameInputValue}
                    onValueChange={setUserNameInputValue}
                    classNames={{
                      input: "text-center text-black",
                    }}
                  />
                  <Input
                    type="text"
                    label="کدملی"
                    size="sm"
                    fullWidth
                    required
                    value={nationalCodeInputValue}
                    onValueChange={setNationCodeInputValue}
                    classNames={{
                      input: "text-center text-black",
                    }}
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} className="p-3">
              <div className="w-full flex !flex-col items-center gap-3">
                <Input
                  type="text"
                  label="شماره همراه"
                  size="sm"
                  fullWidth
                  required
                  value={phoneNumberInputValue}
                  onValueChange={setphoneNumberInputValue}
                  classNames={{
                    input: "text-center text-black",
                  }}
                />
                <Select
                  size={"sm"}
                  label="جنسیت"
                  fullWidth
                  classNames={{
                    selectorIcon: "hidden",
                    value: "text-center text-black",
                  }}
                  value={genderSelected}
                  onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                    setGenderSelected(+event.target.value)
                  }
                >
                  <SelectItem key={1} value={1}>
                    مرد
                  </SelectItem>
                  <SelectItem key={2} value={2}>
                    زن
                  </SelectItem>
                </Select>
                <Select
                  size={"sm"}
                  label="بیمه"
                  fullWidth
                  value={insuranceSelected}
                  onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                    setInsuranceSelected(event.target.value)
                  }
                  classNames={{
                    selectorIcon: "hidden",
                    value: "text-center text-black",
                  }}
                >
                  <SelectItem key={1} value={1}>
                    آزاد
                  </SelectItem>
                  <SelectItem key={2} value={2}>
                    سلامت
                  </SelectItem>
                </Select>

                <Input
                  type={isVisible ? "text" : "password"}
                  label="رمز عبور"
                  size="sm"
                  required
                  fullWidth
                  value={passwordInputValue}
                  onValueChange={setPasswordInputValue}
                  isInvalid={isInvalidPassword}
                  color={isInvalidPassword ? "danger" : undefined}
                  errorMessage={
                    isInvalidPassword && toPersianDigits("حداقل 3 حرف میباشد!")
                  }
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <VisibilityIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <VisibilityOffIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  classNames={{
                    input: "text-center text-black",
                  }}
                />
              </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12} className="p-3">
              <Button
                type="submit"
                className="bg-blue-500 text-white py-6 text-[1rem] mb-4 px-10"
                isLoading={loading ? true : false}
              >
                ایجاد حساب کاربری
              </Button>
              <div className="flex justify-center items-center gap-4">
                <h6 className="">حساب کاربری دارید؟</h6>
                <Link href="/login" className="!text-indigo-700">
                  ورود
                </Link>
              </div>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={4}
            className="px-3 py-5 hidden md:flex justify-center items-center"
          >
            <Image src="/images/online-medical.png" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default RegisterPage;
