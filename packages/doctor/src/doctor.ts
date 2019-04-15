import Patient from '@ajay-sdk/patient';

export default class Doctor {
  constructor(){}

  yo(){
    return "doctor says yo";
  }
  sup(){
    return "sup doc";
  }

  getpatient(){
    let p = new Patient();
    p.get(2);
  }
}