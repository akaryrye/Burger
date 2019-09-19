/* Create Database and Tables */
CREATE DATABASE test_db;
USE test_db;

CREATE TABLE friends
(
	id INT AUTO_INCREMENT NOT NULL,
	name varchar(255) NOT NULL,
	male BOOLEAN DEFAULT false,
	scores varchar(255) NOT NULL,
	PRIMARY KEY(id)
);

/* Seeds */
INSERT INTO friends (name, male, scores) VALUES ('Ruth', false, '1,2,3,4,5,6,7,8,9,0');
INSERT INTO friends (name, male, scores) VALUES ('Leilani', false, '1,2,3,4,5,6,7,8,9,0');
INSERT INTO friends (name, male, scores) VALUES ('Bob', true, '1,2,3,4,5,6,7,8,9,0');
INSERT INTO friends (name, male, scores) VALUES ('Albertano', true, '1,2,3,4,5,6,7,8,9,0');
INSERT INTO friends (name, male, scores) VALUES ('Ryan', true, '1,2,3,4,5,6,7,8,9,0');
INSERT INTO friends (name, male, scores) VALUES ('Sally', false, '1,2,3,4,5,6,7,8,9,0');
