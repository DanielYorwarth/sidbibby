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
        title="Decking"
        keywords={[`Decking Cambridgeshire`, `Local Decking Fitted`, `Fitted Decking`, `Fitted Decking Cambridgeshire`]}
      />
      <SubHero 
        subTitle="SERVICES"
        title="DECKING"
        color="#ffffff"
        bgImage={data.headerBG.childImageSharp.fluid}
      />
      <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8 mb-8 md:mb-16">
        <Breadcrumb location={location} crumbLabel="DECKING" />
      </div>
      <Intro text="Decking can be built to be any design and specification which makes it a perfect versatile garden feature, favourite seating spot or an extended living area right outside your door"/>
      <ImageWithText
        maxWidth="max-w-6xl"
        image={data.turfing.childImageSharp.fluid}
        title="Well built, beautifully designed decking."
        text={
          <p>
            Decking can be incorporated into your garden to become a feature for your favourite seating spot or an extended living area right outside your door.
            <br/><br/>
            Wood is an excellent flooring material for the garden. It gives a warm feel which is a modern alternative to hard paved areas. Decking can be installed anywhere in the garden but is best placed in a sunny area. It can be painted in a wide range of colours according to the scheme of your garden. Decking and bark mulch compliment each other well if they are used in close proximity.
          </p>
        }
      />
      <ImageWithText
        imageRight
        maxWidth="max-w-6xl"
        image={data.decking.childImageSharp.fluid}
        title="No maintenace composite decking."
        text={
          <p>
            As an alternative, we can supply and lay composite decking, which lasts longer than your typical timber and requires no maintenance – it looks amazing all year round!
            <br/><br/>
            We have samples of Piranha composite decking on display stand at our barn and on display in our show gardens, it has up to a 25-year guarantee. 
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
    headerBG: file(relativePath: { eq: "decking-and-planting.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    turfing: file(relativePath: { eq: "decking-and-wooden-frame.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    decking: file(relativePath: { eq: "decking-planting-and-turf.jpg" }) {
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
