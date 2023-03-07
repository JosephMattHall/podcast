import React from "react";
import { useState, useEffect, useRef } from "react";
import Stack from "@mui/material/Stack";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from "@mui/material/IconButton";
import Popover from "@mui/material/Popover";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";

export default function Player({ trackList }) {
  const router = useRouter();
  const theme = useTheme();
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [volumePosition, setVolumePosition] = useState(100);
  const [duration, setDuration] = useState(0);
  const audio = useRef(null);
  const [title, setTitle] = useState("");

  const handleVolumeOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleVolumeClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "volumeController-popover" : undefined;

  const handleVolumePositionChange = (event, newValue) => {
    setVolumePosition(newValue);
    setVolume(newValue);
  };

  function setVolume(newValue) {
    audio.current.volume = newValue / 100.0;
  }

  const handlePlaybackPositionChange = (event, value) => {
    audio.current.currentTime = value;
  };

  const onPlayPause = () => {
    isPlaying ? onPause() : onPlay();
  };

  const onPlay = () => {
    setIsPlaying(true);
  };

  const onPause = () => {
    setIsPlaying(false);
  };

  const handleTrackListItemClick = (event, newIndex) => {
    let wasPlaying = isPlaying;
    audio.current.pause();
    setIsPlaying(false);
    setIndex(newIndex);
    setTitle(trackList[newIndex].title)
    audio.current = new Audio(trackList[newIndex].audio);
    audio.current.onloadeddata = () => {
      setDuration(audio.current.duration);

    };
    if (wasPlaying) {
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    audio.current = new Audio(trackList[index].audio);
    audio.current.onloadeddata = () => {
      setDuration(audio.current.duration);
  
    };
    setTitle(trackList[index].title)
  }, []);

  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      setIsPlaying(false);
      audio.current.pause();
      audio.current = new Audio(trackList[index].audio);
      audio.current.onloadeddata = () => {
        setDuration(audio.current.duration);
    
      };

      
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  }, [isPlaying, index]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSliderPosition(audio.current.currentTime);
    }, 300);
    return () => clearInterval(interval);
  }, [sliderPosition]);

  return (
    <div ref={audio}>
      <Container>
        <Container
          align="center"
          sx={{
            pt: 5,
          }}
        >
          <Typography variant="h5">
            <p>{title}</p>
          </Typography>
        </Container>
        <Stack direction="row" alignItems="center" spacing={1} sx={{pb: 2}}>
          <Box
          sx={{
              px: 2

            }}
          >
            <IconButton
            aria-describedby={id}
            veriant="contained"
              onClick={handleVolumeOpen}
            >
              <VolumeUpIcon />
            </IconButton>
            <Popover
            
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleVolumeClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
            <Box
            sx={{
              minWidth: 100,
              alignContent: "center",
              paddingLeft: 2,
              paddingRight: 2,
            }}
          >
              <Slider
                min={0}
                max={100}
                value={volumePosition}
                onChange={handleVolumePositionChange}
                color="error"
              />
              </Box>
            </Popover>
          </Box>
          <Box sx={{pt:1, width: "100%" }}>
            <Slider
              aria-label="Trackrogress"
              defaultValue={0}
              min={0}
              /* duration and sliderPosition can be NaN on initial page load */ 
              max={duration ? duration : 100}
              value={sliderPosition ? sliderPosition : 0}
              step={1}
              onChange={handlePlaybackPositionChange}
              color="error"
              size="large"
            />
          </Box>
          <Box
            sx={{
              px: 2

            }}
          >
            {isPlaying ? (
              <IconButton onClick={onPlayPause}>
                <PauseCircleOutlineIcon fontSize="large" />
              </IconButton>
            ) : (
              <IconButton onClick={onPlayPause}>
                <PlayCircleOutlineIcon fontSize="large" />
              </IconButton>
            )}
          </Box>
        </Stack>

        <List
          sx={{
            backgroundColor: theme.palette.secondary.main,
          }}
        >
        {trackList.map((track, x) => (
          <ListItemButton
          key={track.id}
            selected={index === x}
            onClick={(event) => handleTrackListItemClick(event, x)}
          >
            <ListItemText primary={track.title} />
          </ListItemButton>
        ))}
          
        </List>
      </Container>
    </div>
  );
}
