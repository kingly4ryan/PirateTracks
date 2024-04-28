import React from 'react';
import styled from 'styled-components';

export default function Login() {
  const handleClick = () => {
    const clientId = "91bc3785451440b4a1cdf847e5d51a7a";
    const redirectUrl = "https://pirate-tracks.vercel.app/";
    const apiUrl = "https://accounts.spotify.com/authorize";
    const scope = [
      "user-read-private",
      "user-read-email",
      "user-modify-playback-state",
      "user-read-playback-state",
      "user-read-currently-playing",
      "user-read-recently-played",
      "user-top-read",
    ];
    window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
      " "
    )}&response_type=token&show_dialog=true`;
  }
  return <Container> 
      <img
        src="/logo.png"
        alt="PirateTracks"
      />
      <button onClick={handleClick}>Connect PirateTracks</button>
    </Container>
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #FFFFFF;
  gap: 5rem;
  img {
    height: 35vh;
  }
  button {
    padding: 1rem 5rem;
    border-radius: 5rem;
    background-color: black;
    color: #E0C31D;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
  }
`;
