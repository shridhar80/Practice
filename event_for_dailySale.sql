CREATE TABLE daily_sales_report (
    id INT AUTO_INCREMENT PRIMARY KEY,
    report_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    amount DECIMAL(10, 2) NOT NULL
);
 insert into daily_sales_report(amount) values(200);
 select * from daily_sales_report;
 INSERT INTO payments (order_id, payment_amount, payment_method, payment_status) VALUES(3, 3000, 'PayPal', 'Completed');
 select * from payments;
 select sum(payment_amount) from payments where payment_status = 'Completed' and DATE(payment_date)=curdate();


DELIMITER //
CREATE PROCEDURE update_daily_sales()
BEGIN
declare total_amount int;
	 select sum(payment_amount) into total_amount from payments where payment_status = 'Completed' and DATE(payment_date)=curdate();

    insert into daily_sales_report(amount) values(total_amount);
END //
DELIMITER ;

drop PROCEDURE update_daily_sales;

select * from daily_sales_report;

show events;
drop event daily_sales_report_event;

SHOW VARIABLES LIKE 'event_scheduler';
SET GLOBAL event_scheduler = ON;
    
CREATE EVENT daily_sales_report_event
-- ON SCHEDULE EVERY 1 DAY
-- STARTS '2024-10-19 00:00:00'
ON SCHEDULE EVERY 1 MINUTE
STARTS CURRENT_TIMESTAMP
DO
    call update_daily_sales();
    
    
    
SHOW EVENTS FROM tflecommers;   
 ALTER EVENT daily_sales_report_event DISABLE;