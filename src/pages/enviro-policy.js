import React from "react"

import Layout from "../components/layout/layout"
import SubHero from '../components/sub-hero/sub-hero';
import SEO from "../components/seo"

class Enviro extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Enviro Policy" />
        <SubHero 
            subTitle="SIDBIBBY"
            title="Enviro Policy"
            color="#044122"
        />
        <div className="blog mx-auto max-w-screen-xl px-4 md:px-8   mb-16 md:mb-24 md:pt-5">
            As a Landscaping and Design Centre Sid Bibby Turf and Landscaping Ltd is committed to preserving and protecting our environment for our future generations.
            <br/><br/>
            We have already begun in our quest to cause as little impact on the environment that we work in. Our landscapers are fully trained to constantly be aware of the impact of pollution and contamination and the effects that this has on the land and wildlife. Training and implementing our practices is done as part of our normal working week. Complying with all relevant environmental legislation.
            <br/><br/>
            Our new Design Centre and Offices are at the forefront of our attempts to improve the effect we have on the environment as a company. In an attempt to improve our environmental performance the building has been designed with the environment in mind. In the planning stages of the building many of our ideas were centred on designing a sustainable building with little or no external maintenance needing to be done, thus minimising any pollution from treatments to windows and boarding to the building. Internally the building has benefited from many energy saving installations. We have installed sensor taps, decreasing water wastage, an Air Source system that provides all of the heating for the building. Our site has a sewage treatment plant providing safe and hygienic wastewater treatment and disposal. Ensuring the environment is protected.
            <br/><br/>
            Recycling has become a big part of everyone’s lives in the past few years. It is now starting to become second nature to people in their homes to actively recycle all of their waste. We believe it should be the same in our offices and on site. Every effort is made by our staff to recycle as much of our waste as possible.
        </div>
      </Layout>
    )
  }
}

export default Enviro
