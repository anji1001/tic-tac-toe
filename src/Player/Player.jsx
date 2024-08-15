import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setName] = useState(name);
  function handleEdit() {
    setIsEditing((editing) => !editing);
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {!isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input type="text" value={playerName} onChange={handleNameChange} />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEdit}>{!isEditing ? "Edit" : "Save"}</button>
    </li>
  );
}
