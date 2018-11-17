
DROP USER IF EXISTS 'khaki'@'localhost';
create user 'khaki'@'localhost' identified by 'password';
GRANT DELETE ON plungercat.* TO 'khaki'@'localhost';
GRANT INSERT ON plungercat.* TO 'khaki'@'localhost';
GRANT SELECT ON plungercat.* TO 'khaki'@'localhost';
GRANT UPDATE ON plungercat.* TO 'khaki'@'localhost';

DROP DATABASE IF EXISTS plungercat;
CREATE DATABASE plungercat;
USE plungercat;

CREATE TABLE RESTAURANTS
(
    R_ID varchar(1024) NOT NULL UNIQUE,
    R_NAME varchar(2014) NOT NULL,
    PRIMARY KEY(R_ID)
);

CREATE TABLE USERS
(
    U_ID INT NOT NULL UNIQUE AUTO_INCREMENT,
    U_EMAIL varchar(1024) NOT NULL UNIQUE,
    U_PASSWORD varchar(1024) NOT NULL,
    U_FIRST_NAME varchar(1024) NOT NULL,
    U_LAST_NAME varchar(1024) NOT NULL,
    U_GENDER varchar(15) NOT NULL,
    R_ID varchar(1024),
    PRIMARY KEY(U_ID),
    FOREIGN KEY(R_ID) REFERENCES RESTAURANTS(R_ID)
);

CREATE TABLE HISTORY
(
    U_ID INT NOT NULL,
    R_ID varchar(1024) NOT NULL,
    H_DATE DATETIME NOT NULL,
    PRIMARY KEY(U_ID, R_ID),
    FOREIGN KEY(U_ID) REFERENCES USERS(U_ID),
    FOREIGN KEY(R_ID) REFERENCES RESTAURANTS(R_ID)
);

INSERT INTO RESTAURANTS (R_ID, R_NAME) VALUES ('dovujn6osuLTfytLf5eDGw', 'Cozmos Cafe + Bistro');
INSERT INTO USERS (U_EMAIL, U_PASSWORD, U_FIRST_NAME, U_LAST_NAME, U_GENDER, R_ID) VALUES ('dog', 'dog', 'dog', 'dog', 'dog', 'dovujn6osuLTfytLf5eDGw');
