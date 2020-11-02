import React, {useEffect} from "react"
import { graphql, StaticQuery } from "gatsby"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import SimpleLightbox from "simplelightbox";

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import SubHero from '../components/sub-hero/sub-hero';
import TrustPilotBlock from '../components/trustpilot-block/trustpilot-block';
import Intro from '../components/intro/intro';
import Work from '../components/work/work';
import CtaBlock from '../components/cta-block/cta-block';


const BlogIndex = ({ data }, location) => {
  useEffect(() => {
    let lightbox = new SimpleLightbox(`.workgallery a`, { /* options */ });
  }, [])
  let ourWork = [
    {
      title: 'Modern BBQ Area',
      image: data.workoneD.childImageSharp.fluid,
      tag: 'domestic'
    },
    {
      title: 'Block Paving',
      image: data.worktwoD.childImageSharp.fluid,
      tag: 'domestic'
    },
    {
      title: 'Decking, Planting & Turf',
      image: data.workone.childImageSharp.fluid,
      tag: 'commercial'
    },
    {
      title: 'Garden Design',
      image: data.workeigthD.childImageSharp.fluid,
      tag: 'domestic'
    },
    {
      title: 'Gravel Water feature',
      image: data.worksix.childImageSharp.fluid,
      tag: 'commercial'
    },

    {
      title: 'Modern Garden',
      image: data.worktwelveD.childImageSharp.fluid,
      tag: 'domestic'
    },
    {
      title: 'Feature turf',
      image: data.workfour.childImageSharp.fluid,
      tag: 'commercial'
    },
    {
      title: 'Gravel Drive',
      image: data.worknineD.childImageSharp.fluid,
      tag: 'domestic'
    },
    {
      title: 'Porcelain Paving',
      image: data.workelevenD.childImageSharp.fluid,
      tag: 'domestic'
    },
    {
      title: 'Turf With Surrounding Planting',
      image: data.workthree.childImageSharp.fluid,
      tag: 'commercial'
    },
    {
      title: 'leveled decking',
      image: data.workfive.childImageSharp.fluid,
      tag: 'commercial'
    },
    {
      title: 'Raised Planting beds',
      image: data.workfourD.childImageSharp.fluid,
      tag: 'domestic'
    },
    {
      title: 'Bogola',
      image: data.worktwo.childImageSharp.fluid,
      tag: 'commercial'
    },
    {
      title: 'Feature patio',
      image: data.workseven.childImageSharp.fluid,
      tag: 'commercial'
    },
    {
      title: 'seating area',
      image: data.worksixD.childImageSharp.fluid,
      tag: 'domestic'
    },
    {
      title: 'WATER FEATURE',
      image: data.workeigth.childImageSharp.fluid,
      tag: 'commercial'
    },
    {
      title: 'Feature plants',
      image: data.workten.childImageSharp.fluid,
      tag: 'commercial'
    },
    {
      title: 'Feature frame',
      image: data.worksevenD.childImageSharp.fluid,
      tag: 'domestic'
    },
    {
      title: 'Decking and path',
      image: data.worktwelve.childImageSharp.fluid,
      tag: 'commercial'
    },
    {
      title: 'Feature Seating',
      image: data.workthreeD.childImageSharp.fluid,
      tag: 'domestic'
    },
    {
      title: 'Steps',
      image: data.workfiveD.childImageSharp.fluid,
      tag: 'domestic'
    },
    {
      title: 'Cylinder water feature',
      image: data.workeleven.childImageSharp.fluid,
      tag: 'commercial'
    },
    {
      title: 'Turf',
      image: data.worktenD.childImageSharp.fluid,
      tag: 'domestic'
    },
    {
      title: 'turf',
      image: data.worknine.childImageSharp.fluid,
      tag: 'commercial'
    },
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
      <div className="workgallery max-w-screen-2xl mx-auto mb-12 md:mb-24 px-2 md:px-4">
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
    workone: file(relativePath: { eq: "commercial/Decking-planting-and-turf.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    worktwo: file(relativePath: { eq: "commercial/Bogola.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    workthree: file(relativePath: { eq: "commercial/Turf With Surrounding Planting.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    workfour: file(relativePath: { eq: "commercial/Feature turf.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    workfive: file(relativePath: { eq: "commercial/leveled decking.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    worksix: file(relativePath: { eq: "commercial/Gravel Water feature.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    workseven: file(relativePath: { eq: "commercial/Feature patio.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    workeigth: file(relativePath: { eq: "commercial/Water feature 1.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    worknine: file(relativePath: { eq: "commercial/turf4.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    workten: file(relativePath: { eq: "commercial/Feature plants.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    workeleven: file(relativePath: { eq: "commercial/Cylinder water feature.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    worktwelve: file(relativePath: { eq: "commercial/Decking and path.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    workoneD: file(relativePath: { eq: "domestic/Modern BBQ Area.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    worktwoD: file(relativePath: { eq: "domestic/Block Paving.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    workthreeD: file(relativePath: { eq: "domestic/Feature Seating.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    workfourD: file(relativePath: { eq: "domestic/Raised Planting beds.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    workfiveD: file(relativePath: { eq: "domestic/Steps2.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    worksixD: file(relativePath: { eq: "domestic/seating-area.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    worksevenD: file(relativePath: { eq: "domestic/Feature frame.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    workeigthD: file(relativePath: { eq: "domestic/Garden Design.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    worknineD: file(relativePath: { eq: "domestic/Gravel Drive.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    worktenD: file(relativePath: { eq: "domestic/Turf.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    workelevenD: file(relativePath: { eq: "domestic/Porcelain Paving.jpg" }) {
      childImageSharp {
        fluid(quality: 50, maxWidth: 1000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    worktwelveD: file(relativePath: { eq: "domestic/Modern Garden.jpg" }) {
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
