import React from "react"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import SubHero from '../components/sub-hero/sub-hero';
import TrustPilotBlock from '../components/trustpilot-block/trustpilot-block';


const BlogIndex = ({ data }, location) => {
  return (
    <Layout>
      <SEO
        title="Free Quote"
        keywords={[`Contact SibBibby`]}
      />
      <SubHero 
        subTitle="SIDBIBBY"
        title="FREE QUOTE"
        color="#044122"
      />
      <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8 mb-8 md:mb-16">
        <Breadcrumb location={location} crumbLabel="FREE QUOTE" />
      </div>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 mb-12 md:mb-24 flex flex-wrap">
        <div className="w-full bg-gray">
          <div className="p-4 md:p-8">
          <form className="flex flex-wrap px-2" name="contact" method="POST" data-netlify="true">
            <p className="w-full md:w-1/2 mb-4 md:px-2">
              <label><input className="p-4" placeholder="Name" type="text" name="name" /></label>   
            </p>
            <p className="w-full md:w-1/2 mb-4 md:px-2">
              <label><input className="p-4" placeholder="Email" type="email" name="email" /></label>
            </p>
            <p className="w-full md:w-1/2 mb-4 md:px-2">
              <label><input className="p-4" placeholder="Company" type="text" name="company" /></label>   
            </p>
            <p className="w-full md:w-1/2 mb-4 md:px-2">
              <label><input className="p-4" placeholder="Phone" type="tel" name="tel" /></label>
            </p>
            <p className="w-full md:w-1/2 mb-4 md:px-2">
              <label><select className="p-4" placeholder="Service" name="service[]">
                <option value="Turfing">Turfing</option>
                <option value="Paving">Paving</option>
                <option value="Timber">Timber</option>
                <option value="Planting">Planting</option>
                <option value="Fencing">Fencing</option>
                <option value="Water Features">Water Features</option>
                <option value="Multi-Level Garden">Multi-Level Garden</option>
                <option value="Low Maint Garden">Low Maint Garden</option>
              </select></label>
            </p>
            <p className="w-full md:w-1/2 mb-4 md:px-2">
              <label><input className="p-4" placeholder="Address" type="text" name="address" /></label>
            </p>
            <p className="w-full md:w-auto mb-4 md:px-2">
              <label for="byemail"><input style={{opacity: 1, marginRight: '2px', display: 'inline-block'}} className="p-4" value="byemail" type="checkbox" name="byemail" /> Send quote by email</label>
            </p>
            <p className="w-full md:w-auto mb-4 md:px-2">
              <label for="bypost"><input style={{opacity: 1, marginRight: '2px', display: 'inline-block'}} className="p-4" value="bypost" type="checkbox" name="bypost" /> Send quote by post</label>
            </p>
            <p className="w-full mb-4 md:px-2">
              <label><textarea  placeholder="Additional information" className="p-4" rows="8" name="info"></textarea></label>
            </p>
            <p className="px-2">
              <button className="custom-button bg-secondary py-4 px-8 text-white font-bold relative z-10 inline-block" type="submit">
                <span className="relative z-10">Send</span>
              </button>
            </p>
          </form>
          </div>
        </div>
      </div>
      <TrustPilotBlock 
        marginBottom
        lightShadow
        title="CHECK OUT OUR REVIEWS"
        text={<span>Rated 4.6/5 <b>"Excellent"</b> <br/>on facebook reviews.</span>}
        link={{
          text: "View All",
          to: 'https://www.facebook.com/sidbibbylandscaping/reviews/',
          color: '#D8574A'
        }}
      />
    </Layout>
  )
}


export default BlogIndex;
