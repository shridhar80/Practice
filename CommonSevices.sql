create database MembershipRolesDB;
use MembershipRolesDB;

CREATE TABLE users (
    id INT IDENTITY(1,1) PRIMARY KEY, 
    imageurl VARCHAR(50),
    aadharid VARCHAR(30) NOT NULL UNIQUE,
    firstname VARCHAR(50),
    lastname VARCHAR(50),
    birthdate DATE,
    gender VARCHAR(10) NOT NULL CHECK (gender IN ('male', 'female')), 
    email VARCHAR(40),
    contactnumber VARCHAR(10),
    password VARCHAR(25),
    createdon DATETIME DEFAULT GETDATE(),
    modifiedon DATETIME DEFAULT GETDATE()
);


CREATE TABLE addresses (
    id INT IDENTITY(1,1) PRIMARY KEY, 
    userid INT,
    area VARCHAR(50) NOT NULL,
    landmark VARCHAR(50) NOT NULL,
    city VARCHAR(20) NOT NULL,
    state VARCHAR(30) NOT NULL,
    pincode VARCHAR(10) NOT NULL,
    addresstype VARCHAR(20), 
    CONSTRAINT fk_users_address FOREIGN KEY (userid) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE
);


CREATE TABLE roles (
    id INT IDENTITY(1,1) PRIMARY KEY, 
    name VARCHAR(20),
    lob VARCHAR(20)
);


CREATE TABLE userroles (
    id INT IDENTITY(1,1) PRIMARY KEY, 
    userid INT NOT NULL,
    roleid INT NOT NULL,
    CONSTRAINT uc_userroles UNIQUE (userid, roleid), 
    CONSTRAINT fk_userroles_roles FOREIGN KEY (roleid) REFERENCES roles(id) ON UPDATE CASCADE ON DELETE CASCADE, 
    CONSTRAINT fk_userroles_users FOREIGN KEY (userid) REFERENCES users(id) ON UPDATE CASCADE ON DELETE CASCADE 
);