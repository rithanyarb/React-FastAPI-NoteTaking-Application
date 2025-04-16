const NoteItem = ({ note, onEdit, onDelete }) => (
  <li className="list-group-item d-flex justify-content-between align-items-start flex-wrap">
    <div style={{ flex: 1 }}>
      <h6>{note.title}</h6>
      <p className="text-muted">{note.content}</p>
      <small>{new Date(note.created_at).toLocaleString()}</small>
    </div>
    <div className="btn-group mt-2">
      <button className="btn btn-sm btn-outline-primary me-2" onClick={onEdit}>
        Edit
      </button>
      <button className="btn btn-sm btn-outline-danger" onClick={onDelete}>
        Delete
      </button>
    </div>
  </li>
);

export default NoteItem;
