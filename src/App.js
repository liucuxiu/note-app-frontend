import './styles/style.css'
import SideBar from './components/SideBar/SideBar';
import Content from './components/Content/Content';
import HeaderLeft from './components/Header/HeaderLeft';
import HeaderRight from './components/Header/HeaderRight';
import { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState( [
      {
        id: 1,
        title: "today",
        content: "I am thinking of",
        createdAt: "12/2/2002"
      },
      {
        id: 2,
        title: "today1 ",
        content: "I am thinking ofm",
        createdAt: "12/2/2002"
      },
      {
        id: 3,
        title: "today2",
        content: "I am thinking abc2",
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
        id: 6,
        title: "today",
        content: "I am thinking of",
        createdAt: "12/2/2002"
      },
      {
        id: 7,
        title: "today",
        content: "I am thinking of",
        createdAt: "12/2/2002"
      },
      {
        id: 8,
        title: "today",
        content: "I am thinking of",
        createdAt: "12/2/2002"
      },
      {
        id: 9,
        title: "today",
        content: "I am thinking of",
        createdAt: "12/2/2002"
      },
      {
        id: 10,
        title: "today",
        content: "I am thinking of",
        createdAt: "12/2/2002"
      }
    ]

  )
  const [selectedNote, setSelectedNote] = useState({})

  const handleSelectNote = (note) => {
    console.log("select note", note)
    setSelectedNote(note)
  }

  const onAddNote = () => {
    const newNote = {
      id: Math.random(),
      title:'today' + Math.random(),
      content: 'abc'
    }
    setNotes([newNote, ...notes])
    setSelectedNote(newNote)
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    });
    console.log(updatedNotesArr)
    setNotes(updatedNotesArr);
  }
  const getSelectedNote = () => {
    return notes.find(({ id }) => id === selectedNote.id);
  };

  useEffect(() => {

  })

  return (
    <>
      <HeaderLeft/>
      <SideBar
              notes={notes}
              handleSelectNote={handleSelectNote}
              selectedNote={selectedNote}/>
      <HeaderRight
              onAddNote={onAddNote}
              selectedNote={selectedNote}/>
      <Content
              selectedNote={getSelectedNote()}
              onUpdateNote={onUpdateNote}/>
    </>
  );
}

export default App;
