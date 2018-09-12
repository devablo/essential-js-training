import {Person} from "./Person.js";

export class Employee extends Person{
    constructor(firstName, lastName) {
        super(firstName, lastName)
    }
}

export let ToLog = function(employee){
    console.log(employee.Name);
}