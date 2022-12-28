//UC1-Employee is present or absent

const IS_PRESENT=0;
let empCheck=Math.floor(Math.random()*10)%2;
if(empCheck==IS_PRESENT)
{
    console.log("Employee is PRESENT");
}
else
console.log("Employee is ABSENT");