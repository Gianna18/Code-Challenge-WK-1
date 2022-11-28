//FUNCTION DECLARATION
//IF STATEMENT
// VARIABLE ASSIGNMENT
function netSalary() {
    let grossSalary = prompt('Input basic salary');
    let benefits = prompt('input benefits');
    let basicSalary = grossSalary - benefits;
//PAYE DEDUCTIONS
    if(basicSalary<= 24000) {
        paye = basicSalary/ 10;
    } 
    else if(basicSalary >= 24001 && basicSalary <=32000) {
        paye = basicSalary / 4;
    }
    else if(basicSalary> 32000) {
        paye = (basicSalary * 3) / 10;
    }
    console.log(`paye:${paye}`);

    //NHIF DEDUCTIONS
    if(basicSalary <= 5999) {
        less = 150;
    }
    else if(basicSalary >= 6000 && basicSalary <= 7999) {
        less = 300;
    }
    else if(basicSalary >= 8000 && basicSalary <= 11999) {
        less = 400
    }
    else if(basicSalary >= 12000 && basicSalary <= 14999) {
        less = 500;
    }
    else if(basicSalary >= 15000 && basicSalary <= 19999) {
        less = 600;
    }
    else if(basicSalary >= 20000 && basicSalary <= 24999) {
        less = 750;
    }
    else if(basicSalary >= 25000 && basicSalary <= 29999) {
        less = 850;
    }
    else if(basicSalary >= 30000 && basicSalary <= 34999) {
        less = 900;
    }
    else if(basicSalary >= 35000 && basicSalary <= 39999) {
        less = 950;
    }
    else if(basicSalary >= 40000 && basicSalary <= 44999) {
        less = 1000;
    }
    else if(basicSalary >= 45000 && basicSalary <= 49999) {
        less = 1100;
    }
    else if(basicSalary >= 50000 && basicSalary <= 59999) {
        less = 1200;
    }
    else if(basicSalary >= 60000 && basicSalary <= 69999) {
        less = 1300;
    }
    else if(basicSalary >= 70000 && basicSalary <= 79999) {
        less = 1400;
    }
    else if(basicSalary >= 80000 && basicSalary <= 89999) {
        less = 1500;
    }
    else if(basicSalary >= 90000 && basicSalary <= 99999) {
        less =1600;
    }
    else if(basicSalary >= 100000){
        less = 1700;
    }
    console.log(`NHIF:${less}`);

    // NSSF Deductions
    let Nssf = (basicSalary * 6) / 100;
    console.log(`NSSF:${Nssf}`);

    let netSalary = (basicSalary- paye) - less;
    console.log(`Net Salary:${netSalary}`);
}

netSalary();