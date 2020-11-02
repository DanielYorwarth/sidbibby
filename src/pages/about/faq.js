import React from "react"
import { graphql, StaticQuery } from "gatsby"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'

import Layout from "../../components/layout/layout"
import SEO from "../../components/seo"
import SubHero from '../../components/sub-hero/sub-hero';
import Accordian from '../../components/accordian/accordian';
import TrustPilotBlock from '../../components/trustpilot-block/trustpilot-block';
import CtaBlock from '../../components/cta-block/cta-block';


const BlogIndex = ({ data }, location) => {
  return (
    <Layout>
      <SEO
        title="FAQ"
        keywords={[`SibBibby FAQs`, `SidBibby Help`, `SidBibby Questions`]}
      />
      <SubHero 
        subTitle="ABOUT"
        title="FAQs"
        color="#044122"
      />
      <div className="flex flex-wrap max-w-screen-2xl mx-auto px-4 md:px-8 mb-8 md:mb-16">
        <Breadcrumb location={location} crumbLabel="FAQs" />
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-12 md:mb-24">
        <Accordian 
          questions={[
            {
            title: "Can I collect turf? Where are your fields?",
            text: "A - We do not offer a supply only service for turf. However, we can direct you to our neighbours CTN turf (01353 778404). We do offer a supply and lay service, please fill out our quote form on our contact us page."
            },
            {
            title: "Why has my lawn developed large dry gaps between the rolls and looks like it is shrinking?",
            text: "A - This means your turf needs more water. Please see our turf care guide for instructions."
            },
            {
            title: "Why does my lawn uneven and has marks on it?",
            text: "A - This could be where someone has walked on the new turf with the first 2-3 weeks, or it could be down to the soil beneath. Please contact us for advice."
            },
            {
            title: "Do we offer a warranty for our work?",
            text: "A - We offer a warranty; however, this can vary on the product. Please call or email us as there are a lot of variables that can contribute to this."
            },
            {
            title: "When is the best time to carry our grass seeding?",
            text: "A - The best time to carry out grass seeding is April to June, and September to October- weather permitting."
            },
            {
            title: "How often should I water my newly laid turf?",
            text: "A - This depends on the time of year that the turf is laid. Usually, turf should not be allowed to dry out and should be kept watered until it has fully rooted. Please refer to our turf care guide for advice depending on the time of year."
            },
          ]}
        />
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
    headerBG: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    turfing: file(relativePath: { eq: "turfing-cambridgeshire.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1200) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    placeholder: file(relativePath: { eq: "palceholder-4.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1200) {
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
