export class Employee {
    id: number;
    name: string;
    email: string;
    salary?: number;

    // get empID() {
    //     return this.id;
    // }

    // set empId(id: number) {
    //     this.id = id;
    // }


    // constructor(id: number, name: string) {

    // }

    //  addEmployee(id: number, name: string): boolean {
    //     return true;
    // }
}

export interface IEmployee {
    id: number;
    name: string;
}