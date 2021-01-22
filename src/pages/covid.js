import React from "react"

import Layout from "../components/layout/layout"
import SubHero from '../components/sub-hero/sub-hero';
import SEO from "../components/seo"

class Terms extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Covid Measures" />
        <SubHero 
            subTitle="Sid Bibby Turf & Landscaping "
            title="Control Measures – COVID-19"
            color="#044122"
        />
        <div className="blog mx-auto max-w-screen-xl px-4 md:px-8 mb-16 md:mb-24 md:pt-5">
            <h2><strong>What we are doing to help us and you.</strong></h2> 
            <h3>Adhering to CLC – Site Operation Procedures – Version 3</h3>
            <ul>
                <li>Employees to arrive at our yard in own transport (public transport avoided at all costs)</li>
                <li>Staggered start times at our office.</li>
                <li>Contactless thermometer used by managers to check employee’s temperature each morning.</li>
                <li>Employees to use their own pens for signing in on site.</li>
                <li>Social distancing guidelines to be always followed.</li>
                <li>Each member of staff will be equipped with a face shield/ masks to be worn if necessary (i.e. Site induction with site manager).</li>
                <li>No more than 2x people to sign in at one time.</li>
                <li>Staff Toilets to be wiped after use. *Please note our toilets are not open to the public at present*</li>
                <li>Weekly health and wellbeing checked with employees.</li>
                <li>Regularly clean touch points, e.g. Door handles, surfaces, clocking in fob.</li>
                <li>Drinks not to be accepted from customers.</li>
                <li>Breaks to be had in vehicles alone.</li>
                <li>Vehicles to be cleaned daily. Hand wipes and sanitizer to be used regularly.</li>
                <li>Work gloves to be worn always whilst working.</li>
            </ul>
        </div>
      </Layout>
    )
  }
}

export default Terms
