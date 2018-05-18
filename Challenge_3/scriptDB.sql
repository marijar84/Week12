DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE departments (
  department_id INT unique auto_increment not null,
  department_name varchar(100) null,
  over_head_costs int null,
  PRIMARY KEY (department_id)
);


CREATE TABLE products (
  item_id INT unique auto_increment not null,
  product_name varchar(100) null,
  department_id int null,
  price int NULL,
  stock_quantity int null,
  product_sales int null,  
  PRIMARY KEY (item_id)
);



INSERT INTO `bamazon`.`departments`
(`department_name`, `over_head_costs`)
VALUES('Computer', 100);

INSERT INTO `bamazon`.`departments`
(`department_name`, `over_head_costs`)
VALUES('Clothing', 80);

INSERT INTO `bamazon`.`departments`
(`department_name`, `over_head_costs`)
VALUES('Movies', 50);

INSERT INTO `bamazon`.`departments`
(`department_name`, `over_head_costs`)
VALUES('Makeup', 30);

INSERT INTO `bamazon`.`departments`
(`department_name`, `over_head_costs`)
VALUES('Food', 50);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_id`,`price`,`stock_quantity`, `product_sales`)
VALUES ('Laptop', 1,1100,6, 0);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_id`,`price`,`stock_quantity`, `product_sales`)
VALUES ('Tablet', 1,700,100, 0);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_id`,`price`,`stock_quantity`, `product_sales`)
VALUES ('Dress', 2, 35, 50, 0);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_id`,`price`,`stock_quantity`, `product_sales`)
VALUES ('Shirt', 2, 25, 60, 0);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_id`,`price`,`stock_quantity`, `product_sales`)
VALUES ('Harry Potter', 3, 8, 15, 0);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_id`,`price`,`stock_quantity`, `product_sales`)
VALUES ('Start Wars', 3, 9, 10, 0);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_id`,`price`,`stock_quantity`, `product_sales`)
VALUES ('Eyeliner', 4, 12, 10, 0);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_id`,`price`,`stock_quantity`, `product_sales`)
VALUES ('Eyeshadow', 4, 25, 25, 0);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_id`,`price`,`stock_quantity`, `product_sales`)
VALUES ('Wine', 5, 25, 5, 0);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_id`,`price`,`stock_quantity`, `product_sales`)
VALUES ('Champagne', 5, 50, 3, 0);

select * from `bamazon`.`products`;