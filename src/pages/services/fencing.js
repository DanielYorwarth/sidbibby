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
        title="Fencing"
        keywords={[`Fencing Cambridgeshire`, `Local Garden Fencing`]}
      />
      <SubHero 
        subTitle="SERVICES"
        title="FENCING"
        color="#ffffff"
        bgImage={data.headerBG.childImageSharp.fluid}
      />
      <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8 mb-8 md:mb-16">
        <Breadcrumb location={location} crumbLabel="FENCING" />
      </div>
      <Intro text="At Sid Bibby’s we have an extensive range of garden fencing in popular styles to construct a secure perimeter with fencing and fence posts, make your garden more private with trellis and screening or create an attractive new gateway for your front or back garden."/>
      <ImageWithText
        maxWidth="max-w-6xl"
        image={data.turfing.childImageSharp.fluid}
        title="Create your own private hub"
        text={
          <p>
            At Sid Bibby’s we have an extensive range of garden fencing in popular styles to construct a secure perimeter.
            <br/><br/>
            Make your garden a private hub with trellis and screening.
            <br/><br/>
            Fencing provides the framework to your garden and property. We have many years’ experience in the installation of fencing and gates. A new back gate can update the look or the security for your home, to a complete installation of new European screens around your boundary. The choices of fencing and gates is vast, we have samples that you can view in our show gardens where you can see them in a natural environment against planting and slabs. 
          </p>
        }
      />
       <ImageWithText
        imageRight
        maxWidth="max-w-6xl"
        image={data.fencing.childImageSharp.fluid}
        title="Contemporary Screens & Pergolas "
        text={
          <p>
            A new popular form of fencing is the contemporary screen, which really sets the scene for your garden.
            <br/><br/>
            Pergolas are really popular, also with an additional roof to create an all weather area to extend your garden use.
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
    headerBG: file(relativePath: { eq: "iron-fence-and-platning.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    turfing: file(relativePath: { eq: "fencing-image.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fencing: file(relativePath: { eq: "fencing-service-page.jpg" }) {
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
