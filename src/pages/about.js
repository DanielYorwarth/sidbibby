import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import SubHero from '../components/sub-hero/sub-hero';
import TrustPilotBlock from '../components/trustpilot-block/trustpilot-block';
import ImageWithText from '../components/layout/image-with-text/image-with-text';
import SideMenu from '../components/side-menu/side-menu';
import CtaBlock from '../components/cta-block/cta-block';
import List from '../components/list/list';
import ListItem from '../components/list-item/list-item';
import AwardsWrapper from '../components/awards-wrapper/awards-wrapper';

import logo from '../images/logo.svg';

const BlogIndex = ({ data }, location) => {
  return (
    <Layout>
      <SEO
        title="About"
        keywords={[`About SidBibby Landscaping & Turf`]}
      />
      <SubHero 
        subTitle="SIDBIBBY"
        title="ABOUT"
        color="#ffffff"
        bgImage={data.headerBG.childImageSharp.fluid}
      />
      <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8 mb-8 md:mb-16">
        <Breadcrumb location={location} crumbLabel="ABOUT" />
      </div>
      <div className="max-w-screen-2xl mx-auto flex flex-wrap items-end mb-12 md:mb-24">
        <div className="w-full md:w-2/3 mb-10 md:mb-0">
          <ImageWithText 
            maxWidth="max-w-screen-2xl"
            align="items-end"
            image={data.about.childImageSharp.fluid}
            text={
              <p>
                <strong>Sid Bibby Turf & Landscaping Ltd</strong> is a well-established landscaping company based in Sutton Cambridgeshire. We have built up an enviable reputation since 1998. Sid Bibby started this company with his wife, and it has only grown since. We are certainly a family orientated business and pleased to have driven employees some of whom have been with us for over 10 years who we treat like family. We pride ourselves on the best customer service and maintain the highest quality of work. 
              </p>
            }
            noMargin
          />
        </div>
        <div className="md:pl-8 lg:pl-16 px-4 md:px-8 w-full md:w-1/3">
          <SideMenu
            menuItems={[
              {
                text: "ABOUT",
                to: "/about"
              },
              {
                text: "FAQ",
                to: "/about/faq"
              },
              {
                text: "TURF CARE",
                to: "/about/turf-care"
              },
              {
                text: "CONTACT",
                to: "/contact"
              },
            ]}
          />
        </div>
      </div>
      <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8 mb-12 md:mb-16">
        <div className="w-full md:w-1/3 md:pr-8">
          <h5 className="font-semibold text-lg mb-5">SID BIBBY PROUDLY MAINTAIN THIRD PARTY ACCREDITATION INCLUDING:</h5>
          <ListItem text="ISO9001 - Quality Management System" />
          <ListItem text="ISO14001 - Environment Management System" />
          <ListItem text="ISO45001 - OH&S Management System" />
        </div>
        <div className="w-full md:w-2/3">
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
        </div>
      </div>
      <AwardsWrapper  
        title="AWARDS"
        text="Take a look at some of the awards we've received"
        awards={[
          {
            title: "Pride in The Job Awards",
            text: "Taylor Wimpey South Midlands Castlemead Pitstone 2010"
          },
          {
            title: "Pride in The Job Awards",
            text: "Taylor Wimpey East Anglia Lion Mills Soham 2010"
          },
          {
            title: "Pride in The Job Awards",
            text: "Taylor Wimpey East Anglia-Knights Park, St Neots-22nd August 2014"
          },
          {
            title: "Pride in The Job Awards",
            text: "Crest Nicholson 2019 & 2020"
          },
        ]}
      />
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
        text={<span>Rated 4.6/5 <b>"Excellent"</b> <br/>on facebook reviews.</span>}
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
    about: file(relativePath: { eq: "seating-area.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 500) {
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
