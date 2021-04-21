import React from "react"
import Button from "../components/button/button"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Thank You" />
        <div className="mx-auto max-w-6xl text-center px-4 md:px-8 py-16 md:py-32">
          <h1 className="text-5xl mb-4">Your message has been sent successfully</h1>
          <p className="text-xl mb-5">Thank you for your enquire, we'll aim to get back to you as soon as possible!</p>
          <Button link="/services" text="View our services" />
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
