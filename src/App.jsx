import { useState } from "react";
import Player from "./components/Player";
import { audios } from "./audiodata";
import "./App.css";

function App() {
  const songs = audios;
  const [currentsong, setcurrentsong] = useState(songs[0]);
  const [currentindex, setcurrentindex] = useState(null);
  return (
    <>
      <Player
        currentSong={currentSong}
        currentIndex={currentIndex}
        nextSong={nextSong}
        prevSong={prevSong}
      />
    </>
  );
}

export default App;
