"use client";

import { CirclePause, Disc3 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.5;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));

      audio.loop = true;
    }
  }, [audioRef]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio
        src="/assets/music/Gillian-Hills-Zou-Bisou-Bisou-(Paroles-Lyrics)-TikTok-Song.mp3"
        ref={audioRef}
        loop
      />
      <div
        className="fixed right-2 bottom-3 z-50 cursor-pointer"
        onClick={togglePlay}
      >
        <div className="relative text-white">
          {isPlaying ? (
            <Disc3
              className="animate-spin"
              style={{ animationDuration: "6s" }}
            />
          ) : (
            <CirclePause />
          )}
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
