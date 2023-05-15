import NoteItem from './NoteItem/NoteItem';

const SideBar = ({ notes, handleSelectNote, selectedNote }) => {
  if (notes === undefined || notes.length === 0) {
    return <div className="sidebar">
      <div className="app-sidebar-notes empty-sidebar">
        <div className="centered-text">
          No notes
        </div>
      </div>
    </div>;
  }

  const notesList = notes.map(note =>
    <NoteItem key={note.id}
              note={note}
              handleSelectNote={handleSelectNote}
              selectedNote={selectedNote}
    />
  )
  return (
    <>
      <aside className="sidebar">
        <div className="app-sidebar-notes">
          {notesList}
        </div>
      </aside>
    </>

  );
};

export default SideBar;