import React from "react"
import { graphql, StaticQuery } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Hero from '../components/index/hero/hero';
import TrustPilotBlock from '../components/trustpilot-block/trustpilot-block';
import SectorCta from '../components/sector-cta/sector-cta';
import Heading from '../components/heading/heading';
import Button from '../components/button/button';
import ServiceSlider from '../components/service-slider/service-slider';
import List from '../components/list/list';
import AboutIntro from '../components/index/about-intro/about-intro';
import Logos from '../components/logos/logos';
import WorkIntro from '../components/work-intro/work-intro';
import InstaFeed from '../components/insta-feed/insta-feed';

import sidbibbyLogo from '../images/logo.png';
import logo1 from '../images/Taylor-wimpy.jpg';
import logo2 from '../images/Barratt-homes.jpg';
import logo3 from '../images/crest-nicholson.jpg';
import logo4 from '../images/Bovis-homes.jpg';
import logo5 from '../images/Morris.jpg';
import logo6 from '../images/matthew-homes.jpg';
import logo7 from '../images/Linden-homes.jpg';


const BlogIndex = ({ data }, location) => {
  let domesticBg = data.domestic.childImageSharp.fluid, 
    commercialBg = data.commercial.childImageSharp.fluid;
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
      image: data.resin.childImageSharp.fluid
    },
    {
      image: data.showHome.childImageSharp.fluid,
      title: 'SHOW HOMES',
      link: '/services/show-homes',
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
  let aboutBg = data.aboutbg.childImageSharp.fluid;
  let logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7
  ];
  let ourWork = [
    {
      title: 'Modern BBQ Area',
      image: data.workone.childImageSharp.fluid,
      tag: 'domestic'
    },
    {
      title: 'Decking, Planting & Turf',
      image: data.worktwo.childImageSharp.fluid,
      tag: 'commercial'
    },
    {
      title: 'Garden Design',
      image: data.workthree.childImageSharp.fluid,
      tag: 'domestic'
    },
  ]
  return (
    <Layout>
      <SEO
        title="Landscaping Services in Sutton Cambridgeshire"
        keywords={[`Landscaping Cambridgeshire`, `Turf Cambridgeshire`, `Landscapers Cambridgeshire`, `Paving Cambridgeshire`]}
      />
      <Hero 
        title="EXPERTS IN LANDSCAPING AND TURF" 
        image={data.hero.childImageSharp.fluid} 
        text="Sid Bibby Turf & Landscaping Ltd is a well-established landscaping company based in Sutton Cambridgeshire, that has built up an enviable reputation since 1998. We pride ourselves on the best customer service and a professional job whilst maintaining the highest quality work. We provide services to East Anglia area, including Milton Keynes."
        button1={{
          text: 'FREE QUOTE',
          link: '/quote'
        }}
        button2={{
          text: 'SERVICES',
          link: '/services'
        }}
      />
      <TrustPilotBlock 
        title="CHECK OUT OUR REVIEWS"
        text={<span>Rated 4.6/5 <b>"Excellent"</b> <br/>on facebook reviews.</span>}
        link={{
          text: "View All",
          to: 'https://www.facebook.com/sidbibbylandscaping/reviews/',
          color: '#D8574A'
        }}
      />
      <div className="flex flex-wrap" >
        <div className="w-full md:w-1/2">
          <SectorCta 
            image={domesticBg} 
            title="DOMESTIC" 
            subTitle="LANDSCAPING & TURF"
            link={{
              text: "SEE ALL DOMESTIC SERVICES",
              to: "/domestic",
              color: '#ffffff'
            }}
          />
        </div>
        <div className="w-full md:w-1/2">
          <SectorCta 
            image={commercialBg} 
            title="COMMERCIAL" 
            subTitle="LANDSCAPING & TURF"
            link={{
              text: "SEE ALL COMMERCIAL SERVICES",
              to: "/commercial",
              color: '#ffffff'
            }}
          />
        </div>
      </div>
      <div className="relative home-slider mb-16 md:mb-24">
        <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8 justify-between">
          <div className="w-full lg:w-1/2 lg:pb-56 lg:pt-56 py-12 relative z-10 lg:max-w-xs text-center lg:text-left">
            <Heading 
              className="mb-4"
              title="OUR SERVICES"
              text="Take a look at some of the services we have to offer"
            />
            <Button 
              text="ALL SERVICES"
              link="/services"
              internal
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center w-full lg:w-2/3 z-10 top-0 relative bottom-0 right-0 lg:absolute max-w-screen-xl pb-16 lg:pb-0">
            <ServiceSlider 
              services={services}
            />
          </div>
        <div className="bg-gray top-0 bottom-0 left-0 w-full lg:w-1/2 absolute" />
      </div>
      <Logos 
        title="CLIENTS WE LOVE"
        text="Check out some of our many happy clients"
        logos={logos}
      />
      <AboutIntro 
        title="WHY CHOOSE"
        logo={sidbibbyLogo}
        text={<div>
          <p className="leading-7 max-w-2xl mb-12">
            We believe when it comes to landscaping, your ideas and our expertise put together can add bring no end of inspiration to your garden and ensure that you and your loved ones enjoy your backyard spots. If you have an area outdoors, it might be worth incorporating the help of one of Sid bibby’s experienced landscapers to bring out the best in your property.
            <br/><br/>
            We have provided services since 1998 and trusted by domestic and commercial companies to ensure we provide the most inspiring end product, no matter how big or small.
            <br/><br/>
            <strong>We are a Marshalls accredited Landscape Contractor, SMAS accredited, CQMS Safety Scheme certified and fully insured, giving you peace of mind.</strong>
          </p>
          <List 
            title="WHY WE STAND OUT:"
            listItems={[
              'Award-winning service comes as standard.',
              'Specialists in the trade',
              'Small enough to care, large enough to deliver an excellent finished product',
              'Fantastic customer support',
              'Flexible & affordable pricing',
              'Provide excellent customer service before, during and after works'
            ]}
          />
        </div>}
        image={aboutBg}
      />
      <WorkIntro 
        title="OUR WORK"
        text="Take a look at some of out recent projects"
        works={ourWork}
        button={{
          text: "VIEW MORE",
          to: "/our-work"
        }}
      />
      <InstaFeed token="IGQVJVbGJZASmZAlNmtCUGx4S2RFVV9DMlhaYmlqMDB5ZAXRoQXhhU2F2N2o2bGFxWW1rWUlXLXNMbVl6YXdVM1U3SjU0d3otTUhkNkVvM2d6eURZAeXBUb1dHakJ2cVhKTTg1R011OVVoTk1zeEU0cXJtSgZDZD" />

    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    hero: file(relativePath: { eq: "front-page-header.jpg" }) {
      childImageSharp {
        fluid(quality: 60, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    domestic: file(relativePath: { eq: "domestic-intro-image.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    commercial: file(relativePath: { eq: "commercial-intro-image.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
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
    multilvl: file(relativePath: { eq: "garden-design-intro.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 600) {
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
    resin: file(relativePath: { eq: "resin.jpg" }) {
      childImageSharp {
          fluid(quality: 100, maxWidth: 1000) {
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
    aboutbg: file(relativePath: { eq: "why-choose-sid-bibby.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    workone: file(relativePath: { eq: "domestic/Modern-BBQ-Area.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    worktwo: file(relativePath: { eq: "commercial/Turf With Surrounding Planting.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    workthree: file(relativePath: { eq: "domestic/Garden Design.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 600) {
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
