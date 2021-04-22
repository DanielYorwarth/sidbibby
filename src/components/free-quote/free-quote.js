import React, { useState } from "react";
import { navigate } from "gatsby";

// This function encodes the captured form data in the format that Netlify's backend requires
function encode(data) {
  return Object.keys(data)
  .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
  .join("&");
}

const FreeQuote = () => {
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
    <form className="flex flex-wrap px-2" data-netlify="true" action="/" name="quote-form" method="post" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="quote-form" />
      <p className="w-full md:w-1/2 mb-4 md:px-2">
        <label><input required onChange={handleChange} className="p-4" placeholder="Name" type="text" name="name" /></label>   
      </p>
      <p className="w-full md:w-1/2 mb-4 md:px-2">
        <label><input required onChange={handleChange} className="p-4" placeholder="Email" type="email" name="email" /></label>
      </p>
      <p className="w-full md:w-1/2 mb-4 md:px-2">
        <label><input onChange={handleChange} className="p-4" placeholder="Company" type="text" name="company" /></label>   
      </p>
      <p className="w-full md:w-1/2 mb-4 md:px-2">
        <label><input onChange={handleChange} className="p-4" placeholder="Phone" type="tel" name="tel" /></label>
      </p>
      <p className="w-full md:w-1/2 mb-4 md:px-2">
        <label><select required onChange={handleChange} className="p-4" placeholder="Service" name="service">
          <option value="Turfing">Turfing</option>
          <option value="Paving">Paving</option>
          <option value="Decking">Decking</option>
          <option value="Planting">Planting</option>
          <option value="Fencing">Fencing</option>
          <option value="Show Homes">Show Homes</option>
          <option value="Resin">Resin</option>
          <option value="Design Service">Design Service</option>
          <option value="Artificial Turf">Artificial Turf</option>
          <option value="Water Features">Water Features</option>

        </select></label>
      </p>
      <p className="w-full md:w-1/2 mb-4 md:px-2">
        <label><input required onChange={handleChange} className="p-4" placeholder="Address" type="text" name="address" /></label>
      </p>
      <p className="w-full md:w-auto mb-4 md:px-2">
        <label for="byemail"><input onChange={handleChange} style={{opacity: 1, marginRight: '2px', display: 'inline-block'}} className="p-4" value="yes" type="checkbox" name="byemail" /> Send quote by email</label>
      </p>
      <p className="w-full md:w-auto mb-4 md:px-2">
        <label for="bypost"><input onChange={handleChange} style={{opacity: 1, marginRight: '2px', display: 'inline-block'}} className="p-4" value="yes" type="checkbox" name="bypost" /> Send quote by post</label>
      </p>
      <p className="w-full mb-4 md:px-2">
        <label><textarea required onChange={handleChange} placeholder="Additional information" className="p-4" rows="8" name="info"></textarea></label>
      </p>
      <p className="px-2">
        <button className="custom-button bg-secondary py-4 px-8 text-white font-bold relative z-10 inline-block" type="submit">
          <span className="relative z-10">Send</span>
        </button>
      </p>
    </form>
  );
}

export default FreeQuote