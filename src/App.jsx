import React from "react";
import LogoImg from "./assets/desktop/logo.svg";
import Logos from "./Logos";
import imageHostDesk from "./assets/desktop/image-host.jpg";
import imageHostMobile from "./assets/mobile/image-host.jpg";
import imageHostTablet from "./assets/tablet/image-host.jpg";

import validator from "validator";
import Footer from "./Footer";

export default function App() {
  //Sets state for email, and if it is true
  const [formData, setData] = React.useState({
    email: "",
    vaild: true,
  });

  function handleChange(event) {
    setData((preform) => {
      // GOing to return the array with the new target value
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

  //Handles the meida query for background images.
  const [mediaWidth, setMediaWidth] = React.useState(window.innerWidth);
  // UseEffect to set mediaquery state with a function. Function is put into an event listener that listens for resizes and then removes effect listener

  React.useEffect(() => {
    const handlemediaWidth = () => {
      setMediaWidth(window.innerWidth);
    };

    window.addEventListener("resize", handlemediaWidth);

     // Allows unmounting of the event listener 
    return () => {
      window.removeEventListener("resize", handlemediaWidth);
    };
  }, []);

  console.log(mediaWidth);

  return (
    <>
      {mediaWidth >= 800 && (
        <img className="backgroundlg" alt="" src={imageHostDesk}></img>
      )}
      {mediaWidth > 699 && mediaWidth < 800 && (
        <img className="backgroundmd" alt="" src={imageHostTablet}></img>
      )}
      {mediaWidth <= 699 && (
        <img className="backgroundsm" alt="" src={imageHostMobile}></img>
      )}
      <main>
        <img src={LogoImg} alt="Logo"></img>
        <h1>
          PUBLISH YOUR PODCASTS
          <br></br>
          <br></br>
          <span>EVERYWHERE.</span>
        </h1>
        <p>
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
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
              <p className="form-error">Oops! Please Check your email</p>
            )}
          </form>
          {/* END FORM  */}
        </section>
      </main>
      <Footer className="footer" />
    </>
  );
}
