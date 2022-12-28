//UC2-employee wage
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const WAGE_PER_HR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
let empCheck = Math.floor(Math.random() * 3 );  // check for attendence
let empWage, workingHours;          //variables
switch(empCheck){
    case IS_FULL_TIME:
        workingHours = FULL_TIME_HOURS;
        console.log("Employee is present for full-time");
        break;
    case IS_PART_TIME:
        workingHours = PART_TIME_HOURS;
        console.log("Employee is Present for part-time");
        break;
    default:
        console.log("Employee is Absent");
        workingHours = 0;
        break;
}
empWage = workingHours * WAGE_PER_HR;
console.log("Employee Wage: " + empWage);