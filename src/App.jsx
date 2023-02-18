import React from 'react' 
import LogoImg from "./assets/desktop/logo.svg"
import Logos from "./Logos"; 


export default function App(){ 

  return( 
<main>
    <img src={LogoImg} className="m-auto py-14"></img>
    <h1>Publish your podcasts</h1>
    <h2>EVERYWHERE.</h2>
    
  
    <p>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, 
    Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
  
  <Logos /> 
  
  <input type="text" placeholder="Email address"></input>
    <button>Request access</button>

 </main> 
  )
}