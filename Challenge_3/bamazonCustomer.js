var mysql = require("mysql");
var inquirer = require("inquirer");

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

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the getProduct function after the connection is made to prompt the user
    getProducts();
    
});

function getProducts() {
    console.log("\n\n\nSelecting products...\n\n");

    var query = "select `item_id`, `product_name`, `products`.`department_id`, `departments`.`department_name`, `price`, `stock_quantity`, `product_sales`, `over_head_costs`"+  
                "from `bamazon`.`products` " +
                "inner join `bamazon`.`departments` on `products`.`department_id` = `departments`.`department_id`";
    connection.query(query, function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        for (var item = 0; item < res.length; item++) {
            console.log("Id: " + res[item].item_id + " || Product: " + res[item].product_name + " || Department: " + res[item].department_name + " || Price: " + res[item].price + " || Stock: " + res[item].stock_quantity + "\n");
        }
        productsArray = res;

        userOption();
    });
}

function userOption() {
    inquirer.prompt([
        {
            name: "idProduct",
            type: "input",
            message: "Which is the product id you would like to buy?"
        },
        {
            name: "units",
            type: "input",
            message: "How many units do you want to buy?"
        }

    ]).then(function (answer) {

        for (var item = 0; item < productsArray.length; item++) {
            
            if (productsArray[item].item_id == answer.idProduct) {
                
                var unitsToBuy = productsArray[item].stock_quantity - answer.units;

                if (unitsToBuy < 0) {
                    console.log("\n\n******************************************** Insufficient quantity! ********************************************");

                    getProducts();

                    break;
                }
                else {
                    productsArray[item].stock_quantity = unitsToBuy;

                    var revenue = productsArray[item].price * answer.units;

                    var productSales = productsArray[item].product_sales + revenue;

                    updateProduct(unitsToBuy, answer.idProduct, productSales);
                }
            }
        }

    });
}

function updateProduct(quantity, id, productSales) {
    connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            {
                stock_quantity: quantity,
                product_sales : productSales
            },
            {
                item_id: id
            }
        ],
        function (error) {
            if (error) throw err;

            console.log("\n\n******************************************** The product has been updated! ********************************************");

            productById(id);
        }
    );
}

function productById(id) {
    var query = "SELECT * FROM `bamazon`.`products` WHERE ?";

    connection.query(query, { item_id: id }, function (err, res) {

        console.log("Buy status");
        console.log("Id " + res[0].item_id);
        console.log("Product " + res[0].product_name);
        console.log("Department " + res[0].department_name);
        console.log("Price " + res[0].price);
        console.log("Stock " + res[0].stock_quantity + "\n");

        getProducts();
    });
}