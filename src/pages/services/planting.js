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
        title="Planting"
        keywords={[`Planting Cambridgeshire`, `Local Gardener`, `Gardener Cambridgeshire`]}
      />
      <SubHero 
        subTitle="SERVICES"
        title="PLANTING"
        color="#ffffff"
        bgImage={data.headerBG.childImageSharp.fluid}
      />
      <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8 mb-8 md:mb-16">
        <Breadcrumb location={location} crumbLabel="PLANTING" />
      </div>
      <Intro text="We have used local nurseries for years and build a strong relationship with the best, so you have endless amount of options to add different colour, shapes, textures and features in your garden."/>
      <ImageWithText
        maxWidth="max-w-6xl"
        image={data.turfing.childImageSharp.fluid}
        text={
          <p>
            We use Tamar Nurseries as suppliers for most of our commercial site planting and have built a strong working relationship over a number of years. You have endless amount of options to add different colour, shapes, textures and features in your garden. 
            <br/><br/>
            Starting afresh or just adding few new plants in your borders, we can help you create the right ambience for your garden. When the hard landscaping is finished it is time to add soft landscaping with beautiful plants!
            <br/><br/>
            Every garden needs a good seating area with plants that relax you on those warm days. Scents and sound become your gardens true meaning. It is important when you are designing your garden to find out what you like, your favourite smell and colour especially. At the design stage we can incorporate your planting to show your garden at its best by hiding the shed, compost area or help reduce that unwanted background noise.
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
    headerBG: file(relativePath: { eq: "seating-area-plants.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    turfing: file(relativePath: { eq: "planting-serivce-page.jpg" }) {
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
