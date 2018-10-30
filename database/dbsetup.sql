
DROP USER IF EXISTS 'khaki'@'localhost';
create user 'khaki'@'localhost' identified by 'password';
GRANT DELETE ON plungercat.* TO 'khaki'@'localhost';
GRANT INSERT ON plungercat.* TO 'khaki'@'localhost';
GRANT SELECT ON plungercat.* TO 'khaki'@'localhost';
GRANT UPDATE ON plungercat.* TO 'khaki'@'localhost';

DROP DATABASE IF EXISTS plungercat;
CREATE DATABASE plungercat;
USE plungercat;

CREATE TABLE USERS
(
    U_ID INT NOT NULL UNIQUE AUTO_INCREMENT,
    U_NAME varchar(1024) NOT NULL,
    U_EMAIL varchar(1024) NOT NULL,
    U_PASSWORD varchar(1024) NOT NULL,
    PRIMARY KEY(U_ID)
);

CREATE TABLE RESTAURANTS
(
    R_ID varchar(1024) UNIQUE,
    R_NAME varchar(2014) NOT NULL,
    PRIMARY KEY(R_ID)
);

CREATE TABLE HISTORY
(
    U_ID INT NOT NULL,
    R_ID varchar(1024) NOT NULL,
    FOREIGN KEY(U_ID) REFERENCES USERS(U_ID),
    FOREIGN KEY(R_ID) REFERENCES RESTAURANTS(R_ID)
);
