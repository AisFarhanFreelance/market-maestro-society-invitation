"use client";

import { CirclePause, Music2 } from "lucide-react";
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
        className="fixed right-2 bottom-50 z-50 cursor-pointer"
        onClick={togglePlay}
      >
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-[#2E4366] bg-white text-[#2E4366]">
          {isPlaying ? (
            <Music2
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
