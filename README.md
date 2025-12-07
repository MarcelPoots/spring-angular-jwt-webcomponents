# Spring Boot (Java 17) + Angular (JWT) Multi-module Example (Corrected)

This repository is a corrected minimal multi-module Maven project:
- `backend` — Spring Boot (Java 17) REST API with JWT authentication and a simple Task CRUD.
- `frontend` — Minimal Angular app that authenticates and consumes the Task API.

Changes in this regenerated version:
- Renamed entity `User` -> `AppUser` to avoid class name clashes with Spring Security's `User`.
- Renamed Jwt filter to `JwtAuthenticationFilter` and referenced it correctly.
- Security config updated to use `AntPathRequestMatcher` for `/h2-console/**` and `/api/auth/**`
  to avoid ambiguity when multiple servlets are present.
- AuthenticationManager bean now obtained from `AuthenticationConfiguration`.

## Quick start

### Backend
From `backend`:
```bash
mvn -q -DskipTests package
java -jar target/backend-0.0.1-SNAPSHOT.jar
```
API runs on `http://localhost:8080`. H2 console at `/h2-console`.

Default user: `user` / `password`.

### Frontend
From `frontend`:
```bash
npm install
npx ng serve
```
Open `http://localhost:4200`.

Notes:
- The sample uses an in-memory H2 DB and a simple JWT secret (not for production).
- Change `app.jwt.secret` in `backend/src/main/resources/application.properties` for production use.
