import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import Img from 'gatsby-image';

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import SubHero from '../../components/sub-hero/sub-hero';
import Intro from '../../components/intro/intro';
import TrustPilotBlock from '../../components/trustpilot-block/trustpilot-block';
import CtaBlock from '../../components/cta-block/cta-block';


const BlogIndex = ({ data }, location) => {
  return (
    <Layout>
      <SEO
        title="Turf Care"
        keywords={[`Turf Care Cambridgeshire`, `Turf Care`, `Turf Maintenance`]}
      />
      <SubHero 
        subTitle="ABOUT"
        title="TURF CARE"
        color="#044122"
      />
      <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8 mb-8 md:mb-16">
        <Breadcrumb location={location} crumbLabel="TURF CARE" />
      </div>
      <Intro text="Lawn Care Guide- Please do not walk on your new lawn. This is particularly important! Your Lawn needs a few weeks to settle, if you walk on the new lawn you will be able to see footprints under the turf as a result when you mow the lawn it will be uneven." />
      <div className={`flex flex-wrap max-w-6xl mx-auto px-4 md:px-8 mb-12 md:mb-24 leading-relaxed`}>
        <div className="w-full md:w-2/5 mb-8 md:mb-0">
          <Img className="w-full" fluid={data.turfingfirst.childImageSharp.fluid} />
        </div>
        <div className="w-full md:w-3/5 md:pl-8 lg:pl-16">
          <h3 className="text-xl font-bold mb-2">Water (this is from March to October)</h3>
          <p className="mb-5">This is especially important in order to make sure your new lawn establish and to grow stronger. A little trick to make sure the lawn is correctly watered; you can lift a corner of the turf and see if the lawn and soil beneath is totally saturated. Please ensure that nobody goes on the turf for 2-3 weeks; this includes children and pets</p>
          <h3 className="text-xl font-bold mb-2">How to water</h3>
          <p>The new turf should be watered thoroughly daily for at least 2 weeks, when the weather is dry; twice a day for a couple of hours is best. Edges and joints require a lot more water, in hot weather this is crucial; so please ensure water is left on all day! We suggest the best tool for waters evenly over the lawn is a sprinkler which will distribute water evenly over the lawn. Use boards to walk on lawn when placing the sprinkler down (as mentioned above you should not step on lawn). You will know if you have not been watering enough is the lawn starts to shrink or gaps appear.</p>
        </div>
      </div>
      <div className={`flex flex-wrap max-w-6xl mx-auto px-4 md:px-8 mb-12 md:mb-24 leading-relaxed`}>
        <div className="w-full md:w-2/5">
          <h3 className="text-xl font-bold mb-2">Mowing</h3>
          <p className="mb-5">We recommend that you do not mow the new lawn until it has fully rooted. This can be checked by lifting a corner of the lawn, you will be able to see if the roots are attached to the soil.</p>
          <p>Your lawn mower should be set to the highest setting and wait 2-3 weeks until mowing for the first time. However, after that we recommend mowing your lawn every week. It is particularly important that the lawn is not what we called ‘scalped’ during the first few months. If you are unsure when to mow, please see the beside picture of the lawn that is 50mm. Only removing no more than 1/3 of the grass height each time. After mowing please ensure all grass clippings are removed from the lawn and they can damage the lawn.</p>
        </div>
        <div className="w-full md:w-3/5 md:pl-8 lg:pl-16 order-first md:order-last mb-8 md:mb-0">
          <Img className="w-full" fluid={data.turfing.childImageSharp.fluid} />
        </div>
      </div>
      <div className={`flex flex-wrap max-w-6xl items-center mx-auto px-4 md:px-8 mb-12 md:mb-24 leading-relaxed`}>
        <div className="w-full md:w-2/5 mb-8 md:mb-0">
          <Img className="w-full" fluid={data.placeholder.childImageSharp.fluid} />
        </div>
        <div className="w-full md:w-3/5 md:pl-8 lg:pl-16">
          <h3 className="text-xl font-bold mb-2">Maintenance for turf</h3>
          <p className="mb-5">Once the turf is established (around 3 months), the grass height can be reduced gradually to the optimum level which is 17mm and 35mm. Again, making sure all clippings are removed from the lawn.</p>
        </div>
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

const indexQuery = graphql`
  query {
    turfingfirst: file(relativePath: { eq: "turf4.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    turfing: file(relativePath: { eq: "turf-with-surrounding-planting.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    placeholder: file(relativePath: { eq: "turf.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <BlogIndex location={props.location} props data={data} {...props} />
    )}
  />
)
