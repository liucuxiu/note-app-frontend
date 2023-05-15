import './styles/style.css';
import SideBar from './components/SideBar/SideBar';
import Content from './components/Content/Content';
import HeaderLeft from './components/Header/HeaderLeft';
import HeaderRight from './components/Header/HeaderRight';
import { useEffect, useState } from 'react';
import { auth } from './config/default';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState({});

  useEffect(() => {
      const fetchNotes = async () => {
        const res = await fetch('http://localhost:3000/notes', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': auth.token
          }
        });
        const data = await res.json();
        setNotes(data);
      };
      fetchNotes().catch(console.error);
    },
    []);

  const handleSelectNote = async (note) => {
    if (Object.keys(selectedNote).length !== 0) {
      await saveNote(selectedNote);
    }
    const result = await fetch(`http://localhost:3000/notes/${note.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth.token
      }
    });
    const data = await result.json();
    setSelectedNote(data);
  };

  const onAddNote = async () => {
    const res = await fetch('http://localhost:3000/notes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth.token
      },
      body: JSON.stringify({
        title: 'untitled',
        content: 'untitled'
      })
    });
    const newNote = await res.json();
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
  };

  useEffect(() => {
    const autoSaveTimer = setTimeout(() => {
      saveNote(selectedNote);
    }, 5000); // Auto-save every 5 seconds

    return () => clearTimeout(autoSaveTimer);
  }, [selectedNote]);

  const saveNote = async (note) => {
    if (!note || Object.keys(note).length === 0) return;
    try {
      await fetch(`http://localhost:3000/notes/${note.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': auth.token
        },
        body: JSON.stringify({
          title: note.title,
          content: note.content
        })
      });
    }
    catch (err) {
      console.log(err);
    }
  };

  const onUpdateNote = async (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    });
    setSelectedNote(updatedNote);
    setNotes(updatedNotesArr);
  };

  const onDeleteNote = async () => {
    if (!selectedNote || Object.keys(selectedNote).length === 0) return;
    await fetch(`http://localhost:3000/notes/${selectedNote.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth.token
      }
    });
    const newNotesArr = notes.filter((note) => note.id !== selectedNote.id);
    setNotes(newNotesArr);
    setSelectedNote(newNotesArr[0]);
  };

  return (
    <>
      <HeaderLeft
        onDeleteNote={onDeleteNote}
      />
      <SideBar
        notes={notes}
        handleSelectNote={handleSelectNote}
        selectedNote={selectedNote}/>
      <HeaderRight
        onAddNote={onAddNote}
        selectedNote={selectedNote}/>
      <Content
        selectedNote={selectedNote}
        onUpdateNote={onUpdateNote}/>
    </>
  );
}

export default App;
