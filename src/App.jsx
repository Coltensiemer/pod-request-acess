import React from 'react' 
import LogoImg from "./assets/desktop/logo.svg"
import Logos from "./Logos"; 
import imageHost from "./assets/desktop/image-host.jpg"
import validator from 'validator';


export default function App(){ 

  const [formData, setData] = React.useState({
    email:"", 
    vaild: true,
  })

  function handleChange (event) { 
    setData(preform => {
      return { 
        ...preform, 
        [event.target.name]: event.target.value
      }
    }); 
  }


// 
  function handleSubmit (event) { 
    event.preventDefault(); 
    const validEmail = validator.isEmail(formData.email)

setData(prev => ({
  ...prev,
  valid: validEmail
}))

} 
  



  return( 

<main>
    {/* <img className='background-image' src={imageHost}></img> */}
    <img src={LogoImg} className="m-auto py-14"></img>
    <h1>PUBLISH YOUR PODCASTS
      <br></br>
    <span>EVERYWHERE.</span></h1>
    <p>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, 
    Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
  
  <Logos /> 

  {/* This is the input/button for form  */}
  <form onSubmit={handleSubmit}>
    <label htmlFor="email"></label>
  <input id="email" 
  name="email"
   type="text" 
   placeholder="Email address" 
   onChange={handleChange}
   value={formData.email}>
   </input>
{formData.valid === false && <p className='form-error'>Ops! Please Check your email</p>} 
    <button className='form-btn' >Request access</button>
  </form> 
  {/* END FORM  */}


 </main> 
  )
}