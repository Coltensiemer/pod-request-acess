import React from 'react' 
import LogoImg from "./assets/desktop/logo.svg"
import Logos from "./Logos"; 


export default function App(){ 

  const [formData, setData] = React.useState({
    email:"", 
    vaild: false,
  })

  function handleChange (event) { 
    setData(preform => {
      return { 
        ...preform, 
        [event.target.name]: event.target.value
      }
    }); 
  }

  function handleSubmit (event) { 
    event.preventDefault(); 
    console.log(formData)
    
  }
  
  console.log(formData.validity); 


  return( 

<main>
    <img src={LogoImg} className="m-auto py-14"></img>
    <h1>Publish your podcasts</h1>
    <h2>EVERYWHERE.</h2>
    
  
    <p>Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, 
    Apple Podcasts, Google Podcasts, Pocket Casts and more!</p>
  
  <Logos /> 
  <form onSubmit={handleSubmit}>
    <label htmlFor="email"></label>
  <input id="email" 
  name="email"
   type="text" 
   placeholder="Email address" 
   onChange={handleChange}
   value={formData.email}>
   </input>
   {!formData.vaild && <p className='form-error'> Ops! Please Check your email</p>}
    <button className='form-btn' >Request access</button>
  </form> 


 </main> 
  )
}