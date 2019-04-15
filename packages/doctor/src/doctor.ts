import Patient from '@matt125/patient';

export default class Doctor {
  constructor(){}

  yo(){
    return "doctor says yo111";
  }
  sup(){
    return "sup doc111"; 
  }

  getpatient(){
    let p = new Patient();
    return(p.get(2));
  }
}

console.log(new Doctor().getpatient());