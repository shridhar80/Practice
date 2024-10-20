CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    name VARCHAR(100),
    salary DECIMAL(10, 2)
);

INSERT INTO employees (employee_id, name, salary) VALUES
(1, 'Alice', 5000),
(2, 'Bob', 6000),
(3, 'Charlie', 5000);

DELIMITER $$
CREATE PROCEDURE process_employees()
BEGIN
    DECLARE emp_id INT;
    DECLARE emp_name VARCHAR(100);
    DECLARE emp_salary DECIMAL(10, 2);
    
    DECLARE employee_cursor CURSOR FOR
    SELECT employee_id, name, salary FROM employees;
    
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET emp_id = NULL;

    OPEN employee_cursor;
    
    employee_loop: LOOP
        
        FETCH employee_cursor INTO emp_id, emp_name, emp_salary;
        
        IF emp_id IS NULL THEN
            LEAVE employee_loop;
        END IF;
        
        -- Print custom message (or perform any processing logic)
        SELECT CONCAT('Employee: ', emp_name, ' has salary: ', emp_salary) as details;
    END LOOP employee_loop;
    
   CLOSE employee_cursor;
END $$

DELIMITER ;





select * from orders;
-- drop procedure apply_discout;
DELIMITER $$
CREATE PROCEDURE apply_discout()
BEGIN
    DECLARE ord_id INT;
    DECLARE total_amt DECIMAL(10, 2);
    
    DECLARE order_discount_cursor CURSOR FOR
    
	SELECT id,total_amount
	FROM orders where total_amount>500;
    
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET ord_id = NULL;

    OPEN order_discount_cursor;
    
    discount_loop: LOOP
        
        FETCH order_discount_cursor INTO ord_id, total_amt;
        
        IF ord_id IS NULL THEN
            LEAVE discount_loop;
        END IF;
        
        -- ( perform any processing logic)
        update orders set total_amount = (total_amt * 0.9) where id= ord_id;
    END LOOP discount_loop;
    
   CLOSE order_discount_cursor;
END $$

DELIMITER ;

call apply_discout();
select * from orders;

