CREATE database HRDB;
use HRDB;
 
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(100),
    last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
 
 
-- create a trigger named update_last_updated that updates the last_updated column
--  whenever a row is inserted or updated in the employees table
DELIMITER //
CREATE TRIGGER update_last_updated
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
SET NEW.last_updated = current_timestamp();
END;
//
 
 DELIMITER //
CREATE TRIGGER update_last_updated_on_update
BEFORE UPDATE ON employees
FOR EACH ROW
BEGIN
    SET NEW.last_updated = CURRENT_TIMESTAMP;
END;
//
DELIMITER ;
 
 
-- after   defining table   try to write  DML queries to test triggers are working
-- as per expectation of buisiness logic
 select * from employees;
-- Insert a new employee
INSERT INTO employees (name, department) VALUES ('Ravi Tambade', 'training');
 
-- Update existing record
 
UPDATE  employees  SET department="BOD" WHERE id=1;
 
SELECT * FROM employees;

------------------------------------------------------------------------

CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    quantity INT,
    order_date DATETIME,
    status ENUM('pending', 'completed', 'canceled')
);
 
CREATE TABLE inventory (
    product_id INT PRIMARY KEY,
    stock_quantity INT
);
 
-- user story:
-- When an order is placed, the inventory is automatically  updated to
-- reflect  new updated stock
 
DELIMITER $$
CREATE TRIGGER after_order_insert
AFTER  INSERT ON  orders
FOR EACH ROW
BEGIN
	DECLARE available_stock INT;
    SELECT stock_quantity INTO available_stock
    FROM inventory
    WHERE product_id = NEW.product_id;
     IF available_stock IS NOT NULL AND available_stock >= NEW.quantity THEN
		UPDATE  inventory
		SET  stock_quantity=stock_quantity-NEW.quantity
		WHERE  product_id=NEW.product_id;
     ELSE
		SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT= 'Insufficient stock for the product';
     END IF;
END $$
DELIMITER ;
 
 
-- Test trigger execution:
 
-- pre-requisite
INSERT INTO inventory (product_id,stock_quantity)
values	(1,56),
		(2,78),
		(5,00);
        
select * from inventory;
-- Insert a new order
INSERT INTO orders (product_id, quantity, order_date, status)
Values (5, 3, NOW(), 'pending');

select * from orders;

create table payments (
payment_id int auto_increment primary key,
order_id int,
amount decimal(10,2),
payment_date datetime,
status enum('pending','completed')
);


DELIMITER $$
CREATE TRIGGER after_payment_insert
AFTER  INSERT ON  payments
FOR EACH ROW
BEGIN
	
     IF new.status = 'completed' THEN
		UPDATE  orders
		SET  status= 'completed'
		WHERE  order_id=NEW.order_id;
     ELSE
		SIGNAL SQLSTATE '45000' 
        SET MESSAGE_TEXT= 'Insufficient stock for the product';
     END IF;
END $$
DELIMITER ;

INSERT INTO payments (order_id, amount, payment_date, status)
Values (1, 1500, NOW(), 'completed');

select * from payments;


--------------------------------------------------------------------------------


 
CREATE TABLE customers (
    custid INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(255),
    registrationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO customers (fullName)
Values ('Amitabh Bachchan'),('Amir Khan'), ('Aishwarya Rai-Bachchan'), ('Ranbir Kapoor'), ('Hritik Roshan');
	
select * from customers;
    
CREATE TABLE accounts (
    acctid INT AUTO_INCREMENT PRIMARY KEY,
    customerId int,
    accounttype enum ( 'current', 'saving'),
    createdon TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    balance decimal(10,2),
    constraint foreign key (customerId) references customers(custid)
);

select * from accounts;

create table operations(
 opId int auto_increment primary key,
 accountId int,
 amount decimal(10,2),
 operationsDate timestamp default current_timestamp,
 operationType enum ( 'deposite', 'withdraw'),
 constraint foreign key (accountId) references accounts(acctid)
);

create table logtbl(
logId int auto_increment primary key,
operationId int, 
 logDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 status enum('completed'),
constraint foreign key (operationId) references operations(opId)
);


DELIMITER $$
CREATE TRIGGER after_customer_insert
AFTER  INSERT ON  customers
FOR EACH ROW
BEGIN
	insert into accounts (customerId,accounttype,balance) values (new.custid,'saving',15000.00);
END $$
DELIMITER ;

drop PROCEDURE spDepositeInterest;
DELIMITER $$
CREATE PROCEDURE spDepositeInterest(IN spaccountId INT, IN spinterestRate int)
BEGIN
declare AvlBalance DECIMAL(10,2);
select balance into AvlBalance from accounts where acctid= spaccountId;

insert into operations(accountId,amount,operationType) values (spaccountId,AvlBalance+AvlBalance*(spinterestRate/100), 'deposite');

END $$

DELIMITER ;

call spDepositeInterest(6,10);
