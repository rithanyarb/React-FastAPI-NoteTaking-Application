const NoteForm = ({ noteData, setNoteData, handleSubmit, editing }) => (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      className="form-control mb-2"
      placeholder="Title"
      value={noteData.title}
      onChange={(e) => setNoteData({ ...noteData, title: e.target.value })}
      required
    />
    <textarea
      rows="3"
      className="form-control mb-2"
      placeholder="Content"
      value={noteData.content}
      onChange={(e) => setNoteData({ ...noteData, content: e.target.value })}
      required
    />
    <button type="submit" className="btn btn-success w-100">
      {editing ? "Update Note" : "Add Note"}
    </button>
  </form>
);

export default NoteForm;
