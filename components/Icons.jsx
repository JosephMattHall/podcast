import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

// Spotify Icon
export function SpotifyIcon() {
  return (
    <SvgIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="#2EBD59"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path d="M1539.928 1369.145c-809.356 0-1465.5 656.126-1465.5 1465.482 0 809.443 656.144 1465.535 1465.5 1465.535 809.392 0 1465.5-656.091 1465.5-1465.535 0-809.304-656.074-1465.412-1465.518-1465.412l.018-.07zm672.069 2113.646c-26.32 43.173-82.565 56.7-125.598 30.397-344.137-210.332-777.297-257.845-1287.421-141.312-49.157 11.271-98.157-19.547-109.356-68.688-11.253-49.157 19.424-98.157 68.704-109.356 558.249-127.628 1037.101-72.695 1423.378 163.344 43.05 26.426 56.699 82.601 30.275 125.65l.018-.035zm179.374-398.981c-33.145 53.777-103.46 70.647-157.167 37.624-393.837-242.094-994.384-312.217-1460.32-170.781-60.428 18.252-124.25-15.803-142.59-76.125-18.2-60.428 15.873-124.128 76.195-142.503 532.227-161.489 1193.865-83.265 1646.239 194.723 43.05 26.426 56.699 82.601 30.275 125.65l.018-.017zm15.4-415.52c-472.395-280.542-1251.599-306.337-1702.556-169.47-72.414 21.962-148.994-18.918-170.939-91.333-21.945-72.449 18.9-148.977 91.367-170.992 517.667-157.149 1378.229-126.787 1922.022 196.035 65.135 38.657 86.503 122.779 47.897 187.827-38.5 65.135-122.85 86.607-187.774 47.933h-.017zM4061.569 2722.05c-253.033-60.34-298.078-102.689-298.078-191.678 0-84.069 79.152-140.646 196.857-140.646 114.1 0 227.237 42.962 345.852 131.407 3.588 2.678 8.086 3.744 12.513 3.045 4.428-.665 8.348-3.098 10.938-6.755l123.55-174.16c5.075-7.175 3.692-17.062-3.15-22.54-141.172-113.277-300.142-168.35-485.956-168.35-273.21 0-464.047 163.957-464.047 394.982 0 180.763 124.512 280.685 282.16 325.597 133.696 38.23 270.544 50.86 364.924 29.62 5.176-2.704 9.56-8.173 12.12-15.272l117.988-315.53c4.428-11.742 1.536-25.01-7.488-33.832l-.07-.076c-8.985-8.61-22.895-11.732-34.962-7.428l-132.952 38.99c-12.06 3.528-21.148 14.632-21.148 28.62 0 19.964 17.526 34.587 39.092 34.587 20.46 0 37.23-15.253 37.23-34.587 0-15.557-7.218-26.17-20.548-31.235l100.97-29.18c28.578-8.52 47.98-32.918 47.98-63.17 0-35.005-31.386-58.754-75.383-58.754-53.227 0-111.55 33.322-142.936 87.802-6.17 10.168-14.16 32.606-15.14 34.858l-24.474 62.366c-5.646 14.425-1.18 31.493 11.698 39.346 12.635 7.854 30.47 7.536 41.117-0.59l54.38-46.744c3.73-3.2 8.526-4.586 13.05-3.77 4.54 .81 8.496 3.263 11.047 6.836l1.76 2.608 59.154 136.464c6.1 13.344 23.284 20.58 37.632 14.48 14.345-6.1 20.578-23.285 14.477-37.632l-39.787-86.864c14.34-7.97 30.3-15.282 46.55-21.97 24.836-10.128 47.674-19.476 68.207-27.972 36.832-18.844 68.304-35.124 110.264-43.573 4.228-11.684 1.845-25.336-7.405-33.305l-.06-.057c-8.986-8.55-22.896-11.74-34.953-7.47l-99.188 29.107c-12.06 3.53-21.16 14.695-21.16 28.683 0 19.964 17.525 34.586 39.092 34.586 20.462 0 37.236-15.253 37.236-34.586 0-15.556-7.22-26.17-20.55-31.234l123.467-35.9c28.575-8.525 47.97-32.93 47.97-63.18 0-35.006-31.39-58.76-75.392-58.76-53.227 0-111.548 33.32-142.933 87.803-6.172 10.17-14.162 32.606-15.144 34.858l-24.47 62.367c-5.648 14.425-1.182 31.493 11.698 39.346 12.634 7.853 30.47 7.535 41.118-0.592l54.382-46.743c3.732-3.198 8.527-4.585 13.052-3.768 4.545 .814 8.497 3.263 11.05 6.836l1.76 2.608 59.155 136.464c6.1 13.344 23.285 20.58 37.633 14.48 14.344-6.1 20.577-23.285 14.476-37.632l-39.786-86.865c14.34-7.97 30.3-15.28 46.55-21.97 24.838-10.128 47.676-19.476 68.206-27.972 36.832-18.844 68.303-35.125 110.264-43.573 4.227-11.684 1.843-25.335-7.407-33.305l-.058-.057z" />
      </svg>
    </SvgIcon>
  );
}
// iTunes Icon
export function ItunesIcon() {
  return (
    <SvgIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM8 5.74v12.52c0 .2.07.4.2.54.13.14.32.22.5.22.18 0 .36-.08.5-.22 3.26-3.55 8.43-3.55 11.7 0 .14.14.34.22.53.22.2 0 .36-.07.5-.2.14-.13.22-.32.22-.5s-.08-.37-.22-.5C18.57 8.07 14.29 5.74 12 5.74zm-.36 11.62V6.64c0-.18.06-.37.18-.52.13-.15.3-.23.48-.23.18 0 .36.08.5.22 3.76 4.1 9.24 4.1 13 0 .14-.14.34-.22.53-.22.2 0 .37.07.5.2.13.13.2.32.2.5s-.07.36-.2.5c-3.97 4.32-10.3 4.32-14.27 0z" />
      </svg>
    </SvgIcon>
  );
}
// Pocket Casts Icon
export function PocketCastsIcon() {
  return (
    <SvgIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1.42-5.1l-3.54-1.27V9.36l3.54-1.27v5.73zm6.86 1.26l-2.3-1.29V9.36l2.3-1.29v7.31z" />
      </svg>
    </SvgIcon>
  );
}
// Google Podcasts Icon
export function GooglePodcastsIcon() {
  return (
    <SvgIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.17 3.3l1.18 1.11c.26.25.68.25.94 0l4.57-4.58c.26-.25.26-.67 0-.93l-1.19-1.12L10.8 9.38l-1.18-1.08L7.47 6.68c-.26-.25-.68-.25-.94 0l-1.2 1.12c-.25.26-.25.68 0 .94l3.12 2.88v5.02l-1.18-1.08V9.36l-.3-.27-2.8 2.8c-.26.25-.68.25-.93 0L4.68 9.35c-.26-.26-.26-.68 0-.94L10 2.5c.26-.25.68-.25.93 0l4.57 4.57c.25.25.25.67 0 .93L10.83 9.3l-1.18-1.08L6.48 6.68c-.25-.25-.68-.25-.93 0L4.35 7.8c-.26.25-.26.68 0 .94l3.1 2.85 4.57-4.56c.26-.25.68-.25.93 0z" />
      </svg>
    </SvgIcon>
  );
}
// Castbox Icon
export function CastboxIcon() {
  return (
    <SvgIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.42 14.15l-3.53-1.26V9.37l3.53-1.26v7.03zM19.65 6.03c-3.76-1.38-7.5-.32-11.19.86-3.68 1.17-7.3 2.7-10.99 3.64C1.11 11.7.9 12.06.79 12.5c-.14.51-.07 1.06.22 1.53s.69.79 1.22.95c.18.06.37.1.57.1.42 0 .83-.18 1.12-.5 3.38-2.71 6.86-5.37 10.24-8.08.47-.38.99-.67 1.53-.85.61-.2 1.24-.28 1.86-.23.43.03.85.12 1.25.26.37.14.72.33 1.03.57.6.47 1.07 1.07 1.38 1.74.27.6.42 1.26.42 1.92 0 .37-.06.74-.17 1.1zM14.33 18.44c-2.78 1.12-5.5.64-8.18-.47-.2-.06-.41-.1-.62-.1-.3 0-.6.1-.86.28-1.86 1.06-3.74 2.12-5.59 3.15-.38.21-.8.36-1.22.44-.44.09-.9.07-1.34-.07a1.53 1.53 0 0 1-1.14-1.8 1.55 1.55 0 0 1 1.8-1.15c.5.09 1.01.16 1.51.12.22-.02.43-.06.63-.14.29-.11.56-.27.79-.49a18.72 18.72 0 0 0 1.55-1.47c.24-.26.48-.52.72-.77.2-.23.41-.45.62-.64.16-.14.32-.25.5-.34a.43.43 0 0 1 .38.02.45.45 0 0 1 .22.4c-.02.68-.05 1.05-.11 1.44l-.22 1.16c-.23 1.2-.35 1.97-.52 2.59a21.26 21.26 0 0 1-.6 1.73c-.11.27-.24.53-.38.77a1.53 1.53 0 0 1-1.8.53 1.55 1.55 0 0 1-.53-1.8c.14-.45.28-.94.43-1.46.15-.53.3-1.08.46-1.64a9.6 9.6 0 0 1 .57-1.78c.1-.24.21-.47.32-.7.22-.48.44-.96.65-1.42.26-.59.5-1.13.78-1.61.17-.29.34-.56.53-.8.42-.51.87-1.06 1.35-1.62.47-.55.96-1.09 1.48-1.63.55-.57 1.14-1.11 1.76-1.64.34-.3.68-.57 1.04-.82.16-.12.33-.24.49-.36.29-.22.59-.4.9-.54.26-.11.52-.2.79-.26.35-.08.7-.11 1.05-.11 1.57 0 3.16.66 4.79 2.01a1.5 1.5 0 0 1 .39 2.08 1.52 1.52 0 0 1-2.08.39z" />
      </svg>
    </SvgIcon>
  );
}
// Podbean Icon
export function PodbeanIcon() {
  return (
    <SvgIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM8 5.74v12.52c0 .2.07.4.2.54.13.14.32.22.5.22.18 0 .36-.08.5-.22 3.26-3.55 8.43-3.55 11.7 0 .14.14.34.22.53.22.2 0 .36-.07.5-.2.14-.13.22-.32.22-.5s-.08-.37-.22-.5C18.57 8.07 14.29 5.74 12 5.74zm-.36 11.62l-3.54-1.27V9.36l3.54-1.27v5.73zm6.86 1.26l-2.3-1.29V9.36l2.3-1.29v7.31z" />
      </svg>
    </SvgIcon>
  );
}
// Apple Podcasts Icon
export function ApplePodcastsIcon() {
  return (
    <SvgIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM15.55 8.81c0-1.59-.47-2.88-1.4-3.89s-2.19-1.47-3.78-1.47c-.59 0-1.18.1-1.78.29-.1.03-.23.08-.38.16s-.27.14-.42.14c-.25 0-.46-.09-.63-.27-.17-.18-.26-.4-.26-.66s.05-.47.16-.65c.1-.18.24-.31.42-.4.18-.09.4-.14.65-.14.25 0 .46.05.63.14.17.09.3.22.4.4.1.18.15.39.15.63h1.68c-.02-.42-.11-.78-.26-1.08s-.34-.51-.6-.71c-.25-.2-.54-.35-.88-.45-.34-.1-.71-.15-1.1-.15-.78 0-1.51.28-2.17.84-.67.56-1.19 1.29-1.57 2.19-.38.91-.57 1.89-.57 2.94 0 1.06.2 2.04.6 2.94.4 .9.92 1.63 1.57 2.19.66.56 1.39.84 2.17.84 1.06 0 1.95-.3 2.68-.91.73-.6 1.29-1.36 1.68-2.26.38-.91.57-1.88.57-2.93zM14.27 11.86c0 .3-.09.55-.26 .76s-.41 .33-.7 .33c-.31 0-.57-.11-.78-.33s-.32-.47-.32-.76v-2.27c0-.29.11-.55.32-.76s.47-.32.78-.32c.29 0 .54 .11 .74 .32s.32 .47 .32 .76v2.27zM15.98 16.56c0 .29-.09 .55-.27 .78s-.41 .34-.68 .34c-.3 0-.56-.11-.76-.34s-.31-.49-.31-.78V9.24c0-.29 .1-.55 .31-.78s.46-.34 .76-.34c.28 0 .52 .11 .71 .34s.28 .49 .28 .78v7.32z" />
      </svg>
    </SvgIcon>
  );
}
// iHeartRadio Icon
export function IHeartRadioIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0066" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M3 12s4-5.5 9-5.5 9 5.5 9 5.5-4 5.5-9 5.5-9-5.5-9-5.5zm9-3c-3.582 0-6.5 2.686-6.5 6s2.918 6 6.5 6 6.5-2.686 6.5-6-2.918-6-6.5-6z"/>
      </svg>
    </SvgIcon>
  );
}
export function YouTubeIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FF0000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M21.35 3.44c-.18-.66-.73-1.19-1.4-1.35C18.93 2 12 2 12 2S5.07 2 3.05 2.09c-.67.16-1.22.69-1.4 1.35C1.5 5.05 1.5 12 1.5 12s0 6.95.15 7.56c.18.66.73 1.19 1.4 1.35C5.07 22 12 22 12 22s6.93 0 8.95-.09c.67-.16 1.22-.69 1.4-1.35.15-.61.15-7.56.15-7.56s0-6.95-.15-7.56zm-9.85 9.5V6.95l6.25 3.99-6.25 3.5z"/>
      </svg>
    </SvgIcon>
  );
}
export function StitcherIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#0D1726" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function VurblIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#1A8A34" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function AudioburstIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FF6D00" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function RSSIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FFA500" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}

