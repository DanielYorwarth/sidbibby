import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import SubHero from '../components/sub-hero/sub-hero';
import TrustPilotBlock from '../components/trustpilot-block/trustpilot-block';
import Intro from '../components/intro/intro';
import Work from '../components/work/work';
import CtaBlock from '../components/cta-block/cta-block';


const BlogIndex = ({ data }, location) => {
  console.log(data)
  let ourWork = [
    {
      title: 'SWIRL PATIO',
      image: data.workone.childImageSharp.fluid,
      tag: 'domestic'
    },
    {
      title: 'BUSINESS PARK',
      image: data.worktwo.childImageSharp.fluid,
      tag: 'commercial'
    },
    {
      title: 'GARDEN',
      image: data.workthree.childImageSharp.fluid,
      tag: 'domestic'
    },
    {
      title: 'WATER FEATURE',
      image: data.workthree.childImageSharp.fluid,
      tag: 'domestic'
    },
    {
      title: 'SWIRL PATIO',
      image: data.workone.childImageSharp.fluid,
      tag: 'domestic'
    },
    {
      title: 'BUSINESS PARK',
      image: data.worktwo.childImageSharp.fluid,
      tag: 'commercial'
    },
    {
      title: 'GARDEN',
      image: data.workthree.childImageSharp.fluid,
      tag: 'domestic'
    },
    {
      title: 'WATER FEATURE',
      image: data.workthree.childImageSharp.fluid,
      tag: 'domestic'
    }
  ]
  return (
    <Layout>
      <SEO
        title="Our Work"
      />
      <SubHero 
        subTitle="SIDBIBBY"
        title="OUR WORK"
        color="#ffffff"
        bgImage={data.headerBG.childImageSharp.fluid}
      />
      <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8 mb-8 md:mb-16">
        <Breadcrumb location={location} crumbLabel="OUR WORK" />
      </div>
      <Intro text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      <div className="max-w-screen-2xl mx-auto mb-12 md:mb-24 px-2 md:px-4">
        {ourWork &&
          <div className="flex flex-wrap mb-10">
            {ourWork.map((work, i) => (
              <div key={i} className="w-full md:w-1/2 lg:w-1/4 px-2 sm:px-4 mb-4 md:mb-8">
                <Work {...work} />
              </div>
            ))}
          </div>
        }
      </div>
      <CtaBlock 
        text="GET A FREE QUOTE OR CALL US"
        phone="01353 777 909"
        link={{
          text: "FREE QUOTE",
          to: "/quote"
        }}
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
        fluid(quality: 100, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    workone: file(relativePath: { eq: "placeholder.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    worktwo: file(relativePath: { eq: "commercial-landscaping-cambridgeshire-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    workthree: file(relativePath: { eq: "water-feautres-cambridgeshire.jpg" }) {
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
