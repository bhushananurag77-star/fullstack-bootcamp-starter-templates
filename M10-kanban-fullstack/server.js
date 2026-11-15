const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

let boards = [];
let nextBoardId = 1;

app.get("/boards", (req, res) => res.json(boards));

app.post("/boards", (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "name required" });
  const board = { id: nextBoardId++, name, columns: [] };
  boards.push(board);
  res.status(201).json({ board });
});

app.post("/boards/:id/columns", (req, res) => {
  const board = boards.find((b) => b.id === Number(req.params.id));
  if (!board) return res.status(404).json({ error: "Board not found" });
  const { name } = req.body;
  board.columns.push({ id: board.columns.length + 1, name, cards: [] });
  res.status(201).json({ board });
});

app.listen(process.env.PORT || 3000, () => console.log("kanban api"));
