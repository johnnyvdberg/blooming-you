/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { InlineWidget } from "react-calendly"

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
        <InlineWidget styles={{ height: "1000px" }} url="https://calendly.com/bloomingyou" />
      </div>
    </Layout>
  )
}

export default AfspraakPage
