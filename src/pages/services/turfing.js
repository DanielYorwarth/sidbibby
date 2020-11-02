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
        text={
          <p>
            Sid Bibby’s source turf from a quality local turf supplier. 
            <br/><br/>
            It’s carefully grown by company with three generations of experience. 
            <br/><br/>
            The turf is a medium grade and is ideal for medium to hard wearing lawns. It contains about 15 – 20% Dwarf Rye Grass and 30 – 40% Creeping Red Fescue, so it gives the look of a fine turf but is harder wearing and easier to look after.
            <br/><br/>
            The turf is exceedingly popular and most widely used being a general, all-purpose, cultivated, weed-free lawn turf. This turf is ideal for domestic and commercial front and rear gardens.
            <br/><br/>
            Please note, Sid Bibby’s only offer a SUPPLY AND LAY service using CTN Turf.
            <br/><br/>
            If you are looking for a SUPPLY ONLY service, we would recommend you contact CTN Turf direct (01353 778404)
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
        text={<span>Rated 4.5/5 <b>"Excellent"</b> <br/>with over 300 reviews.</span>}
        link={{
          text: "View All",
          to: '/',
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
