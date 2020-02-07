SELECT * FROM task;

-- Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id
INSERT INTO task (title, description, created, updated, due_date, status_id, user_id)
VALUES ('Conquer the World', 
'By being kind, professional and stoic', 
'2020-02-05 12:57:58', 
'2020-02-05 12:58:58', 
'2040-02-05 12:57:58',
2,
5 );

-- Change the title of a task
UPDATE	task
SET title = 'Stop ironing things because is useless'
WHERE id = 11;

-- Change a task due date
UPDATE task 
SET due_date = '2020-02-05 13:08:25'
WHERE id = 12;

-- Change a task status
UPDATE task 
SET status_id = 2
WHERE id = 25;

-- Mark a task as complete
UPDATE task 
SET status_id = 3 
WHERE id = 34;

-- Delete a task
DELETE FROM task
WHERE id = 21;