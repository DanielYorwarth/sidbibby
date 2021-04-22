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
import Logos from '../components/logos/logos';
import Heading from '../components/heading/heading';
import CtaBlock from '../components/cta-block/cta-block';

import logo1 from '../images/Taylor-wimpy.jpg';
import logo2 from '../images/Barratt-homes.jpg';
import logo3 from '../images/crest-nicholson.jpg';
import logo4 from '../images/Bovis-homes.jpg';
import logo5 from '../images/Morris.jpg';
import logo6 from '../images/matthew-homes.jpg';
import logo7 from '../images/Linden-homes.jpg';

const BlogIndex = ({ data }, location) => {

  let services = [
    {
      title: "TURFING",
      link: "/services/turfing",
      image: data.turfing.childImageSharp.fluid
    },
    {
      title: "PLANTING",
      link: "/services/planting",
      image: data.planting.childImageSharp.fluid
    },
    {
      title: "SHOW HOMES",
      link: "/services/show-homes",
      image: data.showHome.childImageSharp.fluid
    }
  ];

  let logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7
  ];

  return (
    <Layout>
      <SEO
        title="Commercial Landscaping Services"
        keywords={[`Commercial Landscaping Cambridgeshire`, `Commercial Landscaping`, `Site Landscaping`, `Landscaping Company Cambridgeshire`, `Landscaping Firm Cambridgeshire`]}
      />
      <SubHero 
        subTitle="TURF AND LANDSCAPING"
        title="COMMERCIAL"
        color="#044122"
      />
      <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8 mb-8 md:mb-16">
        <Breadcrumb location={location} crumbLabel="Commercial" />
      </div>
      <Intro text="We have developed strong relationships with our commercial client base, which includes leading construction and house building companies, such as Taylor Wimpey south midlands and Taylor Wimpey East Anglia, Barratt Homes Cambridge, Barratt Homes Eastern, Crest Nicholson, Morris Homes, Linden homes, Bovis Homes, Mathew Homes, and have worked on a wide range of commercial landscaping projects." />
      <ImageWithText 
        maxWidth="max-w-6xl"
        image={data.domestic.childImageSharp.fluid}
        title="In-house managed teams."
        text={
          <p>
            Our landscaping teams offer comprehensive landscaping services, with each one tailored towards your specific commercial environment. The commercial landscape division has its own mangers, so each project is diligently managed by its own by a trained site supervisor, and our commercial landscape teams work with precise attention to detail to ensure an efficient, professional finish is delivered on time and within budget.
          </p>
        }
      />
      <ImageWithText 
        imageRight
        maxWidth="max-w-6xl"
        image={data.commercial2.childImageSharp.fluid}
        title="No project is too big or small."
        text={
          <p>
            We have worked with commercial clients big and small, offering the same high level of dedication and expertise to every project. Our experienced management team are with you every step of the way to ensure your commercial landscaping project has all the support you need to make it a complete success.
          </p>
        }
      />
      <ImageWithText 
        maxWidth="max-w-6xl"
        image={data.commercial3.childImageSharp.fluid}
        title="We're always on time."
        text={
          <p>
            As a company we are acutely aware of house completions and that landscaping is a vital part of this so we ensure they are always completed on times.
            <br/><br/>
            For more information on our commercial landscape construction, installation and maintenance services, <Link className="text-secondary font-bold hover:opacity-75 duration-300"  to="/contact">contact us today.</Link>
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
      <div className="text-center">
        <Logos 
          title="OUR CLIENTS"
          logos={logos}
        />
      </div>
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-24 px-4 md:px-8">
        <Heading 
          className="mb-4"
          title="WHO ARE OUR SUPPLIERS?"
          text="Talasay Group, Marshalls, Travis Perkins, Ridgeons, Jewsons, AVS Fencing, we like to support local business as well such as Fen Farm Supplies, D & J Transport and much more."
        />
      </div>
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
    domestic: file(relativePath: { eq: "commercial-service-page.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    commercial2: file(relativePath: { eq: "feature-patio.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    commercial3: file(relativePath: { eq: "commercial/Decking-planting-and-turf.jpg" }) {
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
    planting: file(relativePath: { eq: "planting-intro-image.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showHome: file(relativePath: { eq: "commercial/Decking-planting-and-turf.jpg" }) {
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
