const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());

const SECRET = process.env.JWT_SECRET || "change-me";
const users = [];

app.post("/register", async (req, res) => {
  const { email, password, role = "user" } = req.body;
  if (!email || !password) return res.status(400).json({ error: "email and password required" });
  const hash = await bcrypt.hash(password, 10);
  const user = { id: users.length + 1, email, passwordHash: hash, role };
  users.push(user);
  res.status(201).json({ id: user.id, email: user.email, role: user.role });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user || !(await bcrypt.compare(password, user.passwordHash)))
    return res.status(401).json({ error: "Invalid credentials" });
  const token = jwt.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: "1h" });
  res.json({ token });
});

function authenticate(req, res, next) {
  const header = req.headers.authorization || "";
  const token = header.replace("Bearer ", "");
  try { req.user = jwt.verify(token, SECRET); next(); }
  catch { res.status(401).json({ error: "Unauthorized" }); }
}

function requireRole(role) {
  return (req, res, next) => (req.user.role === role ? next() : res.status(403).json({ error: "Forbidden" }));
}

app.get("/me", authenticate, (req, res) => res.json(req.user));
app.get("/admin", authenticate, requireRole("admin"), (req, res) => res.json({ ok: true }));

app.listen(process.env.PORT || 3000, () => console.log("auth api"));
