import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import SubHero from '../../components/sub-hero/sub-hero';
import TrustPilotBlock from '../../components/trustpilot-block/trustpilot-block';
import Intro from '../../components/intro/intro';
import ImageWithText from '../../components/layout/image-with-text/image-with-text';
import CtaBlock from '../../components/cta-block/cta-block';
import QuoteWrapper from '../../components/quote-section/quote-wrapper';


const BlogIndex = ({ data }, location) => {
  return (
    <Layout>
      <SEO
        title="Turfing"
        keywords={[`Turfing Cambridgeshire`, `Local Turfing`, `Turf Improvments`, `Turfing Landscaping Cambridgeshire`]}
      />
      <SubHero 
        subTitle="SERVICES"
        title="TURFING"
        color="#ffffff"
        bgImage={data.headerBG.childImageSharp.fluid}
      />
      <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8 mb-8 md:mb-16">
        <Breadcrumb location={location} crumbLabel="TURFING" />
      </div>
      <Intro text="Our high-quality lawn turf is exceedingly popular and most widely used being a general, all-purpose, cultivated, weed-free lawn turf. This turf is ideal for domestic and commercial front and rear gardens." />
      <ImageWithText 
        maxWidth="max-w-6xl"
        image={data.turfing.childImageSharp.fluid}
        title="Perfect if your looking to revamp your lawn."
        text={
          <p>
            At Sid Bibby’s Turf and Landscaping we cover every aspect of turf laying including a full ground preparation and laying service. We can remove your old lawn, rotavate the soil and level the ground before we lay your luscious new lawn. We pride ourselves on giving you the best service, our experienced operatives have the skill and knowledge to delivery high quality finish to every job.
            <br/><br/>
            A newly turfed lawn can transform a tired garden into an attractive outdoor space. We source turf from a quality local turf supplier, which is carefully grown by a company with three generations of experience. Sid Bibby’s have a strong relationship with our turf suppliers and have worked with them from the start of our business. 
            <br/><br/>
            The turf is exceedingly popular and most widely used being a general, all-purpose, cultivated, weed-free lawn turf. This turf is ideal for varied uses such as domestic and commercial gardens in all different shapes and sizes.  
          </p>
        }
      />
      <ImageWithText 
        imageRight
        maxWidth="max-w-6xl"
        image={data.turfing2.childImageSharp.fluid}
        image2={data.turfing3.childImageSharp.fluid}
        title="Local, affordable and easy."
        text={
          <p>
            Our Turf is from a quality local turf supplier, that have carefully grown and manage Turf production for three generations of experience.
            <br/><br/>
            The turf is a medium grade and is ideal for medium to hard wearing lawns. It contains about 15 – 20% Dwarf Rye Grass and 30 – 40% Creeping Red Fescue, so it gives the look of a fine turf but is harder wearing and easier to look after.
            <br/><br/>
            If you are looking for a SUPPLY ONLY service, we would recommend you contact CTN Turf direct (01353 778404)
            <br/><br/>
            Please see our <Link className="text-secondary font-bold hover:opacity-75 duration-300" to="/about/turf-care">turf care guide</Link> for any questions or queries you may have about the upkeep of your lawn.
            <br/><br/>
            For a free quote, contact us today and fill out a <Link className="text-secondary font-bold hover:opacity-75 duration-300"  to="/quote">quick and easy quote form!</Link>
          </p>
        }
      />
      <CtaBlock 
        text="GET A FREE QUOTE OR CALL US"
        phone="01353 777 909"
        link={{
          text: "FREE QUOTE",
          to: "/quote"
        }}
      />
      <QuoteWrapper 
        bgImage={data.testimonialsBg.childImageSharp.fluid}
        quotes={[
          {
          stars: 5, 
          title: "I can not speak highly enough of Sid Bibby!", 
          text: "The guys have done a stunning job in our garden! They have been quick, friendly and highly skilled! If you need any work done I defiantly recommend them 100%! I couldn't be happier! I now actually want to spend time outside!",
          },
          {
          stars: 5, 
          title: "Amazing job by Sid Bibby and the team", 
          text: "Thanks particularly to James and Doug who worked so hard in the hot weather! Highly recommend these guys - excellent value, nothing’s too much trouble and we got exactly what we wanted, when we agreed it. 5 stars indeed",
          }
        ]}
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
    headerBG: file(relativePath: { eq: "turf.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    turfing: file(relativePath: { eq: "shaped-turf.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    turfing2: file(relativePath: { eq: "domestic/Turf.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    turfing3: file(relativePath: { eq: "commercial/Barking-chipping-and-turf.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    testimonialsBg: file(relativePath: { eq: "testimonials-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1920) {
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
