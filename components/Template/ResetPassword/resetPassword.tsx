import { Grid } from "@mui/material";
import { Button, Image, Input, Link } from "@nextui-org/react";
import { useMemo, useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { toPersianDigits } from "@/helper/dateTimeHelper";

const ForgetPasswordPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [phoneInputValue, setPhoneInputValue] = useState<string>("");

  const toggleVisibility = () => setIsVisible(!isVisible);

  //   const validateEmail = (value: string) =>
  //     value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i);

  //   const isInvalidEmail = useMemo(() => {
  //     if (emailInputValue === "") return false;

  //     return validateEmail(emailInputValue) ? false : true;
  //   }, [emailInputValue]);


  //   event: React.ChangeEvent<HTMLInputElement>

  return (
    <div className="h-[100vh] bg-gradient-to-bl from-[#3dffbf] to-blue-500 text-center">
      <div className="pt-10 px-3 lg:w-[50rem] my-0 mx-auto">
        <Grid container className="bg-white py-10 px-4 rounded-xl">
          <Grid item xs={12} sm={6} md={6} lg={6} className="p-3">
            <div className="flex !flex-col justify-center items-center gap-6">
              <Link className="" href="/">
                <Image src="/images/drmeet final1.png" width={150} />
              </Link>

              <div className="w-full flex !flex-col items-center gap-4">
                <h6 className="text-indigo-800">کلمه عبور خود را فراموش کرده اید؟</h6>
                <h6 className="text-[0.85rem] text-gray-700">
                  برای بازیابی کلمه عبور شماره همراه خود را وارد نمایید.
                </h6>
                <Input
                  type="text"
                  size="sm"
                  label="شماره همراه"
                  fullWidth
                  required
                  value={phoneInputValue}
                  onValueChange={setPhoneInputValue}
                  //   isInvalid={isInvalidEmail}
                  //   color={isInvalidEmail ? "danger" : "success"}
                  //   errorMessage={isInvalidEmail && "Please enter a valid email"}
                />
              </div>

              <Button
                type="submit"
                className="bg-blue-500 text-white py-6 text-[1rem]"
                fullWidth
                isLoading={loading ? true : false}
              >
                بازیابی کلمه عبور
              </Button>

              <div className="flex justify-center items-center gap-6">
                <Link href="/login" className="!text-indigo-700">
                  ورود 
                </Link>|
                <Link href="/register" className="!text-indigo-700">
                  ثبت نام
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
            className="px-3 py-5 hidden sm:flex justify-center items-center"
          >
            <Image src="/images/forgetPassword.png" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
