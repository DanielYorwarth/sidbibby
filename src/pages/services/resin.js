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
        title="Resin"
        keywords={[`Resin driveways`, `Resin Driveways Cambridge`]}
      />
      <SubHero 
        subTitle="SERVICES"
        title="RESIN"
        color="#ffffff"
        bgImage={data.headerBG.childImageSharp.fluid}
      />
      <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8 mb-8 md:mb-16">
        <Breadcrumb location={location} crumbLabel="RESIN" />
      </div>
      <Intro text="Resin is a great, SUDS compliant product that is used on driveways and can be incorporated into garden design which lasts up to 25-years."/>
      <ImageWithText
        maxWidth="max-w-6xl"
        image={data.showHome.childImageSharp.fluid}
        title="Lasts up to 25 years"
        text={
          <p>
            At Sid Bibby’s our resin bound surfaces are custom made to your specification.  Resin is good way to add value and the wow factor to your home. Our experienced installation teams will help advise you on finishes to ensure that you get a product exactly that matches your requirements perfectly. We do like to incorporate resin into garden design as well to make the most of the texture of this product.
            <br/><br/>
            The resin we use is SUDS compliant, meaning they are designed to tackle excess water and are fully water permeable. Its porus nature helps prevent rapid surface water runoff that causes flooding, also avoiding the build-up of puddles and potentially reducing the risk of ice in winter. So, you can enjoy a weed free, long-lasting and economical driveway/garden.
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
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showHome: file(relativePath: { eq: "commercial-service-page.jpg" }) {
        childImageSharp {
            fluid(quality: 50, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    showHome2: file(relativePath: { eq: "commercial/Decking-planting-and-turf.jpg" }) {
        childImageSharp {
            fluid(quality: 50, maxWidth: 600) {
            ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    testimonialsBg: file(relativePath: { eq: "testimonials-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
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
