import React, { useEffect, useState, useRef } from "react";
import { Box, Typography, Slider, IconButton } from "@mui/material";
import { PlayArrow, Pause } from "@mui/icons-material";

function AudioPlayer({ src }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const handleLoadedData = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    setCurrentTime(e.target.value);
  };

  useEffect(() => {
    audioRef.current.play();
    setIsPlaying(true);
  }, [src]);

  useEffect(() => {
    if (isPlaying && currentTime === duration) {
      setIsPlaying(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTime]);

  return (
    <Box
      sx={{
        background: "#1976d20a",
        marginBlock: "10px",
        padding: "15px 20px",
        borderRadius: "10px",
      }}
    >
      <Slider
        min={0}
        max={duration}
        value={currentTime}
        onChange={handleSeek}
      />
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
      />

      <Box
        className="track-duration"
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        <Typography>{currentTime.toFixed(2)}</Typography>
        <Typography>{duration.toFixed(2)}</Typography>
      </Box>

      <Box
        className="track-duration"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <IconButton
          onClick={handlePlayPause}
          aria-label="handle-play-pause"
          color="primary"
        >
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>
      </Box>
    </Box>
  );
}

export default AudioPlayer;
