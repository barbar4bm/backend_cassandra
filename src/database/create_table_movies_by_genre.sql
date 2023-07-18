CREATE TABLE movies_by_genre (
  genre VARCHAR,
  year INT,
  title VARCHAR,
  PRIMARY KEY ((genre), year, title)
) WITH CLUSTERING ORDER BY (year DESC, title ASC);