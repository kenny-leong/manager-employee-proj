const Employee = require('./employee')



class Manager extends Employee {
    constructor(name, salary, title, manager, employees=[]) {
        super(name, salary, title, manager);
        this.employees = employees;

    }

    addEmployee(employee) {
        this.employees.push(employee);
    }


    //helper instance method for manager bonus:
    _totalSubSalary() {
        let sum = 0
        for(let i = 0; i < this.employees.length; i++){
            if(this.employees[i] instanceof Manager){
                sum += this.employees[i]._totalSubSalary() + this.employees[i].salary
            }
            else{
                sum += this.employees[i].salary
            }
        }
        return sum
    }

    calculateBonus(multiplier) {
        // for recursion we need to use the "this" keyword in order to refer to above helper function
        return (this.salary + this._totalSubSalary(this.employees)) * multiplier
    }

}


module.exports = Manager;
