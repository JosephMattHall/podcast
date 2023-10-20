import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { MoreVert } from '@mui/icons-material';
import * as Icons from './Icons'; // Import all the icons from the Icons.jsx file

const defaultPlatforms = [
  { name: 'Spotify', url: 'https://www.spotify.com/', icon: <Icons.SpotifyIcon /> },
  { name: 'Apple Podcasts', url: 'https://www.apple.com/apple-podcasts/', icon: <Icons.ApplePodcastsIcon /> },
  // ... (add other default platforms)
];

const FindUs = ({ platforms = defaultPlatforms }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Stack spacing={1} direction="row">
        {platforms.slice(0, 10).map((platform) => (
          <IconButton
            key={platform.name}
            aria-describedby={id}
            onClick={() => window.open(platform.url, '_blank')}
            onMouseEnter={() => console.log(platform.name)} // Replace with logic to announce platform name
          >
            {platform.icon}
          </IconButton>
        ))}
        <IconButton aria-describedby={id} onClick={handleClick}>
          <MoreVert />
        </IconButton>
      </Stack>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Stack spacing={1}>
          {platforms.map((platform) => (
            <Typography key={platform.name} onClick={() => window.open(platform.url, '_blank')}>
              {platform.icon} {platform.name}
            </Typography>
          ))}
        </Stack>
      </Popover>
    </div>
  );
};

export default FindUs;
