import RouteTitle from "@/components/Modules/RouteName/RouteName";
import PatientReservationCtxProvider from "./context";
import ReservesTable from "./components/reserveList";

const MeyReserves = () => {
  return (
    <PatientReservationCtxProvider>
      <RouteTitle title="نوبت های من" />
      <ReservesTable/>
    </PatientReservationCtxProvider>
  );
};

export default MeyReserves;