export function RSSRadioIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FF8C00" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function PodimoIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#00BFFF" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function PlexIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FF5F00" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function QuibiIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FFDEAD" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function PlexIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FF5F00" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}

export function OvercastIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#4E8AB8" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function BoomplayIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FF512F" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function ScribdIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#1A1A1A" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}

export function TuneInIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#25B7E1" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function DeezerIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#008AFF" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function SoundCloudIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FF3300" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function AnchorIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#1DB954" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function BreakerIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#3185FF" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function OwltailIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#F16745" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}

export function RadioPublicIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#E33818" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function HimalayaIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FF6D00" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function PodchaserIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#00B6F0" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function LuminaryIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function BullhornIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#00AEEF" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function PodysseyIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#1A8A34" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function PlayerFMIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FF5A00" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function GaanaIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FF7700" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function TuneMojiIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#FF001D" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}
export function LaughableIcon() {
  return (
    <SvgIcon>
      <svg xmlns="http://www.w3.org/2000/svg" fill="#E01736" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path d="M20 3v18H4V3h16zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    </SvgIcon>
  );
}



// Example Usage:
// <SpotifyIcon />
// <ItunesIcon />
// <PocketCastsIcon />
// <GooglePodcastsIcon />
// <CastboxIcon />
// <PodbeanIcon />
// <ApplePodcastsIcon />
// <IHeartRadioIcon />
