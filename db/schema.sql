DROP DATABASE IF EXISTS burgers_db;

-- Great Burger Database in mySQL --
CREATE DATABASE burgers_db;

-- Assigns following table to burgers_db --
USE burgers_db;

-- Burger Table --
CREATE TABLE burgers_table (
    `id` INT AUTO_INCREMENT,
    `burger_name` VARCHAR(280) NOT NULL,
    `devoured` BOOLEAN DEFAULT false,
     primary key(id)
);

-- Table for proofing in workbench --
SELECT * FROM burgers_table;