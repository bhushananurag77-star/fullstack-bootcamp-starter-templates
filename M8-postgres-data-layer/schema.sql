CREATE TABLE authors (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  author_id INT NOT NULL REFERENCES authors(id),
  published_year INT
);

CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  book_id INT NOT NULL REFERENCES books(id),
  rating INT CHECK (rating BETWEEN 1 AND 5),
  body TEXT
);

CREATE INDEX idx_books_author ON books(author_id);
CREATE INDEX idx_reviews_book ON reviews(book_id);
