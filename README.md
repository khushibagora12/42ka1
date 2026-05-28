# 42ka1 — URL Shortener

A production-ready URL shortener built with the MERN stack, featuring Redis caching, MongoDB indexing, and API rate limiting.

## 🔗 Live Demo
[https://42ka1.vercel.app](https://42ka1.vercel.app)

## Tech Stack
- **Frontend** — React.js
- **Backend** — Node.js, Express.js
- **Database** — MongoDB (with indexing)
- **Cache** — Redis
- **Deployment** — Vercel, Render

## Features
- Shorten any long URL to a compact link
- Redis caching for fast repeated URL resolution
- MongoDB indexing on short-code fields for optimized queries
- API rate limiting (per IP) to prevent abuse
- Clean, minimal UI

## How It Works
1. User submits a long URL
2. Server generates a unique short code and stores it in MongoDB
3. On redirect, server checks Redis cache first — if miss, queries MongoDB and caches the result
4. Rate limiter tracks requests per IP and blocks excessive traffic
