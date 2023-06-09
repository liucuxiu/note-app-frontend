import { BsTrash3 } from 'react-icons/bs';

const HeaderLeft = ({ onDeleteNote }) => {

  return (
    <div className="header-left">
      <BsTrash3 onClick={onDeleteNote} className="delete-note-icon"/>
    </div>
  );
};

export default HeaderLeft;