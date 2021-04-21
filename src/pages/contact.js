import React from "react"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import SubHero from '../components/sub-hero/sub-hero';
import TrustPilotBlock from '../components/trustpilot-block/trustpilot-block';
import CtaBlock from '../components/cta-block/cta-block';
import Form from "../components/form/form";


const BlogIndex = ({ data }, location) => {
  return (
    <Layout>
      <SEO
        title="Contact"
        keywords={[`Contact SibBibby`]}
      />
      <SubHero 
        subTitle="SIDBIBBY"
        title="CONTACT US"
        color="#044122"
      />
      <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8 mb-8 md:mb-16">
        <Breadcrumb location={location} crumbLabel="CONTACT US" />
      </div>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 mb-12 md:mb-24 flex flex-wrap">
        <div className="w-full md:w-2/3 bg-gray">
          <div className="text-white bg-primary px-4 md:px-8 py-4 w-full">
            <h2 className="font-bold text-xl">CONTACT FORM</h2>
          </div>
          <div className="p-4 md:p-8 bg-gray">
            <Form/>
          </div>
        </div>
        <div className="w-full md:w-1/3 md:pl-4 text-primary-darker leading-relaxed" >
          <div className="p-4 md:p-8 bg-gray h-full">
            <h3 className="font-bold text-xl mb-6">Sid Bibby Turf & Landscaping Ltd</h3>
            <p className="mb-6">
              ROSE BARN,<br/>
              ELY ROAD,<br/>
              SUTTON, ELY,<br/>
              CAMBRIDGESHIRE,<br/>
              CB6 2AB
            </p>
            <a href="tel:01353777909"><strong>TEL:</strong> 01353 777909</a>
            <p className="mb-6"><strong>TEL:</strong> 01353 777590</p>
            <a className="block mb-6" href="mailto:info@sidbibby.co.uk"><strong>EMAIL:</strong> INFO@SIDBIBBY.CO.UK</a>
            <p>
              <strong>OFFICE HOURS:</strong><br/>
              MON – THURS 9.00AM – 5.30PM<br/>
              FRIDAY 9.00AM – 5PM<br/>
              SATURDAY – APPOINTMENT ONLY
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8 mb-12 md:mb-24">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.8540383491277!2d0.13877881580269946!3d52.39119627978999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d80ce312c732df%3A0x74bc5417ed18630a!2sSid%20Bibby%20Turf%20%26%20Landscaping%20Ltd!5e0!3m2!1sen!2suk!4v1599038819167!5m2!1sen!2suk" width="100%" height="550" frameBorder="0" style={{border: 0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
      </div>
      <CtaBlock 
        text="GET A FREE QUOTE OR CALL US"
        phone="01353 777 909"
        link={{
          text: "FREE QUOTE",
          to: "/quote"
        }}
      />
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
