# M9 — Secured API (JWT + roles)

**Week 9 · Mar 1–7, 2027 · REST APIs, Auth & Security**

## Goal
An API where protected routes require valid tokens and roles are enforced.

## Requirements
- Register and login endpoints
- Password hashing with bcrypt
- JWT issued on login with role claims
- Protected route(s) verifying the token
- Role-based access control (admin vs user)
- Input validation and safe error messages

## Deliverables
Runnable server · README with auth flow · security checklist

## Stretch goals
Refresh tokens · password reset · rate limiting on login

## Rubric
- **Auth correctness** — 4: secure · 3: correct · 2: flawed · 1: broken
- **Password hashing** — 4: bcrypt, proper cost · 3: hashed · 2: weak · 1: plaintext
- **RBAC** — 4: enforced everywhere · 3: enforced · 2: partial · 1: none
- **Security hygiene** — 4: no secrets, validation, safe errors · 3: mostly · 2: gaps · 1: insecure

## Resources
JWT.io · https://jwt.io/ · OWASP Cheat Sheets · https://cheatsheetseries.owasp.org/ · Auth0 · https://auth0.com/docs