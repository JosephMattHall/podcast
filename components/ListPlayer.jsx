import React from "react"
import { useState, useEffect, useRef } from "react"
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import IconButton from '@mui/material/IconButton'
import Popover from '@mui/material/Popover'
import VolumeUpIcon from "@mui/icons-material/VolumeUp"
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline"
import PauseCircleOutlineIcon from "@mui/icons-material/PauseCircleOutline"
import Slider from "@mui/material/Slider"


export default function ListPlayer  () {
  // Audio player using the html5 Audio functionality
  const [index, setIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [trackList, setTrackList] = useState([])
  const [volumeAnchorEl, setVolumeAnchorEl] = useState(null)
  const [volumeSliderPosition, setVolumeSliderPosition] = useState(100)
  const [playbackSliderPosition, setPlaybackSliderPosition] = useState(0)
  const [playbackAnchorEl, setPlaybackAnchorEl] = useState(null)

  const ref = useRef(new Audio(null))

  const isVolumeOpen = Boolean(anchorEl)
  const volumeId = isVolumeOpen ? 'volumeControllerPopover' : undefined

  const handleVolumeOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleVolumeClose = () => {
    setAnchorEl(null)
  }

  const handleVolumeSliderPositionChange = (event, newValue) => {
    setVolume(newValue)
  }
  
  function setVolume(newValue) {
    ref.current.volume = (newValue / 100.0)
  }

  const handlePlaybackSliderPositionChange = (event, newValue) => {
    seek(newValue)
  }

  function seek(position) {
    //let newPosition = audio.duration * (position / 100)
    //audio.currentTime = newPosition
    ref.current.currentTime = position
  }

  const onPlayClicked = () => {
    setIsPlaying(true)
  }

    const onPauseClicked = () => {
      setIsPlaying(false)
  }

  const handleTrackListItemClick = (event, trackIndex) => {
    setIndex(trackIndex)
  }

   useEffect(() => {
    if (ref.current) {
        return
    }
    ref.current = new Audio(trackList[index].src)
    setPlaybackSliderPosition(ref.current.currentTime)
  }, [])

useEffect(() => {
  const interval = setInterval(() => {
    setPlaybackSliderPosition(ref.current.currentTime)
    }, 300)
      return () => clearInterval(interval)
  }, [playbackSliderPosition]);


}