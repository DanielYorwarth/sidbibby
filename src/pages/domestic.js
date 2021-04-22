import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import SubHero from '../components/sub-hero/sub-hero';
import TrustPilotBlock from '../components/trustpilot-block/trustpilot-block';
import Intro from '../components/intro/intro';
import ImageWithText from '../components/layout/image-with-text/image-with-text';
import ServicesList from '../components/services-list/services-list';
import CtaBlock from '../components/cta-block/cta-block';

const BlogIndex = ({ data }, location) => {

  let services = [
    {
      title: "TURFING",
      link: "/services/turfing",
      image: data.turfing.childImageSharp.fluid
    },
    {
      title: "PAVING",
      link: "/services/paving",
      image: data.paving.childImageSharp.fluid
    },
    {
      title: "DECKING",
      link: "/services/decking",
      image: data.timber.childImageSharp.fluid
    },
    {
      title: "PLANTING",
      link: "/services/planting",
      image: data.planting.childImageSharp.fluid
    },
    {
      title: "FENCING",
      link: "/services/fencing",
      image: data.fencing.childImageSharp.fluid
    },
    {
      title: "RESIN",
      link: "/services/resin",
      image: data.waterfeatures.childImageSharp.fluid
    },
    {
      title: "DESIGN SERVICE",
      link: "/services/design-service",
      image: data.multilvl.childImageSharp.fluid
    },
    {
      title: "ARTIFICIAL TURF",
      link: "/services/artificial-turf",
      image: data.lowmaint.childImageSharp.fluid
    }
  ];


  return (
    <Layout>
      <SEO
        title="Domestic Garden Landscaping"
        keywords={[`Domestic Landscaping Cambridgeshire`, `Local Landscaper`, `Garden Improvments`, `Garden Landscaping Cambridgeshire`]}
      />
      <SubHero 
        subTitle="TURF AND LANDSCAPING"
        title="DOMESTIC"
        color="#044122"
      />
      <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8 mb-8 md:mb-16">
        <Breadcrumb location={location} crumbLabel="Domestic" />
      </div>
      <Intro text="We are proud to offer our expertise in hard and soft landscape installation to private customers. " />
      <ImageWithText 
        maxWidth="max-w-6xl"
        image={data.intro.childImageSharp.fluid}
        title="Professional & expert landscapers."
        text={
          <p>
            We are proud to offer expertise in hard and soft landscape installation to domestic customers.
            <br/><br/>
            At Sid Bibby’s we can help create your dream garden with our team of experienced landscapers.
            <br/><br/>
            We understand how important an attentive and focused approach is when it comes to creating the ideal garden space. 
          </p>
        }
      />
       <ImageWithText 
        imageRight
        maxWidth="max-w-6xl"
        image={data.domestic.childImageSharp.fluid}
        title="Flexible and affordable."
        text={
          <p>
            We can do small in-house landscape design service, but we do have strong relationships with leading landscape designers and architects who we work well with.
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
      <ServicesList 
        title="OUR SERVICES"
        text="Take a look at some of the services we have to offer"
        services={services}
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
    domestic: file(relativePath: { eq: "domestic-service-page.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    turfing: file(relativePath: { eq: "turf-intro-image.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    intro: file(relativePath: { eq: "domestic/Seating-BBQ-area.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    paving: file(relativePath: { eq: "paving-intro-image.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    timber: file(relativePath: { eq: "decking-intro-image.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    planting: file(relativePath: { eq: "planting-intro-image.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fencing: file(relativePath: { eq: "fencing-image.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    waterfeatures: file(relativePath: { eq: "resin.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    multilvl: file(relativePath: { eq: "garden-design-intro.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    lowmaint: file(relativePath: { eq: "art-turf.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 600) {
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
