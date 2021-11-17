//name: "Grace Mcgee", dob: "7/13/2021", empId: "12245", deptId: "111", deptName: "HR Department"
// function generateEmpId() {
//     let today = new Date();
//     let date = "emp" + today.getFullYear() + "" + (today.getMonth() + 1) + "" +
//         today.getDate() + "" + today.getHours() + "" + today.getMinutes() + "" +
//         today.getSeconds();

//     return date;
// }

// function getDepartmentName(dptId) {
//     const departmentsDictionary = {
//         111: { name: "HR Department" },
//         222: { name: "IT Department" },
//         333: { name: "Finance Department" },
//         444: { name: "Marketing Department" },
//         555: { name: "Sales Department" },
//     }

//     return departmentsDictionary[dptId].name;
// }

// class Department {
//     constructor(deptId) {
//         this.deptId = deptId;
//         this.deptName = getDepartmentName(deptId);
//     }
// }

const Department = require('./Department');
const generateEmpId = require('./common/functions/generateEmpId');

class Employee extends Department {
    constructor({ name, dob, deptId }) {
        super(deptId);
        this.name = name;
        this.dob = dob;
        this.empId = generateEmpId();

        return {
            name: this.name,
            dob: this.dob,
            empId: this.empId,
            deptId: this.deptId,
            deptName: this.deptName
        };
    }
}

// class Employees {
//     constructor() {
//         const employeeListJson = require('./employeeList.json')
//         this.employees = JSON.parse(JSON.stringify(employeeListJson));
//     }

//     getAll() {
//         return this.employees;
//     }

//     updateEmployee(empId, employeeDetailObj) {
//         const currentEmployeeIndex = this.employees.findIndex(emp => emp.empId === empId);
//         if (currentEmployeeIndex === -1) return false;

//         const currentEmployeeData = this.employees[currentEmployeeIndex];
//         const updatedEmployeeData = { ...currentEmployeeData, ...employeeDetailObj };
//         if (employeeDetailObj.deptId) {
//             const dptId = employeeDetailObj.deptId
//             updatedEmployeeData.deptName = getDepartmentName(dptId);
//         }

//         this.employees[currentEmployeeIndex] = updatedEmployeeData;
//     }

//     save() {
//         const fs = require('fs');
//         fs.writeFileSync('./employeeList.json', JSON.stringify(this.employees));
//     }
// }

// const employees = new Employees();

// console.log(employees.getAll());

// employees.updateEmployee("emp202111171617", { deptId: "333" });

// employees.save();

// console.log(employees.getAll());


module.exports = Employee;