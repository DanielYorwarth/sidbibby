import React, { useState } from "react";
import { navigate } from "gatsby";

// This function encodes the captured form data in the format that Netlify's backend requires
function encode(data) {
  return Object.keys(data)
  .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  .join("&");
}

const Form = () => {
  const [name, setName] = useState("")

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value })
  }

  const handleSubmit = (event) => {
    // Prevent the default onSubmit behavior
    event.preventDefault();
    // POST the encoded form with the content-type header that's required for a text submission
    // Note that the header will be different for POSTing a file
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": event.target.getAttribute("name"), 
        ...name
      })
    })
    // On success, redirect to the custom success page using Gatsby's `navigate` helper function
    .then(() => navigate("/thank-you/"))
    // On error, show the error in an alert
    .catch(error => alert(error));
  };

  return (
    <form className="flex flex-wrap" data-netlify="true" action="/" name="contact-form" method="post" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact-form" />
      <p className="w-full md:w-1/3 mb-4 md:pr-2">
        <label><input onChange={handleChange} className="p-4" required placeholder="Name" type="text" name="name" /></label>   
      </p>
      <p className="w-full md:w-1/3 mb-4 md:px-2">
        <label><input onChange={handleChange} className="p-4" required placeholder="Email" type="email" name="email" /></label>
      </p>
      <p className="w-full md:w-1/3 mb-4 md:pl-2">
        <label><input onChange={handleChange} className="p-4" placeholder="Phone" type="tel" name="tel" /></label>
      </p>
      <p className="w-full mb-4">
        <label><textarea onChange={handleChange} placeholder="Message" required className="p-4" rows="8" name="message"></textarea></label>
      </p>
      <p>
        <button className="custom-button bg-secondary py-4 px-8 text-white font-bold relative z-10 inline-block" type="submit">
          <span className="relative z-10">Send</span>
        </button>
      </p>
    </form>
  );
}

export default Form