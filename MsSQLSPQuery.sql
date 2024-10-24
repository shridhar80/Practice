
-- 1. Creating a Stored Procedure for User Registration
CREATE PROCEDURE RegisterUser
    @p_username VARCHAR(50),
    @p_password VARCHAR(255),
    @p_email VARCHAR(100),
    @p_address VARCHAR(255)
AS
BEGIN
    INSERT INTO users (username, password, email, address)
    VALUES (@p_username, @p_password, @p_email, @p_address);
END;


select * from users;

EXEC RegisterUser 
    @p_username = 'Ratan tata', 
    @p_password = 'password123', 
    @p_email = 'ratan@tata.com', 
    @p_address = 'delhi';

 -- 2. Creating a Stored Procedure for User Login
CREATE PROCEDURE LoginUser
    @p_username NVARCHAR(50),
    @p_password NVARCHAR(255)
AS
BEGIN
    SELECT id, username, email
    FROM users
    WHERE username = @p_username AND password = @p_password;
END;

exec LoginUser @p_username = 'Ratan tata', 
    @p_password = 'password123';


-- 3. Creating a Stored Procedure for Updating User Information

DROP PROCEDURE IF EXISTS UpdateUserInfo;

CREATE PROCEDURE UpdateUserInfo
    @p_user_id INT,
    @p_email VARCHAR(100),
    @p_address VARCHAR(255)
AS
BEGIN
    UPDATE users
    SET email = @p_email, address = @p_address
    WHERE id = @p_user_id;
END;

exec UpdateUserInfo @p_user_id = 22,
    @p_email = 'Ratantata@gmail.com',
    @p_address = 'Mumbai';