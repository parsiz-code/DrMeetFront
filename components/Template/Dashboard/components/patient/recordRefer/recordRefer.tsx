import RouteTitle from "@/components/Modules/RouteName/RouteName";
import RecordTable from "./components/recordTable";
import PatientRecordReferCtxProvider from "./context";

const RecordRefer = () => {
  return (
    <PatientRecordReferCtxProvider>
      <RouteTitle title="سوابق مراجعه من"/>
      <RecordTable />
    </PatientRecordReferCtxProvider>
  );
};

export default RecordRefer;
