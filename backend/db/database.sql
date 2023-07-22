CREATE DATABASE IF NOT EXISTS companydb;

show databases;

USE companydb;

CREATE TABLE palabras(
    id INT(11) NOT NULL AUTO_INCREMENT,
    palabra VARCHAR(50) DEFAULT NULL,
    significado VARCHAR(50) DEFAULT NULL,
    PRIMARY KEY (id)
);

show tables;

describe table;

INSERT INTO palabras VALUES
    (1,"Drive","Manejar"),
    (2,"Read","Leer");
