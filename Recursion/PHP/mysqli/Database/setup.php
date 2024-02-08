<?php
use Database\MySQLWrapper;

$mysqli = new MySQLWrapper();

$result = $mysqli->query("
    CREATE TABLE IF NOT EXISTS cars (
      id INT PRIMARY KEY AUTO_INCREMENT,
      make VARCHAR(50),
      model VARCHAR(50),
      year INT,
      color VARCHAR(20),
      price FLOAT,
      mileage FLOAT,
      transmission VARCHAR(20),
      engine VARCHAR(20),
      status VARCHAR(10)
    );
");

$mysqli->query("
    CREATE TABLE IF NOT EXISTS parts (
      id INT PRIMARY KEY AUTO_INCREMENT,
      carId int,
      name VARCHAR(50),
      descruption VARCHAR(255),
      price FLOAT,
      quantityInStock int,
      CONSTRAINT fk_carId
        FOREIGN KEY (carId) 
        REFERENCES cars (id)
        ON DELETE RESTRICT ON UPDATE RESTRICT
    );
");

if($result === false) throw new Exception('Could not execute query.');
else print("Successfully ran all SQL setup queries.".PHP_EOL);
