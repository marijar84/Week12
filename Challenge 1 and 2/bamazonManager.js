var mysql = require("mysql");
var inquirer = require("inquirer");

var products = {};

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

// connect to the mysql server and sql database
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
            "View Products for Sale",
            "View Low Inventory",
            "Add to Inventory",
            "Add New Product"
        ]
    }).then(function (answer) {
        switch (answer.action) {
            case "View Products for Sale":
                productBySale();
                break;

            case "View Low Inventory":
                lowInventory();
                break;

            case "Add to Inventory":
                addInventory();
                break;

            case "Add New Product":
                addProduct();
                break;
        }

    });
}

function productBySale() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        for (var item = 0; item < res.length; item++) {
            console.log("Id: " + res[item].item_id + " || Product: " + res[item].product_name + " || Department: " + res[item].department_name + " || Price: " + res[item].price + " || Stock: " + res[item].stock_quantity + "\n");
        }

        userOption();
    });
}

function lowInventory() {
    var query = "SELECT * FROM `bamazon`.`products` WHERE  stock_quantity < 5";

    connection.query(query, function (err, res) {

        if (err) throw err;

        for (var item = 0; item < res.length; item++) {
            console.log("Id: " + res[item].item_id + " || Product: " + res[item].product_name + " || Department: " + res[item].department_name + " || Price: " + res[item].price + " || Stock: " + res[item].stock_quantity + "\n");
        }

        userOption();
    });
}

function addInventory() {

    inquirer.prompt([
        {
            name: "id",
            type: "input",
            message: "What is the product id?"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many quantities do you want to add?"
        }]

    ).then(function (answer) {
        connection.query(
            "UPDATE products SET ? WHERE ?",
            [
                {
                    stock_quantity: answer.quantity
                },
                {
                    item_id: answer.id
                }
            ],
            function (error) {
                if (error) throw err;

                console.log("\n\n******************************************** The product has been updated! ********************************************\n\n");

                userOption();
            }
        );
    });
}

function addProduct() {
    inquirer.prompt([
        {
            name: "productName",
            type: "input",
            message: "What is the product name?"
        },
        {
            name: "departmentName",
            type: "input",
            message: "What is the department name?"
        },
        {
            name: "price",
            type: "input",
            message: "What is the price?"
        },
        {
            name: "stockQuantity",
            type: "input",
            message: "How many products?"
        }]
    ).then(function (answer) {

        connection.query(
            "INSERT INTO `bamazon`.`products` SET ?",
            {
                product_name: answer.productName,
                department_name: answer.departmentName,
                price: answer.price,
                stock_quantity: answer.stockQuantity
            },
            function (err) {
                if (err) throw err;

                console.log("\n\n******************************************** Your product was created successfully! ********************************************\n\n");
                // re-prompt the user for if they want to bid or post
                userOption();
            }
        );
    });
}