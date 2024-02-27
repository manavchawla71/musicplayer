import { useState } from "react";
import Player from "./components/Player";
import { audios } from "./audiodata";
import "./App.css";

function App() {
  const songs = audios;
  const [currentsong, setcurrentsong] = useState(songs[0]);
  const [currentindex, setcurrentindex] = useState(null);
  const nextSong = () => {
    if (currentindex + 1 < audios.length) {
      setcurrentindex(currentindex + 1);
      setcurrentsong(audios[currentindex + 1]);
    }
  };
  const prevSong = () => {
    if (currentindex > 0) {
      setcurrentindex(currentindex - 1);
      setcurrentsong(audios[currentindex - 1]);
    }
  };
  return (
    <div className="player-main">
      <Player
        currentsong={currentsong}
        currentindex={currentindex}
        nextSong={nextSong}
        prevSong={prevSong}
      />
    </div>
  );
}

export default App;
