import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Media } from './components/Media' 
import videoThiago from './assets/Thiago.mp4'
import audio from './assets/audio.mp3'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Media url={videoThiago} width="100%" height="100%" name="player-wrapper" mute={true} loop={false} />
    <Media url={audio} width="0%" height="0%" name="player-wrapper custom" mute={false} /> 
  </React.StrictMode>,
)
