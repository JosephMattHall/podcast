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



export default function Player({track}) {

    const audioRef = useRef(new Audio(track.src));
    const audio = audioRef.current;

    const [isPlaying, setIsPlaying] = useState(false);
    const [sliderPosition, setSliderPosition] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [volumePosition, setVolumePosition] = useState(100);

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
        audio.volume = (newValue / 100.0);
    }

    const handlePlaybackPositionChange = (event, newValue) => {
        seek(newValue)
      };

    function seek(position) {
        //let newPosition = audio.duration * (position / 100);
        //audio.currentTime = newPosition;
        audio.currentTime = position;

    }
    const onPlayPause = () => {
        isPlaying ? onPause() : onPlay();

    }

    const onPlay = () => {
        audio.play();
        setIsPlaying(true);
    }

    const onPause = () => {
        audio.pause();
        setIsPlaying(false);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSliderPosition(audio.currentTime);

        }, 300);
        return () => clearInterval(interval);
    }, [sliderPosition, volumePosition, audio]);


    return(
        <Card sx={{ display: "auto" }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Stack>
                    <CardContent>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            m: 0
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
                                max={audio.duration}
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
                    </CardContent>
                </Stack>
            </Box>
        </Card>
    )


}