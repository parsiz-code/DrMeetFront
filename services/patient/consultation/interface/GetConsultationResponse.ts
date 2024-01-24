export interface IGetConsultationResponse {
    id: number;
    doctorFullName: string;
    patientFullName: string;
    doctorAvatar: string;
    patientAvatar: string;
    isClosed: boolean;
    isPaid: boolean;
    createDate: Date;
  }
  