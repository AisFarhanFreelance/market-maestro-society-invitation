"use client";

import { CirclePause, Music } from "lucide-react";
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
        className="fixed bottom-20 z-50 ml-8 cursor-pointer"
        onClick={togglePlay}
      >
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-[#F05625] bg-white text-[#F05625]">
          {isPlaying ? (
            <div
              className="animate-spin rounded-sm border border-solid border-[#F05625] p-0.5 text-[#F05625]"
              style={{ animationDuration: "6s" }}
            >
              <Music size={12} />
            </div>
          ) : (
            <CirclePause />
          )}
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;
