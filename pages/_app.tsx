import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { globalStore } from "@/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import axios from "axios";
import { localStoragesName } from "@/utils/models/enum/localStoragesName";

export const authHeaderTokenName = 'Bearer'

axios.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem(localStoragesName.token) || ''
    if (token) {
      config.headers['Authorization'] = `${authHeaderTokenName} ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={globalStore}>
      <NextUIProvider>
        <Component {...pageProps} />
        {/* <Footer /> */}
        <ToastContainer />
      </NextUIProvider>
    </Provider>
  );
}
