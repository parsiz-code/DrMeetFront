import ConsultationList from "./components/consultationList";
import PatientConsultationCtxProvider from "./context";

const Consultation = () => {
  return (
    <PatientConsultationCtxProvider>
      <ConsultationList/>
    </PatientConsultationCtxProvider>
  );
};

export default Consultation;
