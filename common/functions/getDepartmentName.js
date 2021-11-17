function getDepartmentName(dptId) {
    const departmentsJson = require('../../../common/data/departments.json');
    const departmentsDictionary = JSON.parse(departmentsJson)
    return departmentsDictionary[dptId].name;
}

module.exports = getDepartmentName;