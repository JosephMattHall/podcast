
import { useState, useEffect, useRef  } from "react";
import { useRouter } from 'next/router'
import Stack from "@mui/material/Stack";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';

import { useTheme } from "@mui/material/styles";

export default function Player({track}) {


    const router = useRouter();
    const theme = useTheme();

    const [error, setError] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [volumePosition, setVolumePosition] = useState(100);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(null);


    const handleVolumeClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleVolumeClose = () => {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'volumeController-popover' : undefined;

    const handleVolumePositionChange = (event, newValue) => {
        setVolumePosition(newValue)
        setVolume(newValue);
        
      };

    function setVolume(newValue) {
        audioRef.current.volume = (newValue / 100.0);
    }

    const handlePlaybackPositionChange = (event, newValue) => {
        audioRef.current.currentTime = newValue;
      };

    const onPlayPause = () => {
      isPlaying ? onPause() : onPlay();
    }

    const onPlay = () => {
      setIsPlaying(true);
      audioRef.current.play();
    }

    const onPause = () => {
      setIsPlaying(false);
      audioRef.current.pause();
    }

    useEffect(() => {
      audioRef.current = new Audio(track.src);
      audioRef.current.onloadeddata = () => {
          setDuration(audioRef.current.duration);
      }
    }, []);

    useEffect(() => {
      const handleRouteChange = (url, { shallow }) => {
        setIsPlaying(false);
        audioRef.current.pause();
      }
  
      router.events.on('routeChangeStart', handleRouteChange)
  
      // If the component is unmounted, unsubscribe
      // from the event with the `off` method:
      return () => {
        router.events.off('routeChangeStart', handleRouteChange)
      }
    }, [])
    
    useEffect(() => {
      const interval = setInterval(() => {
        setSliderPosition(audioRef.current.currentTime);
      }, 300);
      return () => clearInterval(interval);
    }, [sliderPosition]);

    return (

      <div ref={audioRef}>
        <Box
            align="center"
            justifyContent="center"
            sx={{
                //pt:3
            }}
          >
            <Typography component="div" variant="h5">
                {track.title}
            </Typography>
            </Box>
        <Stack direction="row" spacing={2}>
        <IconButton
          aria-describedby={id}
          veriant="contained"
          onClick={handleVolumeClick}    
        >
          <VolumeUpIcon />
        </IconButton>
            
          <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleVolumeClose}
              anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
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
          <Slider
            aria-label="Trackrogress"
            defaultValue={0}
            min={0}
            max={150}
            value={sliderPosition}
            step={1}
            onChange={handlePlaybackPositionChange}
            color="error"
            size="small"
            sx={{
            pt: 5
            }}
          />
          {isPlaying ? (
          <IconButton
            onClick={onPlayPause}
          >
            <PauseCircleOutlineIcon fontSize="large" />
          </IconButton>
          ) : (
          <IconButton
            onClick={onPlayPause}
          >
            <PlayCircleOutlineIcon fontSize="large" />
          </IconButton>
            )}
        </Stack>
      </div>

        
    )
        }
