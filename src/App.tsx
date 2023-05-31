import * as React from 'react';
import { Player } from 'video-react';
import "node_modules/video-react/dist/video-react.css"; 
@import "~video-react/styles/scss/video-react";
import Toolbar from './components/Toolbar/index.tsx';
import './style.css';

export default function App() {
  return (
    <div className="container top">
      <Toolbar />
      <h1 className="center">TrucosTruck</h1>
      <p>Sua melhor aposta no mundo do transporte</p>
      <Player
        playsInline
        poster="/assets/poster.png"
        src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
      />
    </div>
  );
}
