import { Grid } from "@mui/material";
import { Button, Image, Input, Link } from "@nextui-org/react";
import { useMemo, useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { toPersianDigits } from "@/helper/dateTimeHelper";
import { USER_TYPES_INDEX } from "@/utils/models/enum/user";
import { toast } from "react-toastify";
import { ILoginParams } from "@/services/account/interface/login";
import { AccountServices } from "@/services/account";
import { useDispatch, useSelector } from "react-redux";
import { login, setUserInfo, setUserType } from "@/store/user";
import { setDataDoctor } from "@/store/doctor";
import { ILoginResData } from "@/services/account/interface/loginResponse";
import { localStoragesName } from "@/utils/models/enum/localStoragesName";
import { showLoginHandler } from "@/store/common";

const LoginPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [nationalCodeInputValue, setNationalCodeInputValue] =
    useState<string>("");
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");
  const [isLogin, setIsLogin] = useState(true);
  const [captcha, setCaptcha] = useState<number>(generateCaptcha());
  const [inputCaptcha, setInputCaptcha] = useState<string>("");

  const dispatch = useDispatch();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const { loginRequest } = AccountServices();

  const handleClose = () => {
    dispatch(showLoginHandler(false));
  };

  function generateCaptcha() {
    return Math.floor(10000 + Math.random() * 90000);
  }

  const isInvalidPassword = useMemo(() => {
    if (passwordInputValue === "") return false;

    return passwordInputValue.length < 3 ? true : false;
  }, [passwordInputValue]);

  const savePatientDataHandler = (data?: ILoginResData) => {
    data?.userInfo && dispatch(setUserInfo(data?.userInfo));
    dispatch(setUserType(USER_TYPES_INDEX.patient));
    sessionStorage.setItem(
      localStoragesName.userType,
      JSON.stringify(USER_TYPES_INDEX.patient)
    );
    handleClose();
    // navigate('/')
  };

  const identificationHandler = async (e: React.FormEvent) => {
    setLoading(true);

    const bodyData: ILoginParams = {
      username: nationalCodeInputValue,
      password: passwordInputValue,
    };

    if (parseInt(inputCaptcha) === captcha) {
      try {
        const { data, statusCode } = await loginRequest(bodyData);

        localStorage.removeItem("showCapcha");

        const userTypes = data?.userInfo?.userTypes;
        if (!userTypes || userTypes.length < 0) {
          toast.error("اطلاعات وارد شده یافت نشد!");
          return;
        }
        toast.success("ورود موفق");

        const isPatientType = !!userTypes.find(
          (type) => type.id === USER_TYPES_INDEX.patient
        );

        if (isPatientType) {
          dispatch(login({ token: data?.token! }));
          savePatientDataHandler(data);
          return;
        } else {
          if (
            data.availableDoctors.length &&
            (data.availableOffices.length || data.availableClinics.length)
          ) {
            let office = null;
            let clinic = null;

            office = data.availableOffices[0] || null;
            if (!office) clinic = data.availableClinics[0] || null;

            dispatch(
              setDataDoctor({
                doctorId: data.availableDoctors[0].id,
                officeId: office?.id || null,
                clinicId: clinic?.id || null,
              })
            );
            setIsLogin(false);
          }
        }
      } catch {
        localStorage.setItem("showCapcha", "true");
        // setShowCaptcha(true);
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
      if (inputCaptcha === "") {
        toast.error("کد امنیتی را وارد نمایید!");
      }else{
        toast.error("کد امنیتی صحیح نیست!");

      }
      setCaptcha(generateCaptcha());
    }
  };

  return (
    <div className="h-[100vh] bg-gradient-to-bl from-[#3dffbf] to-blue-500 text-center">
      <div className="pt-10 px-3 lg:w-[60rem] my-0 mx-auto ">
        <Grid container className="bg-white py-16 px-4 rounded-xl">
          <Grid item xs={12} sm={6} md={6} lg={6} className="p-3">
            <div className="flex !flex-col justify-center items-center gap-5 lg:px-7">
              <Link className="" href="/">
                <Image src="/images/drmeetBigLogo.png" width={120} />
              </Link>

              <div className="w-full flex !flex-col items-center gap-3">
                <Input
                  type="text"
                  size="sm"
                  label="کدملی"
                  fullWidth
                  required
                  value={nationalCodeInputValue}
                  onValueChange={setNationalCodeInputValue}
                  //   isInvalid={isInvalidEmail}
                  //   color={isInvalidEmail ? "danger" : "success"}
                  //   errorMessage={isInvalidEmail && "Please enter a valid email"}
                  classNames={{
                    input: "text-center",
                  }}
                />
                <Input
                  type="password"
                  label="کلمه عبور"
                  size="sm"
                  required
                  fullWidth
                  value={passwordInputValue}
                  onValueChange={setPasswordInputValue}
                  isInvalid={isInvalidPassword}
                  color={isInvalidPassword ? "danger" : ""}
                  errorMessage={
                    isInvalidPassword && toPersianDigits("حداقل 8 حرف میباشد!")
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
                  type={isVisible ? "text" : "password"}
                  classNames={{
                    input: "text-center",
                  }}
                />
                <div className="flex justify-between items-center gap-3">
                  <Input
                    type="text"
                    size="sm"
                    label="کد امنیتی"
                    maxLength={5}
                    fullWidth
                    required
                    value={inputCaptcha}
                    onValueChange={setInputCaptcha}
                    classNames={{
                      input: "text-center tracking-[0.4rem]",
                    }}
                  />
                  <div
                    className="!w-full rounded-xl hover:cursor-pointer py-2 relative"
                    onClick={() => setCaptcha(generateCaptcha())}
                  >
                    <h6 className=" text-[1.2rem] tracking-[1.5rem] font-extrabold text-center">
                      {captcha}
                    </h6>
                    <h6 className="colorBackgroundCaptcha"></h6>
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="bg-blue-500 text-white py-6 text-[1rem]"
                fullWidth
                isLoading={loading ? true : false}
                onClick={identificationHandler}
              >
                {loading ? "هویت سنجی" : "ورود"}
              </Button>

              <div className="flex justify-center items-center gap-6">
                <Link href="/forgetPassword" className="!text-indigo-700">
                  بازیابی کلمه عبور
                </Link>
                |
                <Link href="/register" className="!text-indigo-700">
                  ایجاد حساب کاربری
                </Link>
              </div>
            </div>
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            lg={6}
            className="px-3 py-5 hidden md:flex justify-center items-center"
          >
            <Image src="/images/login.png" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default LoginPage;
