import { Employee , IEmployee } from './classDemo';

import * as Emp from './classDemo';

let lname: string = 'Virat';


console.log('lastName is ' + lname);

let age: number = 45;

age = 25.6;
console.log('age is ' + age);

let valid: boolean = false;

console.log('valid value is ' + valid);

let employee: any;

employee = 'test';
employee = 18;
employee = true;


let unionType: number | number[];

unionType = 10;

let emplList: Employee[] = [];

emplList.push({ id: 1, name: 'Virat', email: 'test@test.com', salary: 23000 });
emplList.push({ id: 2, name: 'Vijay', email: 'vijay@test.com' });

emplList.forEach(function (employee) {
    console.log(employee.id);
    console.log(employee.name);
})

for (const employee of emplList) {
    console.log(employee.id);
    console.log(employee.name);
}

 
for (const employee in emplList) {
    console.log(employee);
}