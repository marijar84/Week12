DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT unique auto_increment not null,
  product_name varchar(100) null,
  department_name varchar(100) null,
  price int NULL,
  stock_quantity int null,
  PRIMARY KEY (item_id)
);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
VALUES ('Laptop', 'Computer',1100,6);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
VALUES ('Tablet', 'Computer',700,100);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
VALUES ('Dress', 'Clothing', 35, 50);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
VALUES ('Shirt', 'Clothing', 25, 60);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
VALUES ('Harry Potter', 'Movies', 8, 15);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
VALUES ('Start Wars', 'Movies', 9, 10);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
VALUES ('Eyeliner', 'Makeup', 12, 10);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
VALUES ('Eyeshadow', 'Makeup', 25, 25);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
VALUES ('Wine', 'Food', 25, 5);

INSERT INTO `bamazon`.`products`
(`product_name`,`department_name`,`price`,`stock_quantity`)
VALUES ('Champagne', 'Food', 50, 3);

select * from `bamazon`.`products`;