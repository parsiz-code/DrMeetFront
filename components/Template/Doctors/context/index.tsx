import React, { FC, ReactNode, createContext, useContext } from "react";

interface ICtxValue {}
const DoctorCtx = createContext<ICtxValue | undefined>(undefined);
const DoctorsCtxProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const ctxValue: ICtxValue = {};

  return <DoctorCtx.Provider value={ctxValue}>{children}</DoctorCtx.Provider>;
};

export default DoctorsCtxProvider;
export const useDoctorsCtx = () => useContext(DoctorCtx)!;
