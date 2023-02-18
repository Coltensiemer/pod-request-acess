import React from 'react'
import './index.css'
import Spotify from './assets/desktop/spotify.svg'; 
import ApplePod from './assets/desktop/apple-podcast.svg'
import GooglePod from './assets/desktop/google-podcasts.svg'
import PocketPod from './assets/desktop/pocket-casts.svg'



export default function Logos() { 
    return (
        <div className='logo-containers bg-white'>  
        <img  src={Spotify} alt="spotify∂ logo"/> 
        <img  src={ApplePod} alt="apple logo"/> 
        <img className='logos three' src={GooglePod} alt="google logo" /> 
        <img className='logos four' src={PocketPod} alt="pocket podcast logo" /> 
        </div>
    ) 
}