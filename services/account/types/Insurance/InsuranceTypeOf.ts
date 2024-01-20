export enum INSURANCES_ID {
  socialSecurity = 7, //تامیین اجتمایی
  armedForceRegular = 2, // نیرو های مسلح عادی
  armedForcesVeterans = 3, // نیروه های مسلح جانبازان
  BroadcasterRetired = 5, // صدا سیما بازنشسته
  salamat = 11,
  EmployeeRadio = 6, // صدا سیما کارمند
  free = 1,
}

export type InsuranceTypeOf =
  | INSURANCES_ID.BroadcasterRetired
  | INSURANCES_ID.EmployeeRadio
  | INSURANCES_ID.armedForceRegular
  | INSURANCES_ID.armedForcesVeterans
  | INSURANCES_ID.free
  | INSURANCES_ID.salamat
  | INSURANCES_ID.socialSecurity;
