import { useState } from "react";
import { useRef } from "react";

export default function Player() {
  const playerRef = useRef();
  const [playerName, setPlayerName] = useState(null);

  function handleClick() {
    const name = playerRef.current.value;
    setPlayerName(name);
    playerRef.current.value = '';
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknow entity"}</h2>
      <p>
        <input type="text" ref={playerRef}/>
        <button onClick={(e) => handleClick()}>Set Name</button>
      </p>
    </section>
  );
}
