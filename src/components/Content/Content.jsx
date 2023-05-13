const Content = ({ selectedNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...selectedNote,
      [field]: value,
      lastUpdatedAt: Date.now()
    });
  };
  if (!selectedNote) {
    return <div className="content">No active note</div>;
  }

  return (
    <>
      <main className="content">
        <div className="app-main-note-edit">
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