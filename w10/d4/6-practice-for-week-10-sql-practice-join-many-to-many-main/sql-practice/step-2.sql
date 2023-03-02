-- Step 2
-- Just like with one-to-many relationships, you can filter one table by any
-- associated data on a conected table.
-- Your code here

SELECT musicians.first_name, musicians.last_name
FROM musician_instruments
JOIN musicians, instruments
ON (musician_id = musicians.id)
AND (instrument_id = instruments.id)
WHERE instruments.type = 'piano';