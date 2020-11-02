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
        title="Patios & Driveways"
        keywords={[`Paving Cambridgeshire`, `Local Paving Laid`, `Paving Blocks`, `Paving Landscaping Cambridgeshire`, 'Patios & Driveways Cambridgeshire', 'Patio Cambridgeshire']}
      />
      <SubHero 
        subTitle="SERVICES"
        title="Patios & Driveways"
        color="#ffffff"
        bgImage={data.headerBG.childImageSharp.fluid}
      />
      <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8 mb-8 md:mb-16">
        <Breadcrumb location={location} crumbLabel="PAVING" />
      </div>
      <Intro text="We offer natural paving, resin, driveway blocks and many more! We use exceptionally reliable companies such as Talasey and Marshalls to supply our wide range of options to help you choose your desired look for the garden." />
      <ImageWithText 
        maxWidth="max-w-6xl"
        align="items-start"
        image={data.turfing.childImageSharp.fluid}
        image2={data.driveway.childImageSharp.fluid}
        text={
          <p>
            We offer a supply and lay service using natural paving, porcelain, resin, driveway blocks and much more! 
            <br/><br/>
            We have worked with exceptionally reliable companies such as Talasey Group and Marshalls for several years and built a great working relationship. They stock a wide range of products to help you redesign your perfect garden or driveway. 
            <br/><br/>
            Please note, <strong>we DO NOT provide a SUPPLY ONLY service</strong>. Please view our supplier’s websites which may assist in helping find the stockist closest to you if you require this service.
            <br/><br/>
            <strong>We also support local companies as much as we can.</strong>
            <br/><br/>
            The patio you choose sets the trend for the rest of the garden, i.e. levels, shapes and the overall design concept. Once you have this in place, the rest of the garden will evolve easily. Therefore, the patio is always the first structure to be put in place in the garden.
            <br/><br/>
            If you are looking to redesign the front area of your house, a resin driveway provides a contemporary look and can complement any type of house! Equally, the right driveway block can really make your house stand out!
            <br/><br/>
            We can supply and lay almost any type of paving you require. By creatively contrasting colours together using paving slabs and blocks, you can create a wonderful looking patio or driveway. Our landscaping specialists will guide you all the way from design to construction and to give you the most amazing completed design! 
            <br/><br/>
            Customers are welcome to come and view most products in our show gardens, open from Monday-Friday 10am-4pm. We encourage to call our office to book a slot to ensure we have a member of staff available to show you around.
            <br/><br/>
            <strong>Sustainability</strong> <br/>
            Ethically sourced materials, an area Sid Bibby’s is expanding to customers who wish to be made aware of the issues of supply of stone from overseas when they are choosing paving. Through the Ethical Trading Initiative (ETI) we have learnt how to respond to our customers guaranteeing their choice is right.
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
    headerBG: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    turfing: file(relativePath: { eq: "patio-service-page-image.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    driveway: file(relativePath: { eq: "gravel-drive.jpg" }) {
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
