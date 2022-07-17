import React, { useEffect, useState } from "react";

const FormTwo = () => {
  const [name, setName] = useState("")

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value })
  }
 
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const role = urlParams.get('role')
    setName({ ...name, ['role']: role })
  }, [])


  return (
    <form enctype="multipart/form-data" className="flex flex-wrap" data-netlify="true" action="/thank-you-job-application" name="job-application-form" method="POST">
      <input type="hidden" name="job-application-form" value="job-application-form" />
      <p className="w-full md:w-1/3 mb-4 md:pr-2">
        <label>Full Name * <br/><input onChange={handleChange} className="p-4" required placeholder="Enter your name" type="text" value={name['name']} name="name" /></label>   
      </p>
      <p className="w-full md:w-1/3 mb-4 md:px-2">
        <label>Email Address * <br/><input onChange={handleChange} className="p-4" required placeholder="Enter your email" type="email" value={name['email']} name="email" /></label>
      </p>
      <p className="w-full md:w-1/3 mb-4 md:pl-2">
        <label>Phone <br/><input onChange={handleChange} className="p-4" placeholder="Enter your phone number " value={name['tel']} type="tel" name="tel" /></label>
      </p>
      <p className="w-full md:w-1/3 mb-4 md:pr-2">
        <label>Job Role *<br/><input onChange={handleChange} className="p-4" required value={name['role']} placeholder="Enter the job role" type="text" name="role" /></label>
      </p>
      <p className="mb-4 md:px-2 leading-none w-full md:w-1/3 md:pl-2 md:mt-6">
        <label>
          Attach your CV * (Under 8MBs)<br/>
          <input onChange={handleChange} className="pt-4" required value={name['cv']} placeholder="CV" type="file" name="cv" />
        </label>
      </p>
      <p className="md:pl-2 leading-none w-full md:w-1/3 md:mt-6 mb-4">
        <label>
          Attach your Cover Letter (Under 8MBs)<br/>
          <input onChange={handleChange} className="pt-4" value={name['cover']} placeholder="Cover Letter" type="file" name="cover" />
        </label>
      </p>
      <p className="w-full mb-4">
        <label>Additional Message <br/><textarea onChange={handleChange} value={name['message']} placeholder="" className="p-4" rows="8" name="message"></textarea></label>
      </p>
      <p>
        <button className="custom-button bg-secondary py-4 px-8 text-white font-bold relative z-10 inline-block" type="submit">
          <span className="relative z-10">Send</span>
        </button>
      </p>
    </form>
  );
}

export default FormTwo