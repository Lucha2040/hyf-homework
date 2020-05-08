CREATE DATABASE HospitalDB;
USE HospitalDB;

CREATE TABLE Patient_Info (
Id INT NOT NULL auto_increment, 
primary key (Id),
Name varchar(255), 
Main_Doctor varchar(255),
Tutor varchar(255),
Birthday DATE
);

CREATE TABLE Tutor_Info (
Id INT NOT NULL auto_increment, 
primary key (Id), 
Name varchar(255), 
Address varchar(255),
Phone varchar (255),
Email varchar (255)
);

CREATE TABLE Docs_Info (
Id INT NOT NULL auto_increment,
primary key (Id), 
Name VARCHAR(255), 
Speciality VARCHAR (255), 
Phone VARCHAR (255), 
Email VARCHAR (255)
);

CREATE TABLE Historial (
Id INT NOT NULL auto_increment,
primary key (Id), 
Patient_Id int, 
Doc_Id int, 
Diagnosis VARCHAR (255), 
Prescription VARCHAR (255), 
Revised_On date,
Foreign key (Patient_Id) REFERENCES Patient_Info(Id),
Foreign key (Doc_Id) REFERENCES Docs_Info(Id)
);

CREATE TABLE Indexes (
Patient_Id int not null, 
Tutor_Id int, 
Doc_Id int, 
Foreign key (Tutor_Id) REFERENCES Tutor_Info(Id),
Foreign key (Doc_Id) REFERENCES Docs_Info(Id),
Foreign key (Patient_Id) REFERENCES Patient_Info(Id)
);
