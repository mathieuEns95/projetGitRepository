export class SignUpInfo {
    firstname: string;
    lastname: string;
    adresse: string;
    email: string;
    nationality: string;
    phonenumber: string;
    gender: string;
    birthday: string;
    password: string;
    passwordConfirm: string;
    role: string[];

  constructor(firstname: string, lastname: string, adresse: string,
              email: string, nationality: string, phonenumber: string,
              gender: string, birthday: string, password: string,
              role: string[]) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.adresse = adresse;
    this.email = email;
    this.nationality = nationality;
    this.phonenumber = phonenumber;
    this.gender = gender;
    this.birthday = birthday;
    this.password = password;
    this.role = ['candidate'];
  }
}
