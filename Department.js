const getDepartmentName = require("./common/functions/getDepartmentName");

class Department {
  constructor(deptId) {
    this.deptId = deptId;
    this.deptName = getDepartmentName(deptId);
  }
  static getDepartments() {
    const departmentsJson = require("./constants/departments.json");
    // const departmentsDictionary = JSON.parse(departmentsJson);
    return departmentsJson;
  }
}

module.exports = Department;
