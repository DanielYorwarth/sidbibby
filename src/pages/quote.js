import React from "react"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import SubHero from '../components/sub-hero/sub-hero';
import TrustPilotBlock from '../components/trustpilot-block/trustpilot-block';
import FreeQuote from "../components/free-quote/free-quote";

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
           <FreeQuote />
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
