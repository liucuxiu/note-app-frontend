import NoteItem from './NoteItem/NoteItem';

const DUMMNY_NOTES = [
  {
    id: 1,
    title: "today",
    content: "I am thinking of",
    createdAt: "12/2/2002"
  },
  {
    id: 2,
    title: "today",
    content: "I am thinking of",
    createdAt: "12/2/2002"
  },
  {
    id: 3,
    title: "today",
    content: "I am thinking of",
    createdAt: "12/2/2002"
  },
  {
    id: 4,
    title: "today",
    content: "I am thinking of",
    createdAt: "12/2/2002"
  },
  {
    id: 5,
    title: "today",
    content: "I am thinking of",
    createdAt: "12/2/2002"
  },
  {
    id: 1,
    title: "today",
    content: "I am thinking of",
    createdAt: "12/2/2002"
  },
  {
    id: 2,
    title: "today",
    content: "I am thinking of",
    createdAt: "12/2/2002"
  },
  {
    id: 3,
    title: "today",
    content: "I am thinking of",
    createdAt: "12/2/2002"
  },
  {
    id: 4,
    title: "today",
    content: "I am thinking of",
    createdAt: "12/2/2002"
  },
  {
    id: 5,
    title: "today",
    content: "I am thinking of",
    createdAt: "12/2/2002"
  }
]

const SideBar = () => {
  const notesList = DUMMNY_NOTES.map(note =>
    <NoteItem key={note.id}
              id={note.id}
              title={note.title}/>
  )
  return (
    <>
      <aside className="sidebar">
        <ul>
          {notesList}
        </ul>
      </aside>
    </>

  );
};

export default SideBar;