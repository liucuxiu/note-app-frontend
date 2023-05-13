const HeaderRight = ({ onAddNote }) => {
  return (
    <div className="header-right">
      <button onClick={onAddNote}>add note</button>
    </div>
  )
}

export default HeaderRight