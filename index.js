const express = require('express');

const $PORT = 8080;

const app = express();
// middleware
app.use(express.json());
app.use(express.urlencoded());
/**
 * Regarding the usage of express.json() and express.urlencoded() @refer
 * https://stackoverflow.com/questions/23259168/what-are-express-json-and-express-urlencoded
 */


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('The server is running')
})

/* --------------------------- employee services -------------------------- */

app.get('/employee', (req, res) => {
    const Employees = require('./Employees');
    const employeesList = new Employees().getAll();
    res.send({
        statusCode: 200,
        statusMessage: 'Success',
        data: employeesList,
        err: null
    })
})

app.post('/employee', (req, res) => {
    const bodyParam = req.body;
    const { name, dob, deptId } = bodyParam;
    if (!(name && dob && deptId))
        res.error({
            statusCode: 400,
            statusMessage: 'Insufficient parameter',
            error: "name,dob & deptId are required parameters, make sure it is sent in request's body"
        })
    else {
        const Employee = require('./Employee');
        const Employees = require('./Employees');

        const newEmployee = new Employee({ name, dob, deptId });
        const currentEmployeeList = new Employees();
        currentEmployeeList.add(newEmployee);
        currentEmployeeList.save();

        res.send({
            statusCode: 200,
            statusMessage: 'Success',
        })
    }
})

app.put('/employee', (req, res) => {
    const bodyParam = req.body;
    const queryParam = req.query;
    const { empId } = queryParam;
    const employeeAttribute = bodyParam;

    if (!empId) {
        res.send({
            statusCode: 400,
            statusMessage: 'Insufficient parameter',
            error: "empId is required, please do send it as a query string parameter"
        })
    }
    else if (!employeeAttribute || Object.keys(employeeAttribute).length <= 0) {
        res.send({
            statusCode: 400,
            statusMessage: 'Insufficient parameter',
            error: "Please do send employee attribute(s) in the request body that need to be updated."
        })
    }

    const Employees = require('./Employees');
    const currentEmployeeList = new Employees();

    currentEmployeeList.updateEmployee(empId, employeeAttribute);
    currentEmployeeList.save();

    res.send({
        statusCode: 200,
        statusMessage: 'Success',
    })
})

app.delete('/employee', (req, res) => {
    const queryParam = req.query;
    const { empId } = queryParam;

    if (!empId) {
        res.send({
            statusCode: 400,
            statusMessage: 'Insufficient parameter',
            error: "empId is required, please do send it as a query string parameter"
        })
    }

    const Employees = require('./Employees');

    const currentEmployeeList = new Employees();
    currentEmployeeList.delete(empId);
    currentEmployeeList.save();

    res.send({
        statusCode: 200,
        statusMessage: 'Success',
    })
})

/* -------------------------- employee services end ------------------------- */

/* -------------------------- department services ------------------------- */

app.get('/department', (req, res) => {
    const Departments = require('./Department');
    res.send(Departments.getDepartments());
})

/* -------------------------- department services end ------------------------- */

app.listen($PORT, function () {
    console.log(`Your server is running on port ${$PORT}!`);
});