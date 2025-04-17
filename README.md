---
# 📝 Notes App (React + FastAPI + SQLite3)

A simple full-stack Notes application built with **React** (frontend) and **FastAPI** (backend) using **JWT authentication** and **SQLite3** as the database.
---

## 🚀 How to Run This App

Follow the steps below to set up and run the app locally:

---

### 🔧 Frontend Setup

> 💡 Make sure [Node.js](https://nodejs.org/) and `npm` are installed.

```bash
# Navigate to your frontend directory
cd react_fastapi/react/myapp

# Install dependencies
npm install

# Start the React development server
npm start
```

🔗 Runs on: [http://localhost:3000](http://localhost:3000)

---

### ⚙️ Backend Setup

```bash
# Navigate to your backend directory
cd react_fastapi/NotesApp

# Create and activate a virtual environment
python -m venv env
env\Scripts\activate  # For Windows
# OR source env/bin/activate  # For macOS/Linux

# Run the FastAPI backend server
uvicorn main:app --reload
# OR use a custom port
uvicorn main:app --reload --port 8001
```

📘 API Docs: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

---

### 🗃️ SQLite3 Database Access

After users and notes are created via the frontend or Swagger docs:

```bash
# Launch SQLite CLI in your project directory
cd react_fastapi/NotesApp
sqlite3 notesapp.db
```

Inside SQLite CLI:

```sql commands
-- Set output display format
.mode box  -- or use .mode table / .mode list

-- View all users
SELECT * FROM users;

-- View all notes
SELECT * FROM notes;
```

📝 Sample schema if creating tables manually:

```sql
CREATE TABLE users (user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name TEXT UNIQUE, email TEXT, hashed_password TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP, is_active BOOLEAN);

CREATE TABLE notes (note_id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, title TEXT, content TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP, updated_at DATETIME, FOREIGN KEY(user_id) REFERENCES users(user_id));
```

---

## 🔐 Features

- User Registration & Login (JWT Auth)
- Create, Read, Update, Delete (CRUD) Notes
- Protected Endpoints with Authentication
- Responsive UI with Bootstrap styling
- FastAPI backend with SQLite or PostgreSQL support
- Token stored in local storage for persistent login

---

## 🧰 Tech Stack

### Frontend

- [React](https://reactjs.org/)
- [Bootstrap](https://getbootstrap.com/)
- Axios for API requests

### Backend

- [FastAPI](https://fastapi.tiangolo.com/)
- SQLAlchemy for ORM
- JWT Authentication
- Pydantic for data validation

---

## 🗂️ Project Structure

```
📁 frontend/
  └── App.js          # Main React component (UI + API logic)
  └── api.js          # Axios config

📁 backend/
  └── 📁 routers/
    └── notes.py        # Notes CRUD API
    └── auth.py         # Auth routes (register & login)
    └── user.py         # User (no crud commands yet)...
  └── main.py         # FastAPI app entry point
  └── models.py       # SQLAlchemy models
  └── database.py     # DB setup
```

---

## 🔑 API Endpoints

### Authentication

| Method | Endpoint       | Description            |
| ------ | -------------- | ---------------------- |
| POST   | `/auth/`       | Register new user      |
| POST   | `/auth/token/` | Get access token (JWT) |

### Notes

| Method | Endpoint                  | Description             |
| ------ | ------------------------- | ----------------------- |
| GET    | `/notes/notes/`           | Get user notes          |
| POST   | `/notes/notes/`           | Create a new note       |
| PUT    | `/notes/notes/{note_id}/` | Update an existing note |
| DELETE | `/notes/notes/{note_id}/` | Delete a note           |

---

## 👤 Sample Users

| Username     | Password |
| ------------ | -------- |
| `rbrithanya` | `12345`  |
| `vidarshana` | `pass7`  |

---

## 📸 Screenshots

**Login Page**

<img src="https://github.com/user-attachments/assets/b4ac8eac-fd54-408f-8af8-3a6d227b1411" width="600" height="600">

**Register Page**

<img src="https://github.com/user-attachments/assets/b4bf6b86-df5a-4eed-9bca-6bc2d6a3ce18" width="600" height="600">

**Note Taking Page**

<img src="https://github.com/user-attachments/assets/28c612e6-d6a3-45a7-b3f9-79a5ab6c411a" width="600" height="600">

**Backend Swagger UI**

<img src="https://github.com/user-attachments/assets/f0a94d90-25f1-4cff-966d-10ceb766e4b5" width="600" height="600">

---

## ✍️ Author

Made with ❤️ by **RB Rithanya**

---

## 📜 License

Free to use for personal and educational purposes.

---
