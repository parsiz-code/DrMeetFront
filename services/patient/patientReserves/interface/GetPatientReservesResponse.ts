export interface IGetPatientReservesResponse {
  id: number;
  patientId: number;
  doctorId: number;
  amountOfTime: number;
  date: Date;
  time: string;
  sendSms?: null;
  comment?: null;
  reception?: null;
  visited?: null;
  clinicId?: null;
  officeId?: number;
  isConfirmed?: null;
  doctorName: string;
  center: string;
  treatmentPeriodId?: null;
}
