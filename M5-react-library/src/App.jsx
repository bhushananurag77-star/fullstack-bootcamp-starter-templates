import { useState } from "react";

const items = [
  { id: 1, title: "The Pragmatic Programmer", category: "book" },
  { id: 2, title: "Inception", category: "movie" },
  { id: 3, title: "Clean Code", category: "book" },
  { id: 4, title: "The Matrix", category: "movie" },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const visible = items.filter(
    (i) => (category === "all" || i.category === category) && i.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main>
      <h1>Library</h1>
      <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search…" />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="movie">Movies</option>
        <option value="book">Books</option>
      </select>
      <ul>{visible.map((i) => <li key={i.id}>{i.title}</li>)}</ul>
    </main>
  );
}
