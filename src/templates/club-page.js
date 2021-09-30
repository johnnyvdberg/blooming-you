/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { RiArrowRightSLine } from "react-icons/ri"

export const pageQuery = graphql`
  query ClubQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      excerpt(pruneLength: 140)
      frontmatter {
        title
        cta {
            ctaText
            ctaLink
        }
      }
    }
  }
`
const ClubPage = ({ data }) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark

  return (
    <Layout className="page">
      <Seo title={frontmatter.title} description={excerpt} />
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <Link
          to={frontmatter.cta.ctaLink}
          className="button"
          sx={{
            variant: "variants.button",
          }}
        >
          {frontmatter.cta.ctaText}
          <span className="icon -right">
              <RiArrowRightSLine />
            </span>
        </Link>
        <article sx={{
          variant: "variants.content"
        }} dangerouslySetInnerHTML={{ __html: html }} />
        <Link
          to={frontmatter.cta.ctaLink}
          className="button"
          sx={{
            variant: "variants.button",
          }}
        >
          {frontmatter.cta.ctaText}
          <span className="icon -right">
              <RiArrowRightSLine />
            </span>
        </Link>
      </div>
    </Layout>
  )
}

export default ClubPage
