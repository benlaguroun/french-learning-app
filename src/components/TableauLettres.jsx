import React, { useState } from "react";
import "./TableauLettres.css";

const letters = [
  { letter: "A", audio: "/audio/a.mp3" },
  { letter: "B", audio: "/audio/b.mp3" },
  { letter: "C", audio: "/audio/c.mp3" },
  { letter: "D", audio: "/audio/d.mp3" },
  { letter: "E", audio: "/audio/e.mp3" },
  { letter: "F", audio: "/audio/f.mp3" },
  { letter: "G", audio: "/audio/g.mp3" },
  { letter: "H", audio: "/audio/h.mp3" },
  { letter: "I", audio: "/audio/i.mp3" },
  { letter: "J", audio: "/audio/j.mp3" },
  { letter: "k", audio: "/audio/k.mp3" },
  { letter: "L", audio: "/audio/l.mp3" },
  { letter: "M", audio: "/audio/m.mp3" },
  { letter: "N", audio: "/audio/n.mp3" },
  { letter: "O", audio: "/audio/o.mp3" },
  { letter: "P", audio: "/audio/p.mp3" },
  { letter: "Q", audio: "/audio/q.mp3" },
  { letter: "R", audio: "/audio/r.mp3" },
  { letter: "S", audio: "/audio/s.mp3" },
  { letter: "T", audio: "/audio/t.mp3" },
  { letter: "U", audio: "/audio/u.mp3" },
  { letter: "V", audio: "/audio/v.mp3" },
  { letter: "W", audio: "/audio/w.mp3" },
  { letter: "X", audio: "/audio/x.mp3" },
  { letter: "Y", audio: "/audio/y.mp3" },
  { letter: "Z", audio: "/audio/z.mp3" },
  // Add more letters with their audio paths
];

const TableauLettres = () => {
  const [playingIndex, setPlayingIndex] = useState(null);
  const [audio, setAudio] = useState(null);

  const handleAudioControl = (audioPath, index) => {
    // Stop the current audio if one is playing
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setAudio(null);
      setPlayingIndex(null);

      // If the same card is clicked again, stop the audio and return
      if (playingIndex === index) return;
    }

    // Play the new audio
    const newAudio = new Audio(audioPath);
    newAudio.play();
    setAudio(newAudio);
    setPlayingIndex(index);

    // Reset state when audio ends
    newAudio.onended = () => {
      setAudio(null);
      setPlayingIndex(null);
    };
  };

  return (
    <div className="tableau-lettres">
      <h2>Tableau des Lettres</h2>
      <div className="letter-cards">
        {letters.map((item, index) => (
          <div
            key={index}
            className={`letter-card ${playingIndex === index ? "active" : ""}`}
          >
            <div className="letter">
              <h3>{item.letter}</h3>
            </div>
            <button
              className="audio-button"
              onClick={() => handleAudioControl(item.audio, index)}
            >
              {playingIndex === index ? "Stop" : "Play"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableauLettres;
