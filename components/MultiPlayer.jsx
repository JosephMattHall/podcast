import React from "react";
import { useState, useEffect, useRef } from "react";
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline";
import Slider from "@mui/material/Slider";

export default function MultiPlayer ({trackList}) {
    // state stuff
    const [index, setIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volumeAnchorEl, setVolumeAnchorEl] = useState(null);
    const [volumeSliderPosition, setVolumeSliderPosition] = useState(100);
    const [playbackSliderPosition, setPlaybackSliderPosition] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [duration, setDuration] = useState(0);
    
    const ref = useRef(null);

    const isVolumeOpen = Boolean(anchorEl);
    const volumeId = isVolumeOpen ? 'volumeController-popover' : undefined;

    const handleVolumeOpen = (event) => {
        setVolumeAnchorEl(event.currentTarget);
    };

    const handleVolumeClose = () => {
        setVolumeAnchorEl(null);
    };

    const handleVolumeSliderPositionChange = (event, newValue) => {
        
        ref.current.volume = (newValue / 100.0);
        
      };

    // playback/progress slider stuff
    const handlePlaybackSliderPositionChange = (event, newValue) => {
        ref.current.currentTime = newValue;
      };

    // player controls management section
    const onPlayClicked = () => {
        setIsPlaying(true);
    };

    const onPauseClicked = () => {
        setIsPlaying(false);
    };

    const toPrevTrack = () => {
        if (index - 1 < 0) {
            setTrackIndex(trackList.length - 1);
        } else {
            setTrackIndex(index - 1);
        }
    };
        
    const toNextTrack = () => {
        if (index < trackList.length - 1) {
            setTrackIndex(index + 1);
        } else {
            setTrackIndex(0);
        }
    };

    // track list stuff
    const handleTrackListItemClick = (event, index) => {

        setIndex(index);
        
      };
    // a basic useEffect hook to periodically update playbackSliderPosition according to currentTrack.currentTime
    
    
    useEffect(() => {
        if (ref.current) {
            return
        } else {
        ref.current = new Audio(trackList[index].src);
        setDuration(ref.current.duration);
        }

      }, []);
    useEffect(() => {
    ref.current.pause();
    ref.current = new Audio(trackList[index].src);
    
    setIsPlaying(false);
    setPlaybackSliderPosition(ref.current.currentTime);
    
    },[index]);
    useEffect(() => {
    if (isPlaying) {
        setDuration(ref.current.duration);
        ref.current.play();
    } else {
        ref.current.pause();
    }
    }, [isPlaying]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setPlaybackSliderPosition(ref.current.currentTime);

        }, 300);
        return () => clearInterval(interval);
    }, [playbackSliderPosition]);

    return (
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
                            aria-describedby={volumeId}
                            veriant="contained"
                            onClick={handleVolumeOpen}    
                        >
                            <VolumeUpIcon />
                        </IconButton>
                        <Popover
                            id={volumeId}
                            open={isVolumeOpen}
                            anchorEl={volumeAnchorEl}
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
                                    value={volumeSliderPosition}
                                    onChange={handleVolumeSliderPositionChange}
                                    color="error"
                                />
                            </Box>
                        </Popover>
                        <Slider
                            aria-label="Trackrogress"
                            defaultValue={0}
                            min={0}
                            max={duration}
                            value={playbackSliderPosition}
                            step={1}
                            onChange={handlePlaybackSliderPositionChange}
                            color="error"
                            size="small"
                            sx={{
                            pt: 5
                            }}
                        />
                        {isPlaying ? (
                        <IconButton
                            onClick={onPauseClicked}
                        >
                            <PauseCircleOutlineIcon fontSize="large" />
                        </IconButton>
                        ) : (
                        <IconButton
                            onClick={onPlayClicked}
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
    )
}