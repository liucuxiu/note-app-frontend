const Content = ({ selectedNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...selectedNote,
      [field]: value
    });
  };
  if (!selectedNote) {
    return <div className="content">
    </div>;
  }

  return (
    <>
      <main className="content">
        <div className="app-main-updated">
          <small>{selectedNote.updatedAt}</small>
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