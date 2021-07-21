CREATE TABLE environment(
    id SERIAL PRIMARY KEY,
    todaySdate DATE NOT NULL,
    temp DECIMAL NOT NULL,
    weather TEXT NOT NULL,
    occation TEXT NOT NULL,
    whoWillIMeetWith TEXT NOT NULL,
    howManyTimesHaveImetThem INT NOT NULL
);