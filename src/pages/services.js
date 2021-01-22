import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import SubHero from '../components/sub-hero/sub-hero';
import TrustPilotBlock from '../components/trustpilot-block/trustpilot-block';
import Intro from '../components/intro/intro';
import ServicesIntro from '../components/services-intro/services-intro';


const BlogIndex = ({ data }, location) => {

  let services = [
    {
      image: data.turfing.childImageSharp.fluid,
      title: 'TURFING',
      text: 'Our Turf is from a quality local turf supplier, that have carefully grown and manage Turf production for three generations of experience.',
      link1: {
        text: 'FREE QUOTE',
        to: '/quote'
      },
      link2: {
        text: 'Learn more',
        to: '/services/turfing'
      },
    },
    {
      image: data.paving.childImageSharp.fluid,
      title: 'PAVING',
      text: 'We offer natural paving, resin, driveway blocks and many more! We use exceptionally reliable companies such as Talasey and Marshalls to supply our wide range of options to help you choose your desired look for the garden.',
      link1: {
        text: 'FREE QUOTE',
        to: '/quote'
      },
      link2: {
        text: 'Learn more',
        to: '/services/paving'
      },
    },
    {
      image: data.timber.childImageSharp.fluid,
      title: 'DECKING',
      text: 'Decking can be built to be any design and specification which makes it a perfect versatile garden feature, favourite seating spot or an extended living area right outside your door.',
      link1: {
        text: 'FREE QUOTE',
        to: '/quote'
      },
      link2: {
        text: 'Learn more',
        to: '/services/decking'
      },
    },
    {
      image: data.planting.childImageSharp.fluid,
      title: 'PLANTING',
      text: 'We have used local nurseries for years and build a strong relationship with the best, so you have endless amount of options to add different colour, shapes, textures and features in your garden.',
      link1: {
        text: 'FREE QUOTE',
        to: '/quote'
      },
      link2: {
        text: 'Learn more',
        to: '/services/planting'
      },
    },
    {
      image: data.fencing.childImageSharp.fluid,
      title: 'FENCING',
      text: 'At Sid Bibby’s we have an extensive range of garden fencing in popular styles to construct a secure perimeter with fencing and fence posts, make your garden more private with trellis and screening or create an attractive new gateway for your front or back garden.',
      link1: {
        text: 'FREE QUOTE',
        to: '/quote'
      },
      link2: {
        text: 'Learn more',
        to: '/services/fencing'
      },
    },
    {
      image: data.showHome.childImageSharp.fluid,
      title: 'SHOW HOMES',
      text: 'With over 20 years’ experience we pride ourselves on our show homes landscaping to give a lasting impression to the potential customers for development homes.',
      link1: {
        text: 'FREE QUOTE',
        to: '/quote'
      },
      link2: {
        text: 'Learn more',
        to: '/services/show-homes'
      },
    },
    {
      image: data.showHome.childImageSharp.fluid,
      title: 'RESIN',
      text: 'Resin is a great, SUDS compliant product that is used on driveways and can be incorporated into garden design which lasts up to 25-years.',
      link1: {
        text: 'FREE QUOTE',
        to: '/quote'
      },
      link2: {
        text: 'Learn more',
        to: '/services/resin'
      },
    },
    {
      image: data.multilvl.childImageSharp.fluid,
      title: 'DESIGN SERVICE',
      text: 'We work with top garden designers who can deliver unique designs from your initial brief. Getting your ideas onto paper is the best way forward in making sure you get the best from your garden!',
      link1: {
        text: 'FREE QUOTE',
        to: '/quote'
      },
      link2: {
        text: 'Learn more',
        to: '/services/design-service'
      },
    },
    {
      image: data.lowmaint.childImageSharp.fluid,
      title: 'ARTIFICIAL TURF',
      text: 'Artificial turf is a great alternative to natural lawn for anyone that it after a garden that can be easily maintained. We have wide variety of options for artificial turf from the softness of the turf, to the grade, all can be chosen by you give you exactly what you desire.',
      link1: {
        text: 'FREE QUOTE',
        to: '/quote'
      },
      link2: {
        text: 'Learn more',
        to: '/services/artificial-turf'
      },
    },
    {
      image: data.waterfeatures.childImageSharp.fluid,
      title: 'WATER FEATURES',
      text: 'We work with domestic and commercial clients to create ponds and water features to add more texture, colouring or wildlife for all nature lovers.',
      link1: {
        text: 'FREE QUOTE',
        to: '/quote'
      },
      link2: {
        text: 'Learn more',
        to: '/services/water-features'
      },
    },
  ];


  return (
    <Layout>
      <SEO
        title="Services"
        keywords={[`Landscaping Services Cambridgeshire`, `Landscaping`, `Landscaping Services Ely`, `Landscaping Haddenham`, `East Anglia Landscaping Services`]}
      />
      <SubHero 
        subTitle="TURF AND LANDSCAPING"
        title="SERVICES"
        color="#044122"
      />
      <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8 mb-8 md:mb-16">
        <Breadcrumb location={location} crumbLabel="Services" />
      </div>
      <Intro text="At Sid Bibby Turf and Landscaping we are proud of the standard we hold across all our services. Whether it is the product or the labour, we pride ourselves in offering clients the best service as possible." />
      <ServicesIntro 
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
    domestic: file(relativePath: { eq: "placeholder.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    turfing: file(relativePath: { eq: "turf-intro-image.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    paving: file(relativePath: { eq: "paving-intro-image.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    timber: file(relativePath: { eq: "decking-intro-image.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    planting: file(relativePath: { eq: "planting-intro-image.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    fencing: file(relativePath: { eq: "fencing-image.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    waterfeatures: file(relativePath: { eq: "water-feature-and-trees.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    multilvl: file(relativePath: { eq: "garden-design-intro.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    lowmaint: file(relativePath: { eq: "art-turf.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    showHome: file(relativePath: { eq: "commercial/Decking-planting-and-turf.jpg" }) {
      childImageSharp {
          fluid(quality: 50, maxWidth: 1000) {
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
