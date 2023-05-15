import { BsPencilSquare } from 'react-icons/bs';

const HeaderRight = ({ onAddNote }) => {
  return (
    <div className="header-right">
      <BsPencilSquare className="add-note-icon"
                      onClick={onAddNote}/>
    </div>
  );
};

export default HeaderRight;