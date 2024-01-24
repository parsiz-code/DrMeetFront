import { AccountServices } from "@/services/account";
import { setUserInfo } from "@/store/user";
import axios from "axios";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetUserInfo = () => {
  axios.interceptors.response.use(
    (response) => response,
    (error: any) => {
      const { status } = error.response;
      //   if (status === 401) logoutHandler()

      return Promise.reject(error);
    }
  );

  const { getUserInfo } = AccountServices();
  const dispatch = useDispatch();
  // const token = useSelector((state) => state.user.token);

  const getUserInfoReq = useCallback(async () => {
    const res = await getUserInfo();
    res.data && dispatch(setUserInfo(res.data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if (token) getUserInfoReq();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [token]);
};

export default useGetUserInfo;
