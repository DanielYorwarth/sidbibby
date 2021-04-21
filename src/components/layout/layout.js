import React from "react"
import {Link} from 'gatsby';

import Header from '../header/header';
import Footer from '../footer/footer';

import './style.layout.scss'

const Layout = props => {
  const { children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  const menuLinks = [{
    title: 'Commercial',
    link: '/commercial'
  },
  {
    title: 'Domestic',
    link: '/domestic'
  },
  {
    title: 'Services',
    link: '/services',
    sub: [
      {
        title: "Overview",
        to: ""
        },
      {
      title: "Turfing",
      to: "/turfing"
      },
      {
        title: "Paving",
        to: "/paving"
      },
      {
        title: "Decking",
        to: "/decking"
      },
      {
        title: "Planting",
        to: "/planting"
      },
      {
        title: "Fencing",
        to: "/fencing"
      },
      {
        title: "Show Homes",
        to: "/show-homes"
      },
      {
        title: "Resin",
        to: "/resin"
      },
      {
        title: "Design Service",
        to: "/design-service"
      },
      {
        title: "Artificial Turf",
        to: "/artificial-turf"
      },
      {
        title: "Water Features",
        to: "/water-features"
      },
    ]
  },
  {
    title: 'Our Work',
    link: '/our-work'
  },
  {
    title: 'About',
    link: '/about',
    sub: [
      {
        title: "About",
        to: ""
        },
      {
      title: "FAQs",
      to: "/faq"
      },
      {
        title: "Turf Care",
        to: "/turf-care"
      }
    ]
  },
  {
    title: 'Contact',
    link: '/contact'
  }];

  return (
    <div className={`overflow-x-hidden ${toggleNav ? `site-head-open` : ``}`}>
      <Link to="/covid" className="bg-secondary p-2 text-white text-center block w-full underline">Sid Bibby Turf & Landscaping – Control Measures – COVID-19 - Click To View</Link>
      <Header menuLinks={menuLinks} toggleNav={toggleNav} setToggleNav={setToggleNav} />
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <Footer menu={menuLinks} />
    </div>
  )
}

export default Layout
