import React from "react";
import { useState, useEffect, useRef } from "react";
import Stack from "@mui/material/Stack";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Container from "@mui/material/Container"
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function Player({trackList}) {

    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [volumePosition, setVolumePosition] = useState(100);
    const [duration, setDuration] = useState(0);
    const audio = useRef(null);


    const handleVolumeOpen = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleVolumeClose = () => {
        setAnchorEl(null);
    }

    const open = Boolean(anchorEl);
    const id = open ? 'volumeController-popover' : undefined;

    const handleVolumePositionChange = (event, newValue) => {
        setVolumePosition(newValue);
        setVolume(newValue);
        
      };

    function setVolume(newValue) {
        
        audio.current.volume = (newValue / 100.0);
    }

    const handlePlaybackPositionChange = (event, value) => {

        audio.current.currentTime = value;
      };

    const onPlayPause = () => {
        isPlaying ? onPause() : onPlay();

    }

    const onPlay = () => {
        audio.current.play();
        setIsPlaying(true);
    }

    const onPause = () => {
        audio.current.pause();
        setIsPlaying(false);
    }

    const handleTrackListItemClick = (event, newIndex) => {
        audio.current.pause();
        setIsPlaying(false);
        setIndex(newIndex);

        audio.current = new Audio(trackList[index].src);
        setDuration(audio.current.duration);
      };

    useEffect(() => {
        audio.current = new Audio(trackList[index].src);
        setDuration(audio.current.duration);
        
      }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setSliderPosition(audio.current.currentTime);

        }, 300);
         return () => clearInterval(interval);
    }, [sliderPosition]);


    return (
        <div ref={audio}>
        <Container>
            <Stack>
                <CardContent>
                    <Box
                        sx={{justifyContent: "center"}}
                    >
                        <Typography component="div" variant="h5">
                            <p>title placeholder</p>
                        </Typography>
                    </Box>
                    <Stack direction="row" spacing={2}>
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
                            max={duration.value}
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
                            onClick={onPause}
                        >
                            <PauseCircleOutlineIcon fontSize="large" />
                        </IconButton>
                        ) : (
                        <IconButton
                            onClick={onPlay}
                        >
                            <PlayCircleOutlineIcon fontSize="large" />
                        </IconButton>
                        )}
                    </Stack>
                </CardContent>
            </Stack>
            <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <ListItemButton
                    selected={index === 0}
                    onClick={(event) => handleTrackListItemClick(event, 0)}
                >
                    <ListItemText primary={trackList[0].title} />
                </ListItemButton>
                <ListItemButton
                    selected={index === 1}
                    onClick={(event) => handleTrackListItemClick(event, 1)}
                >
                    <ListItemText primary={trackList[1].title} />
                </ListItemButton>
                <ListItemButton
                    selected={index === 2}
                    onClick={(event) => handleTrackListItemClick(event, 2)}
                >
                    <ListItemText primary={trackList[2].title} />
                </ListItemButton>
            </List>
        </Container>
        </div>
    )
}