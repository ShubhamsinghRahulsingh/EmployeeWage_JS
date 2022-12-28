//UC4-Calculate Wages for a month
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const WAGE_PER_HR = 20;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const TOTAL_WORKING_DAYS=20;
const TOTAL_WORKING_HOURS=100;
let empWage,totalWorkingDays=0,totalWorkingHours=0;
while(totalWorkingHours<=TOTAL_WORKING_HOURS && totalWorkingDays<TOTAL_WORKING_DAYS)
{
    let empCheck = Math.floor(Math.random() * 3 ); 
    totalWorkingHours +=GetWorkingHrs(empCheck);
    totalWorkingDays++;
}
empWage = WAGE_PER_HR * totalWorkingHours;
console.log("Employee Monthly wage is "+ empWage+"\n"+"Total Working Hours:"+totalWorkingHours+"\n"+"Total Working Days:"+totalWorkingDays);

//Method to get Work Hours
function GetWorkingHrs(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;
            break;
    }
}