CREATE TABLE enviroment(
    id SERIAL NOT NULL,
    date DATE NOT NULL,
    temp DECIMAL NOT NULL,
    weather TEXT NOT NULL,
    occation TEXT NOT NULL,
    whoWillIMeetWith TEXT NOT NULL,
    howManyTimesHaveImetthem TEXT NOT NULL,
    PRIMARY KEY (id)
);