import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="404: Not Found" />
        <div className="mx-auto max-w-6xl text-center px-4 md:px-8 py-16 md:py-32">
          <h1 className="text-5xl mb-4">Looks like this page dose not exist anymore</h1>
          <p className="text-xl">Please see our <Link className="text-primary foont-bold" to="/services">Services</Link> to find what you are looking for</p>
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
