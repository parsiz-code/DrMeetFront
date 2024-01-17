import { Grid } from "@mui/material";
import { Button, Image, Input, Link } from "@nextui-org/react";
import { useMemo, useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { toPersianDigits } from "@/helper/dateTimeHelper";

const LoginPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [userNameInputValue, setUserNameInputValue] = useState<string>("");
  const [passwordInputValue, setPasswordInputValue] = useState<string>("");

  const toggleVisibility = () => setIsVisible(!isVisible);

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

  //   event: React.ChangeEvent<HTMLInputElement>

  return (
    <div className="h-[100vh] bg-gradient-to-bl from-[#3dffbf] to-blue-500 text-center">
      <div className="pt-10 px-3 lg:w-[50rem] my-0 mx-auto">
        <Grid container className="bg-white py-10 px-4 rounded-xl">
          <Grid item xs={12} sm={6} md={6} lg={6} className="p-3">
            <div className="flex !flex-col justify-center items-center gap-5">
              <Link className="" href="/">
                <Image src="/images/drmeet final1.png" width={150} />
              </Link>

              <div className="w-full flex !flex-col items-center gap-3">
                <Input
                  type="text"
                  size="sm"
                  label="نام کاربری"
                  fullWidth
                  required
                  value={userNameInputValue}
                  onValueChange={setUserNameInputValue}
                  //   isInvalid={isInvalidEmail}
                  color={"success"}
                  //   color={isInvalidEmail ? "danger" : "success"}
                  //   errorMessage={isInvalidEmail && "Please enter a valid email"}
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
                  color={isInvalidPassword ? "danger" : "success"}
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
                />
              </div>

              <Link href="/forgetPassword" className="!text-indigo-700">
                کلمه عبور خود را فراموش کرده اید؟
              </Link>

              <Button
                type="submit"
                className="bg-blue-500 text-white py-6 text-[1rem]"
                fullWidth
                isLoading={loading ? true : false}
              >
                ورود
              </Button>

              <Link href="/register" className="!text-indigo-700">
                ایجاد حساب کاربری
              </Link>
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
