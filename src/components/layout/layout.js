import React from "react"

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
        title: "Water Features",
        to: "/water-features"
      },
      {
        title: "Design Service",
        to: "/design-service"
      },
      {
        title: "Artificial Turf",
        to: "/artificial-turf"
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
    <div className={`${toggleNav ? `site-head-open` : ``}`}>
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
