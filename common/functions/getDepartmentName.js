function getDepartmentName(dptId) {
    const departmentsObj = require('../../constants/departments.json');
    return departmentsObj[dptId].name;
}

module.exports = getDepartmentName;