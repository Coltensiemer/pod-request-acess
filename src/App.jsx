import React from "react";
import LogoImg from "./assets/desktop/logo.svg";
import Logos from "./Logos";
import imageHost from "./assets/desktop/image-host.jpg";
import validator from "validator";

export default function App() {
  //Sets state for email, and if it is true
  const [formData, setData] = React.useState({
    email: "",
    vaild: true,
  });

  function handleChange(event) {
    setData((preform) => {
      return {
        ...preform,
        [event.target.name]: event.target.value,
      };
    });
  }

  // handles sumbit. Uses validator to check if email is acceptable.
  function handleSubmit(event) {
    event.preventDefault();
    const validEmail = validator.isEmail(formData.email);

    // takes previous state and updates boolen base on validator
    setData((prev) => ({
      ...prev,
      valid: validEmail,
    }));
  }

  return (
    <main>
      {/* <img className='background-image' src={imageHost}></img> */}
      <img src={LogoImg} className="logo"></img>
      <h1>
        PUBLISH YOUR PODCASTS
        <br></br>
        <span>EVERYWHERE.</span>
      </h1>
      <p>
        Upload your audio to Pod with a single click. We’ll then distribute your
        podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts and
        more!
      </p>

      <section className="form-section">
        <Logos />
        {/* This is the input/button for form  */}
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input
            id="email"
            className="input-info"
            name="email"
            type="text"
            placeholder="Email address"
            onChange={handleChange}
            value={formData.email}
          ></input>

          <button className="form-btn">Request access</button>
          {formData.valid === false && (
            <p className="form-error">Ops! Please Check your email</p>
          )}
        </form>
        {/* END FORM  */}
      </section>
    </main>
  );
}
