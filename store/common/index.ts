import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IDoctorMenuModalsSate {
  centerSetting: boolean;
  centerInfo: boolean;
  organization: boolean;
  manageRoles: boolean;
  setCenterServicesPrice: boolean;
}

const initialCommonState = {
  loading: false,
  patientId: undefined as number | undefined,
  doctorMenuItemsState: { centerSetting: false } as IDoctorMenuModalsSate,
  showLogin: false,
};

export const commonSlice = createSlice({
  name: "common",
  initialState: initialCommonState,
  reducers: {
    loadingHandler: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    patientIdHandler: (state, action: PayloadAction<number | undefined>) => {
      state.patientId = action.payload;
    },
    doctorMenuModalStateHandler: (
      state,
      action: PayloadAction<IDoctorMenuModalsSate>
    ) => {
      state.doctorMenuItemsState = action.payload;
    },
    showLoginHandler: (state, action: PayloadAction<boolean>) => {
      state.showLogin = action.payload;
    },
  },
});

export const {
  loadingHandler,
  patientIdHandler,
  doctorMenuModalStateHandler,
  showLoginHandler,
} = commonSlice.actions;

export default commonSlice.reducer;
