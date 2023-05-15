import { displayDate } from '../../utils/formateDate';

const NoteItem = ({ note, selectedNote, handleSelectNote }) => {
  return (
    <div
      onClick={() => handleSelectNote(note)}
      className={`app-sidebar-note ${note.id === selectedNote.id && 'active'}`}>
      <h3>{note.title}</h3>
      <p>
        {displayDate(note.createdAt)} <span className="app-sidebar-note-content">{note.content.substring(0, 50)}</span>
      </p>
    </div>
  );
};

export default NoteItem;