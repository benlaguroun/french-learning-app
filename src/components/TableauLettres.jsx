import React, { useState } from "react";
import "./TableauLettres.css";

const letters = [
  { letter: "A", audio: "/audio/lettres/a.mp3" },
  { letter: "B", audio: "/audio/lettres/b.mp3" },
  { letter: "C", audio: "/audio/lettres/c.mp3" },
  { letter: "D", audio: "/audio/lettres/d.mp3" },
  { letter: "E", audio: "/audio/lettres/e.mp3" },
  { letter: "F", audio: "/audio/lettres/f.mp3" },
  { letter: "G", audio: "/audio/lettres/g.mp3" },
  { letter: "H", audio: "/audio/lettres/h.mp3" },
  { letter: "I", audio: "/audio/lettres/i.mp3" },
  { letter: "J", audio: "/audio/lettres/j.mp3" },
  { letter: "k", audio: "/audio/lettres/k.mp3" },
  { letter: "L", audio: "/audio/lettres/l.mp3" },
  { letter: "M", audio: "/audio/lettres/m.mp3" },
  { letter: "N", audio: "/audio/lettres/n.mp3" },
  { letter: "O", audio: "/audio/lettres/o.mp3" },
  { letter: "P", audio: "/audio/lettres/p.mp3" },
  { letter: "Q", audio: "/audio/lettres/q.mp3" },
  { letter: "R", audio: "/audio/lettres/r.mp3" },
  { letter: "S", audio: "/audio/lettres/s.mp3" },
  { letter: "T", audio: "/audio/lettres/t.mp3" },
  { letter: "U", audio: "/audio/lettres/u.mp3" },
  { letter: "V", audio: "/audio/lettres/v.mp3" },
  { letter: "W", audio: "/audio/lettres/w.mp3" },
  { letter: "X", audio: "/audio/lettres/x.mp3" },
  { letter: "Y", audio: "/audio/lettres/y.mp3" },
  { letter: "Z", audio: "/audio/lettres/z.mp3" },
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
