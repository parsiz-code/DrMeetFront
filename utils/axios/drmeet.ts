import axios from "axios";
import { toast } from "react-toastify";

export const useDrmeetAxios = () => {
  const drmeetAxios = axios.create({
    baseURL: 'http://devapi.drmeet.ir/api/',
    // baseURL: process.env.drmeetBaseApi,
  });

  drmeetAxios.interceptors.response.use(
    (response) => response,
    (error) => {
      try {
        const { status, data } = error?.response;

        switch (status) {
          case 400: {
            const err = (data.errors as string[]).join(",");
            toast.error(err);
            break;
          }
          case 402: {
            const err = (data.errors as string[]).join(",");
            toast.warning(err);
            break;
          }
          // case 403: {
          //   toast.info("متاسفانه دسترسی شما به این بخش محدود شده است");
          //   break;
          // }
          case 500: {
            toast.error("خطایی در سرور رخ داده است");
            break;
          }
        }
      } catch {
        if (error?.code === "ERR_NETWORK")
          toast.error(
            "عدم ارتباط با سرور! لطفا اتصال به اینترنت را بررسی نمایید"
          );
        else toast.error(error?.message);
      }
      return Promise.reject(error);
    }
  );

  return { drmeetAxios };
};
