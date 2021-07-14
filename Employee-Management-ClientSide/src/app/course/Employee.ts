export class Employee {
    employeeId: number;
    firstname: string;
    lastname: string ;
    email: string;

    constructor(employeeId:number, firstname: string, lastname: string, email: string ) {
      this.employeeId=employeeId;
      this.firstname = firstname;
      this.lastname = lastname;
      this.email= email;
    }
  }