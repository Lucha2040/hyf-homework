CREATE DATABASE Mealshare;
USE Mealshare;

CREATE TABLE Meal(
Id INT NOT NULL auto_increment, 
primary key (Id),
Title varchar(255), 
`Description` text, 
Location varchar(255), 
`When` datetime,  
Max_reservations INT, 
Price DECIMAL(10, 2), 
Created_date DATE
);

CREATE TABLE Reservation(
Id INT NOT NULL auto_increment, 
primary key (Id), 
Number_of_guests int, 
Meal_id INT, 
foreign key (Meal_id) references Meal(id), 
Created_date DATE
);

CREATE TABLE Review (
Id INT NOT NULL auto_increment,
primary key (Id), 
Title VARCHAR(255), 
`Description` TEXT, 
Meal_id INT, 
foreign key (Meal_id) references Meal(id), 
Stars DECIMAL (10, 1),
Created_date date 
);
