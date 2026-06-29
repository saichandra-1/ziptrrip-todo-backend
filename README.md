# Backend — Todo API

Node.js + Express + MongoDB REST API for the Todo application.

## Tech Stack

| Tool | Purpose |
|------|---------|
| Node.js | Runtime |
| Express | HTTP framework |
| Mongoose | MongoDB ODM |
| dotenv | Environment config |
| cors | Cross-origin requests |

## Setup

```bash
npm install
# create .env (see below)
npm start
```

### .env
```
MONGO_URI=mongodb://localhost:27017/tododb
PORT=5000
```

## Project Structure

```
backend/
├── server.js                  # Entry point, DB connection
├── models/
│   └── Todo.js                # Mongoose schema
├── controllers/
│   └── todoController.js      # Route handler logic
├── routes/
│   └── todos.js               # Express router
└── .env                       # Environment variables
```

## Todo Schema

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `title` | String (required) | — | Todo title |
| `description` | String | `""` | Optional details |
| `completed` | Boolean | `false` | Completion status |
| `priority` | `low` \| `medium` \| `high` | `medium` | Priority level |
| `dueDate` | Date | `null` | Optional deadline |
| `tags` | String[] | `[]` | Labels/categories |
| `createdAt` | Date | auto | Mongoose timestamp |
| `updatedAt` | Date | auto | Mongoose timestamp |

## API Endpoints

Base URL: `http://localhost:5000/api`

### Get all todos
```
GET /todos
```
**Query parameters:**

| Param | Type | Description |
|-------|------|-------------|
| `search` | string | Filter by title (case-insensitive) |
| `completed` | `true` \| `false` | Filter by completion status |
| `priority` | `low` \| `medium` \| `high` | Filter by priority |

**Response:** Array of todo objects, sorted newest first.

---

### Get single todo
```
GET /todos/:id
```
**Response:** Single todo object or `404`.

---

### Create todo
```
POST /todos
Content-Type: application/json
```
**Body:**
```json
{
  "title": "Buy groceries",
  "description": "Milk, eggs, bread",
  "priority": "high",
  "dueDate": "2024-12-31",
  "tags": ["personal", "shopping"]
}
```
**Response:** Created todo with `201` status.

---

### Update todo
```
PUT /todos/:id
Content-Type: application/json
```
**Body:** Any subset of todo fields.
```json
{
  "completed": true
}
```
**Response:** Updated todo object.

---

### Delete todo
```
DELETE /todos/:id
```
**Response:** `{ "message": "Todo deleted" }`
