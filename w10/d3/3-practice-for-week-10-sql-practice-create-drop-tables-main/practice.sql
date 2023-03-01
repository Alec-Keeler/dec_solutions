CREATE TABLE IF NOT EXISTS puppies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(50),
    age_yrs FLOAT(3, 1),
    breed VARCHAR(100),
    weight_lbs INTEGER,
    microchipped BOOLEAN
);