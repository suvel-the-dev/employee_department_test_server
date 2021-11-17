const getDepartmentName = require('./common/functions/getDepartmentName');

class Employees {
    constructor() {
        const employeeListJson = require('./employeeList.json')
        this.employees = JSON.parse(JSON.stringify(employeeListJson));
    }

    getAll() {
        return this.employees;
    }

    add(employee) {
        this.employees.push(employee);
    }

    updateEmployee(empId, employeeDetailObj) {
        const currentEmployeeIndex = this.employees.findIndex(emp => emp.empId === empId);
        if (currentEmployeeIndex === -1) return false;

        const currentEmployeeData = this.employees[currentEmployeeIndex];
        const updatedEmployeeData = { ...currentEmployeeData, ...employeeDetailObj };
        if (employeeDetailObj.deptId) {
            const dptId = employeeDetailObj.deptId
            updatedEmployeeData.deptName = getDepartmentName(dptId);
        }

        this.employees[currentEmployeeIndex] = updatedEmployeeData;
    }

    delete(empId) {
        const updatedEmployeeList = this.employees.filter(emp => emp.empId != empId);
        this.employees = updatedEmployeeList;
    }

    save() {
        const fs = require('fs');
        fs.writeFileSync('./employeeList.json', JSON.stringify(this.employees));
    }
}

module.exports = Employees