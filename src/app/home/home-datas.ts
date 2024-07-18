export const patientDatas: PatientInfos = {
    firstName: 'Danielle',
    lastName: 'Hon',
    age: 43,
    sex: 'MALE',
    gender: 'CISGENDER',
    phone: '+33 6 52 25 88 64',
    protocol: 'chimio',
    pathology : 'cancer du sein',
    protocolStartDate: '2023-10-09',
    referringPractitionerFirstName: 'Josie',
    referringPractitionerLastName: 'BALLARD',
    referringDoctorFirstName :'Alexandre',
    referringDoctorLastName : 'HINTEUR',
  }

export interface PatientInfos {
  firstName: string;
  lastName: string;
  age: number;
  sex: 'MALE' | 'FEMALE' | 'OTHER';
  gender: 'CISGENDER' | 'TRANSGENDER' | 'OTHER';
  phone: string;
  protocol: string;
  pathology: string;
  protocolStartDate: string;
  referringPractitionerFirstName: string;
  referringPractitionerLastName: string;
  referringDoctorFirstName: string;
  referringDoctorLastName: string;
}