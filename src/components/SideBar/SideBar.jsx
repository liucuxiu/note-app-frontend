import NoteItem from './NoteItem/NoteItem';

const SideBar = ({ notes, handleSelectNote, selectedNote }) => {
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