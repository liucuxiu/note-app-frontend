import { formatDate } from '../../utils/formateDate';
import { useState } from 'react';

const Content = ({ selectedNote, onUpdateNote }) => {
  const [createdTimeShow, setCreatedTimeShow] = useState(false)
  const handleChangeTime = () => {
    console.log('handleChangeTime')
    setCreatedTimeShow(!createdTimeShow)
  }

  const onEditField = (field, value) => {
    onUpdateNote({
      ...selectedNote,
      [field]: value
    });
  };
  if (!selectedNote || Object.keys(selectedNote).length === 0) {
    return <div className="content"/>;
  }

  return (
    <>
      <main className="content">
        <div className="app-main-updated">
          {createdTimeShow && <small onClick={handleChangeTime}>Created: {formatDate(selectedNote.createdAt)}</small> }
          {!createdTimeShow && <small onClick={handleChangeTime}>Edited: {formatDate(selectedNote.updatedAt)}</small> }
        </div>
        <div className="app-main-note-edit">
          <input
            id="title"
            name="title"
            value={selectedNote.title}
            onChange={(e) => onEditField('title', e.target.value)}/>
          <textarea
            id="content"
            name="content"
            value={selectedNote.content}
            onChange={(e) => onEditField('content', e.target.value)}/>
        </div>

      </main>
    </>

  );
};

export default Content;