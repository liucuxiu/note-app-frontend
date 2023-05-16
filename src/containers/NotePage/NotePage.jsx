import { useEffect, useState } from 'react';
import * as NoteAPI from '../../services/NoteAPI';
import { fetchNoteById } from '../../services/NoteAPI';
import HeaderLeft from '../../components/Header/HeaderLeft';
import SideBar from '../../components/SideBar/SideBar';
import HeaderRight from '../../components/Header/HeaderRight';
import Content from '../../components/Content/Content';

const NotePage = () => {

  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    fetchNotes().then(() => {
    });

    fetchNotes().catch(console.error);
  }, []);

  useEffect(() => {
    const autoSaveTimer = setTimeout(() => {
      saveNote(selectedNote);
    }, 5000); // Auto-save every 5 seconds

    return () => clearTimeout(autoSaveTimer);
  }, [selectedNote]);

  const fetchNotes = async () => {
    try {
      const data = await NoteAPI.fetchNotes();
      setNotes(data);
    }
    catch {
      setNotes([])
      console.log('Error fetching notes');
    }
  };

  const handleSelectNote = async (note) => {
    setIsSaving(true)
    if (Object.keys(selectedNote).length !== 0) {
      await saveNote(selectedNote);
    }
    const data = await fetchNoteById(note.id);
    setSelectedNote(data);
  };

  const onAddNote = async () => {
    if (selectedNote && Object.keys(selectedNote).length !== 0) {
      await saveNote(selectedNote);
    }

    const newNote = await NoteAPI.createNote({
      title: 'untitled',
      content: 'untitled'
    });
    setNotes([newNote, ...notes]);
    setSelectedNote(newNote);
  };

  const saveNote = async (note) => {
    if (!note || Object.keys(note).length === 0 || !isSaving) return;

    await NoteAPI.updateNoteById(note);

    setIsSaving(false);
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

    await NoteAPI.deleteNoteById(selectedNote.id);

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
        onSave={setIsSaving}
        selectedNote={selectedNote}
        onUpdateNote={onUpdateNote}/>
    </>
  );
}

export default NotePage;