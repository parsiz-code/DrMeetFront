import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "@/components/Modules/Navbar/Navbar";
import Footer from "@/components/Modules/Footer/Footer";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = process.env.NEXT_APP_API_BASE_URL;

axios.interceptors.response.use(
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
// axios.interceptors.request.use(
//   (config) => {
//     config.headers = defaultHeaders();
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Component {...pageProps} />
      {/* <Footer /> */}
    </NextUIProvider>
  );
}
