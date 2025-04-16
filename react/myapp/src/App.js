import React, { useState, useEffect } from "react";
import api from "./api";

const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [notes, setNotes] = useState([]);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [registerData, setRegisterData] = useState({
    user_name: "",
    email: "",
    password: "",
    is_active: true,
  });
  const [noteData, setNoteData] = useState({ title: "", content: "" });
  const [editingNote, setEditingNote] = useState(null);
  const [showRegister, setShowRegister] = useState(false);

  useEffect(() => {
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      fetchNotes();
    }
  }, [token]);

  const fetchNotes = async () => {
    try {
      const response = await api.get("/notes/notes/");
      setNotes(response.data);
    } catch (error) {
      console.error("Failed to fetch notes:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const params = new URLSearchParams();
      params.append("username", loginData.username);
      params.append("password", loginData.password);

      const response = await api.post("/auth/token/", params);
      setToken(response.data.access_token);
      localStorage.setItem("token", response.data.access_token);
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      // Register the user
      await api.post("/auth/", registerData);
      alert("User registered successfully. You are now logged in.");

      // Log the user in immediately after registration
      const params = new URLSearchParams();
      params.append("username", registerData.user_name);
      params.append("password", registerData.password);

      const response = await api.post("/auth/token/", params);
      setToken(response.data.access_token);
      localStorage.setItem("token", response.data.access_token);

      // Close the registration form and automatically load notes
      setShowRegister(false);
    } catch (error) {
      alert("Registration failed. Username or email might already be taken.");
    }
  };

  const handleLogout = () => {
    setToken("");
    localStorage.removeItem("token");
    api.defaults.headers.common["Authorization"] = "";
    setNotes([]);
  };

  const handleNoteCreate = async (e) => {
    e.preventDefault();
    try {
      if (editingNote) {
        await api.put(`/notes/notes/${editingNote.note_id}/`, noteData);
        setEditingNote(null);
      } else {
        await api.post("/notes/notes/", noteData);
      }
      fetchNotes();
      setNoteData({ title: "", content: "" });
    } catch (error) {
      console.error("Failed to create/update note:", error);
    }
  };

  const handleNoteDelete = async (note_id) => {
    try {
      await api.delete(`/notes/notes/${note_id}/`);
      fetchNotes();
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  };

  const handleNoteUpdate = (note) => {
    setEditingNote(note);
    setNoteData({ title: note.title, content: note.content });
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="text-center mb-4">📝 Notes App</h2>

          {!token ? (
            showRegister ? (
              <form onSubmit={handleRegister}>
                <h5 className="text-center mb-3">Create an Account</h5>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={registerData.user_name}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        user_name: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    value={registerData.email}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={registerData.password}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        password: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <button className="btn btn-success w-100" type="submit">
                  Register
                </button>
                <p className="text-center mt-3">
                  Already have an account?{" "}
                  <span
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => setShowRegister(false)}
                  >
                    Login
                  </span>
                </p>
              </form>
            ) : (
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    value={loginData.username}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        username: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        password: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <button className="btn btn-primary w-100" type="submit">
                  Login
                </button>
                <p className="text-center mt-3">
                  Don't have an account?{" "}
                  <span
                    style={{ color: "blue", cursor: "pointer" }}
                    onClick={() => setShowRegister(true)}
                  >
                    Register
                  </span>
                </p>
              </form>
            )
          ) : (
            <>
              <button
                className="btn btn-danger mb-3 w-100"
                onClick={handleLogout}
              >
                Logout
              </button>

              <form onSubmit={handleNoteCreate} className="mb-4">
                <div className="mb-3">
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder="Note Title"
                    value={noteData.title}
                    onChange={(e) =>
                      setNoteData({ ...noteData, title: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    name="content"
                    className="form-control"
                    rows="3"
                    placeholder="Note Content"
                    value={noteData.content}
                    onChange={(e) =>
                      setNoteData({ ...noteData, content: e.target.value })
                    }
                    required
                  />
                </div>
                <button className="btn btn-success w-100" type="submit">
                  {editingNote ? "Update Note" : "Add Note"}
                </button>
              </form>

              <hr />

              <h5>Your Notes</h5>
              {notes.length === 0 ? (
                <p className="text-muted">No notes found.</p>
              ) : (
                <ul className="list-group">
                  {notes.map((note) => (
                    <li
                      key={note.note_id}
                      className="list-group-item d-flex justify-content-between align-items-start flex-wrap"
                    >
                      <div style={{ flex: 1 }}>
                        <h6 className="mb-1">{note.title}</h6>
                        <p
                          className="mb-1 text-muted"
                          style={{ fontSize: "0.9rem" }}
                        >
                          {note.content}
                        </p>
                        <small className="text-muted">
                          Created: {new Date(note.created_at).toLocaleString()}
                        </small>
                      </div>
                      <div className="btn-group mt-2 mt-md-0">
                        <button
                          className="btn btn-sm btn-outline-primary me-2"
                          onClick={() => handleNoteUpdate(note)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-sm btn-outline-danger"
                          onClick={() => handleNoteDelete(note.note_id)}
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
