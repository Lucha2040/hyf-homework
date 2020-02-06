-- Create a new database containing the following tables:
CREATE DATABASE SchoolDB;
USE SchoolDB;
-- Class: with the columns: id, name, begins (date), ends (date)
CREATE TABLE class (
id INT NOT NULL AUTO_INCREMENT, 
primary key (id),
name VARCHAR(100) NOT NULL, 
starts timestamp,
ends timestamp  
); 
SELECT * FROM class;
-- Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE student (
id INT NOT NULL AUTO_INCREMENT, 
primary key (id), 
name VARCHAR (100) NOT NULL, 
email VARCHAR (255), 
phone VARCHAR (30), 
class_id INT, 
FOREIGN KEY (class_id) REFERENCES class(id)
);
SELECT * FROM student; 
-- If you are done with the above tasks, you can continue with these advanced tasks:
-- Create an index on the name column of the student table.
CREATE INDEX nameindex ON student (name(2)); 
-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished (hint: enumerations).
ALTER TABLE student
ADD status ENUM ('not-started', 'ongoing', 'finished');
