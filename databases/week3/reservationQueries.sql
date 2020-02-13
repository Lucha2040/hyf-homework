-- Get all reservations
SELECT * FROM Reservation; 

-- Add a new reservation
INSERT INTO Reservation (Number_of_guests, Meal_id, Created_date) 
VALUES (
"4",
"1", 
'2020-02-10'
);

-- Get a reservation with any id, fx 1
SELECT * FROM Reservation
WHERE id = 1;

-- Update a reservation with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Reservation 
SET Number_of_guests = 8, Meal_id = 9, Created_date = '2020-02-03'
WHERE id = 2; 

-- Delete a reservation with any id, fx 1
DELETE FROM Reservation WHERE id = 7; 

