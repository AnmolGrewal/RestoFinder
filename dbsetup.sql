
CREATE DATABASE plungercat;

create user 'khaki'@'localhost' identified by 'password';
GRANT DELETE ON plungercat.* TO 'khaki'@'localhost';
GRANT INSERT ON plungercat.* TO 'khaki'@'localhost';
GRANT SELECT ON plungercat.* TO 'khaki'@'localhost';
GRANT UPDATE ON plungercat.* TO 'khaki'@'localhost';

USE plungercat;

CREATE TABLE USERS
(
    U_ID INT NOT NULL UNIQUE AUTO_INCREMENT,
    U_NAME varchar(1024) NOT NULL,
    U_EMAIL varchar(1024) NOT NULL,
    U_PASSWORD varchar(1024) NOT NULL,
    PRIMARY KEY(P_CODE)
);
