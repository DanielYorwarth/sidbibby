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
        title="Show Homes"
        keywords={[`Show Home Garden Design`, `Commercial Show Home Gardens`]}
      />
      <SubHero 
        subTitle="SERVICES"
        title="SHOW HOMES"
        color="#ffffff"
        bgImage={data.headerBG.childImageSharp.fluid}
      />
      <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8 mb-8 md:mb-16">
        <Breadcrumb location={location} crumbLabel="SHOW HOMES" />
      </div>
      <Intro text="With over 20 years’ experience we pride ourselves on our show homes landscaping to give a lasting impression to the potential customers for development homes."/>
      <ImageWithText
        maxWidth="max-w-6xl"
        image={data.showHome.childImageSharp.fluid}
        title="Over 20 years experience."
        text={
          <p>
            Installing Show Home gardens is where we excel. For over 20 years Sid Bibby Turf and Landscape has been installing excellent landscaping to development sales area for many different companies.
            <br/><br/>
            We understand that creating a lasting impression is so important so we provide a full design for each scheme, because a show home must be exactly that; to show what kind of fabulous homes you are building, whilst a garden cannot distract from a well-built house, first impressions do matter. So, a well-designed and well-presented show garden, gives your customer the idea and incentives to own that home.
          </p>
        }
      />
      <ImageWithText
      imageRight
        maxWidth="max-w-6xl"
        image={data.showHome2.childImageSharp.fluid}
        title="Maintenance & ongoing care."
        text={
          <p>
            At Sid Bibby’s we can also set up a maintenance package for the sales area. We will advise and install seasonal bedding and all other elements to the garden looking fresh.
            <br/><br/>
            We also are very thoughtful about designing the initial cabin area that the development site will use to show what theme will potentially run throughout site. Of course, following the cabin the sales area and street scene must create the idea of customer living there.
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
