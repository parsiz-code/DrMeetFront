import { useParsizAxios } from "@/utils/axios/parsiz";
import { IResBase } from "../base";
import { ILoginParams } from "./interface/login";
import { ILoginResData } from "./interface/loginResponse";

export const AccountServices = () => {
  const { parsizTebAxios } = useParsizAxios();

  const loginRequest = async (params: ILoginParams) => {
    return await parsizTebAxios
      .post<IResBase<ILoginResData>>(`Account/Login`, params)
      .then((res) => res.data);
  };

  //   const resetPassword = async (params: IResetPasswordDto) => {
  //     const result = await parsizTebAxios.post<IResBase<ILoginResData>>(
  //       "Account/ResetPassword",
  //       params
  //     );
  //     return result.data;
  //   };

  return { loginRequest };
};
