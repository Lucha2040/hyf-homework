-- Get Meals that has a Price smaller than a specific Price fx 90
SELECT * FROM meal
WHERE Price < 90; 

-- Get Meals that still has available reservations
SELECT Meal.Id, Meal.Title, Meal.Max_reservations, (Meal.Max_reservations - coalesce(sum(Reservation.Number_of_guests), 0)) AS Available_reservations FROM Meal 
LEFT JOIN Reservation ON Meal.id = Reservation.Meal_id
Group by (Meal.Id)
HAVING Available_reservations > 0; 

-- Get Meals that partially match a title. Rød grød med will match the Meal with the title Rød grød med fløde
SELECT * FROM Meal 
WHERE title LIKE "%Rød grød med%"; 

-- Get Meals that has been Created between two dates
SELECT * FROM Meal 
WHERE Created_date BETWEEN '2020-02-09' AND '2020-02-12';

-- Get only specific number of Meals fx return only 5 Meals
SELECT * FROM Meal
LIMIT 5; 

-- Get the Meals that have good Reviews
SELECT Meal.id, Meal.Title, Review.Title, Review.Stars FROM Meal 
JOIN Review ON Meal.id = Review.Meal_id 
WHERE Stars >= 4;

-- Get reservations for a specific Meal sorted by Created_date
SELECT Reservation.Id, Meal.Title, Reservation.Created_date, Reservation.Number_of_guests FROM Reservation
JOIN Meal ON Meal.id = Reservation.Meal_id 
WHERE Meal.id = 6
ORDER BY Meal.Created_date; 

-- Sort all Meals by average number of Stars in the Reviews
SELECT Meal.Id, Meal.Title, AVG(Review.Stars) FROM Meal
JOIN Review ON Meal.id = Review.Meal_id
GROUP BY Meal.Id
ORDER BY AVG(Review.Stars) DESC; 

