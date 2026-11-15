# M11 — Deploy with CI/CD + Docker

**Week 11 · Mar 15–21, 2027 · Deployment, CI/CD & DevOps Basics**

## Goal
Deploy a containerised app with a green CI pipeline and secure env config.

## Requirements
- A Dockerfile that builds and runs your app
- A GitHub Actions CI pipeline that installs, builds and tests
- A live deployment (Render / Netlify / Vercel / Fly)
- Environment variables and secrets kept out of version control
- Documented deploy + rollback steps

## Deliverables
Dockerfile · workflow file · live URL · deploy README

## Stretch goals
Automated CD on push to main · health checks · basic monitoring

## Rubric
- **Dockerfile quality** — 4: minimal layers, non-root, pinned base · 3: works · 2: bloated · 1: broken
- **CI pipeline** — 4: builds + tests + lints · 3: builds+tests · 2: partial · 1: none
- **Live deployment** — 4: production-grade config · 3: deployed · 2: partial · 1: not deployed
- **Secret hygiene** — 4: no secrets in repo, env used · 3: mostly · 2: a leak · 1: secrets committed

## Resources
Docker getting started · https://docs.docker.com/get-started/ · GitHub Actions · https://docs.github.com/en/actions · Render · https://render.com/docs · Netlify · https://docs.netlify.com/