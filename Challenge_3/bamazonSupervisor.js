var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require('console.table');

var productsArray = {};

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    // run the getProduct function after the connection is made to prompt the user
    userOption();

});

function userOption() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "View Product Sales by Department",
            "Create New Department"
        ]
    }).then(function (answer) {
        switch (answer.action) {
            case "View Product Sales by Department":
                productSaleByDepartment();
                break;

            case "Create New Department":
                createDepartment();
                break;
        }
    });
}

function productSaleByDepartment() {
    var query = "select `products`.`department_id`, `departments`.`department_name`, sum(`product_sales`) as `product_sales`, sum(`over_head_costs`) as `over_head_costs`, " +
        "(sum(`over_head_costs`) - sum(`product_sales`)) as `total_profit` " +
        "from `bamazon`.`products` " +
        " inner join `bamazon`.`departments` on `products`.`department_id` = `departments`.`department_id`" +
        "group by `products`.`department_id`";

    connection.query(query, function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);

        userOption();
    });
}

function createDepartment() {
    inquirer.prompt([
        {
            name: "departmentName",
            type: "input",
            message: "What is the department name?"
        },
        {
            name: "overHead",
            type: "input",
            message: "What is the over_head_costs?"
        }]
    ).then(function (answer) {

        connection.query(
            "INSERT INTO `bamazon`.`departments` SET ?",
            {
                department_name: answer.departmentName,
                over_head_costs: answer.overHead
            },
            function (err) {
                if (err) throw err;

                console.log("\n\n******************************************** Your department was created successfully! ********************************************\n\n");

                getDeparment();
            }
        );
    });

    function getDeparment() {
        var query = "select * from `bamazon`.`departments`";

        connection.query(query, function (err, res) {
            if (err) throw err;
            // Log all results of the SELECT statement
            for (var item = 0; item < res.length; item++) {
                console.log("Id: " + res[item].department_id + " || Name: " + res[item].department_name + "\n");
            }

            userOption();
        });
    }
}