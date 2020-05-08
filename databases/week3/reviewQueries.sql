-- Get all Reviews
SELECT * FROM Review;

-- Add a new Review
INSERT INTO Review (Title, `Description`, Meal_id, Stars, Created_date) 
VALUES (
'Awesome empanadas', 
'We ate all of them and were delicious. Real argentinean food!',
'1', 
5, 
'2020-02-11'
);

-- Get a Review with any id, fx 1
SELECT * FROM Review
WHERE id = 1; 

-- Update a Review with any id, fx 1. Update any attribute fx the Title or multiple attributes
UPDATE Review 
SET Title = 'Real italian pizza', `Description` = 'Enjoying the pizza while celebrating Inter vs AC Milan winning 4 to 2. In our face Zlatan!' , Meal_id = 4, Stars = 5, Created_date = '2020-02-09'
WHERE Id = 2; 

-- Delete a Review with any id, fx 1
DELETE FROM Review WHERE Id = 7; 
