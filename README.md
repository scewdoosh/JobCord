# Full Stack Web App — Spring Boot & MongoDB

A full stack job listing web application built with Spring Boot and MongoDB, featuring MongoDB Aggregation Pipeline for advanced text search across job profiles, descriptions, and tech stacks.

---

## Tech Stack

**Backend**
- Java 25
- Spring Boot
- Spring Data MongoDB
- MongoDB Atlas
- Swagger UI (springdoc-openapi)
- Maven

**Frontend**
- React.js

---

## Project Structure

```
FullStackWebApp_SpringBoot-MongoDB/
├── Backend/       # Spring Boot REST API
└── frontend/      # React.js UI
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Java 25+
- Maven
- Node.js & npm
- MongoDB Atlas account

---

## Backend Setup

### 1. Clone the repository

```bash
git clone https://github.com/scewdoosh/FullStackWebApp_SpringBoot-MongoDB.git
cd FullStackWebApp_SpringBoot-MongoDB/Backend
```

### 2. Configure MongoDB

Create the file `src/main/resources/application.properties` using the provided example:

```bash
cp src/main/resources/application.properties.example src/main/resources/application.properties
```

Then open `application.properties` and fill in your credentials:

```properties
spring.application.name=Backend
spring.data.mongodb.uri=mongodb+srv://USERNAME:PASSWORD@cluster.mongodb.net/?appName=appname
spring.data.mongodb.database=your_database_name
```

### 3. Run the Backend

```bash
mvn spring-boot:run
```

The backend will start at:
```
http://localhost:8080
```

Swagger UI will be available at:
```
http://localhost:8080/swagger-ui/index.html
```

---

## Frontend Setup

### 1. Navigate to the frontend folder

```bash
cd ../frontend
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the frontend

```bash
npm start
```

The frontend will start at:
```
http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/posts` | Get all job posts |
| POST | `/post` | Add a new job post |
| GET | `/posts/{text}` | Search jobs by keyword |

---

## Features

- View all job listings
- Add new job posts via REST API
- Search jobs by keyword using **MongoDB Aggregation Pipeline**
- Location-based search support
- Swagger UI for API documentation and testing

---

## Notes

- `application.properties` is excluded from the repo for security — use the `.example` file as a template
- Frontend is adapted from [Telusko](https://github.com/navinreddy20) for learning purposes
- Backend built from scratch

---

## Author

**scewdoosh** — Backend built independently using Spring Boot & MongoDB.
