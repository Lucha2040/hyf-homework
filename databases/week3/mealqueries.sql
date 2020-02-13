-- Get all meals
SELECT * FROM Meal;

-- Add a new meal
INSERT INTO Meal  (Title, `Description`, Location, `When`, Max_reservations, Price, Created_date) 
VALUES ('Empanadas', 
'F. Exs. kød, kylling, vegetar', 
'København', 
'01/03/2020', 
'12',
250.5, 
'2020-02-10'
); 

-- Get a meal with any id, fx 1
SELECT * FROM Meal 
WHERE Meal.Id = 5; 

-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal 
SET Title = "Smørrebrød", `Description` = "Yeah, overpriced danish tapas", Location = "Århus", `When` = "2020/02/29 17:00:00" , Max_reservations = "56", Price = 45, Created_date = "2019/11/01" 
WHERE Id = 2;

-- Delete a meal with any id, fx 1
DELETE FROM Meal WHERE Id = 3;    -- I introduced a repetead value on porpouse 