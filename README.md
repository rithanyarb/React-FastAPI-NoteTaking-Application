# 📝 Notes App (React + FastAPI)

A simple, full-stack Notes application built using **React** for the frontend and **FastAPI** for the backend. 
Users can **register**, **login**, **create**, **edit**, and **delete** personal notes. Authentication is handled using **JWT** tokens.

---

##  Features

- User Registration & Login (JWT Auth)
- Create, Read, Update, Delete (CRUD) Notes
- Protected Endpoints with Authentication
- Responsive UI with Bootstrap styling
- FastAPI backend with PostgreSQL support 
- Token stored in local storage for persistent login

---

## Tech Stack

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

## Project Structure

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
| Method | Endpoint              | Description            |
|--------|-----------------------|------------------------|
| POST   | `/auth/`              | Register new user      |
| POST   | `/auth/token/`        | Get access token (JWT) |

### Notes
| Method | Endpoint                   | Description              |
|--------|----------------------------|--------------------------|
| GET    | `/notes/notes/`            | Get user notes           |
| POST   | `/notes/notes/`            | Create a new note        |
| PUT    | `/notes/notes/{note_id}/`  | Update an existing note  |
| DELETE | `/notes/notes/{note_id}/`  | Delete a note            |

---

## 🔧 Setup Instructions

### Prerequisites

- Node.js
- Python 3.9+
- pip / pipenv
- PostgreSQL (server - database storage)

---

### Frontend and Backend Setup

```terminal
"frontend"
cd 📁react_fastapi/📁react/myapp
npm start                                                             localhost:3000

"backend" 
cd 📁react_fastapi/NotesApp/python -m venv env
cd 📁react_fastapi/NotesApp/env/Scripts/activate
(env) 📁react_fastapi/NotesApp/uvicorn main:app --reload              localhost:8000
or
(env) 📁react_fastapi/NotesApp/uvicorn main:app --reload --port 8001/8002/any port.no
eg. (env) 📁react_fastapi/NotesApp/uvicorn main:app --reload --port 8001
```
API docs available at: `http://127.0.0.1:8000/docs`

---

## Sample Users

|  Username | Password  |
|-----------|-----------|
| `rbrithanya` | `12345`|
| `vidarshana` | `pass7`|

---

## 📸 Screenshots

Frontend Website

<img src="https://github.com/user-attachments/assets/b4ac8eac-fd54-408f-8af8-3a6d227b1411" width="500" height="500">
<img src="https://github.com/user-attachments/assets/b4bf6b86-df5a-4eed-9bca-6bc2d6a3ce18" width="500" height="500">
<img src="https://github.com/user-attachments/assets/28c612e6-d6a3-45a7-b3f9-79a5ab6c411a" width="500" height="500">

/docs - Backend 

<img src="https://github.com/user-attachments/assets/f0a94d90-25f1-4cff-966d-10ceb766e4b5" width="500" height="500">



---

## ✍️ Author

Made with ❤️ by [RB Rithanya]

---

## License

Free 

---
