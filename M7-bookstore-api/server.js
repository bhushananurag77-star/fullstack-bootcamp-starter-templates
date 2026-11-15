const express = require("express");
const app = express();
app.use(express.json());

let books = [{ id: 1, title: "Clean Code", author: "Robert C. Martin" }];
let nextId = 2;

app.get("/books", (req, res) => res.json(books));

app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === Number(req.params.id));
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.json(book);
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) return res.status(400).json({ error: "title and author are required" });
  const book = { id: nextId++, title, author };
  books.push(book);
  res.status(201).json(book);
});

app.put("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === Number(req.params.id));
  if (!book) return res.status(404).json({ error: "Book not found" });
  const { title, author } = req.body;
  if (title !== undefined) book.title = title;
  if (author !== undefined) book.author = author;
  res.json(book);
});

app.delete("/books/:id", (req, res) => {
  const idx = books.findIndex((b) => b.id === Number(req.params.id));
  if (idx === -1) return res.status(404).json({ error: "Book not found" });
  books.splice(idx, 1);
  res.status(204).end();
});

app.use((req, res) => res.status(404).json({ error: "Route not found" }));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Server error" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Bookstore API on :${PORT}`));
