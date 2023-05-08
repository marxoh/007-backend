CREATE DATABASE IF NOT EXISTS tasksdb;

USE tasksdb;

CREATE TABLE IF NOT EXISTS tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title varchar(100) NOT NULL,
    description text,
    PRIMARY KEY (id)
);

INSERT INTO tasks (title, description) VALUES
    ('Task1', 'Some description'),
    ('Task2', 'Some description 2');