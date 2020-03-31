DROP DATABASE IF EXISTS burger_db;

-- Great Burger Database in mySQL --
CREATE DATABASE burger_db;

-- Assigns following table to burger_db --
USE burger_db;

-- Burger Table --
CREATE TABLE burger_table (
    `id` INT AUTO_INCREMENT,
    `burger_name` VARCHAR(280) NOT NULL,
    `devoured` BOOLEAN DEFAULT false,
     primary key(id)
);

-- Table for proofing in workbench --
SELECT * FROM burger_table;