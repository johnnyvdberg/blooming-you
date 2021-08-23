import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
  query AfspraakQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
      }
    }
  }
`
const AfspraakPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout className="page">
      <Seo title={frontmatter.title} description={excerpt} />
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <article
          sx={{
            variant: "variants.content"
          }}
          dangerouslySetInnerHTML={{ __html: html }} />
        <div className="calendly-inline-widget" data-url="https://calendly.com/bloomingyou"
             style={{
              minWidth: '320px',
              height: '630px'
            }}
        ></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </div>
    </Layout>
  )
}

export default AfspraakPage
