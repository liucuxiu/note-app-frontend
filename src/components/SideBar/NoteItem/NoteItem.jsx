const NoteItem = ({ note , selectedNote, handleSelectNote}) => {
  return (
      <div
        onClick={() => handleSelectNote(note)}
        className={`app-sidebar-note ${note === selectedNote && "active"}`}>
        <h3>{note.title}</h3>

        <p>{note.content}</p>

        <small>13/04/2022</small>
      </div>
  )
}

export default NoteItem