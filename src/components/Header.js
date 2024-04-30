import React from 'react';

function Header() {
  return (
    <header>
      <video src={process.env.PUBLIC_URL + '/video/video.mp4'} loop autoPlay muted playsInline></video>
      <h1>Polo Site</h1>
      <div className="headerbg"></div>
    </header>
  );
}

export default Header;
