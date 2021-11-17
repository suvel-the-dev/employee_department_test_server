function generateEmpId() {
    let today = new Date();
    let date = "emp" + today.getFullYear() + "" + (today.getMonth() + 1) + "" +
        today.getDate() + "" + today.getHours() + "" + today.getMinutes() + "" +
        today.getSeconds();

    return date;
}

module.exports = generateEmpId;