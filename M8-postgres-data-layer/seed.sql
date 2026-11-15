INSERT INTO authors (name) VALUES
  ('Robert C. Martin'),
  ('Kent Beck'),
  ('Martin Fowler');

INSERT INTO books (title, author_id, published_year) VALUES
  ('Clean Code', 1, 2008),
  ('Test-Driven Development by Example', 2, 2002),
  ('Refactoring', 3, 2018);

INSERT INTO reviews (book_id, rating, body) VALUES
  (1, 5, 'Essential reading for every developer.'),
  (1, 4, 'Great but dated in places.'),
  (2, 5, 'Changed how I write code.');
