//UC3-Refactor uc2 to cal employee wage using Function
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const WAGE_PER_HR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
let empCheck = Math.floor(Math.random() * 3 );  // check for attendence
let empWage = WAGE_PER_HR * GetWorkingHrs(empCheck);
console.log("Employee wage for this day is "+ empWage);

//Method to get Work Hours
function GetWorkingHrs(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_DAY_HOURS;
            break;
        default:
            return 0;
            break;
    }
}