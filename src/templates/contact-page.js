/** @jsx jsx */
import { jsx, Select } from "theme-ui"
import { graphql } from "gatsby"
import { RiSendPlane2Line } from "react-icons/ri"

import Layout from "../components/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
    query ContactQuery($id: String!) {
        markdownRemark(id: { eq: $id }) {
            id
            html
            excerpt(pruneLength: 140)
            frontmatter {
                title
                subjects {
                    subject
                }
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`

const Contact = ({ data }) => {
  const { markdownRemark, site } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  const subjectOptions = frontmatter.subjects.map(subject => <option key={subject.subject} value={subject.subject}>{subject.subject}</option>)

  return (
    <Layout className="contact-page" sx={contactStyles.contactPage}>
      <Seo
        title={frontmatter.title}
        description={frontmatter.title + " " + site.siteMetadata.title}
      />
      <div className="wrapper">
        <h1>{frontmatter.title}</h1>
        <div
          className="description"
          sx={{
            variant: "variants.content"
          }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <form
          className="contact-form"
          action="/thanks"
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Naam
              <input type="text" name="name" required />
            </label>
          </p>
          <p>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
          </p>
          <div>
            <label>
              Onderwerp
              <Select id="subject" name="subject">
                {subjectOptions}
              </Select>
            </label>
          </div>
          <p>
            <label>
              Bericht
              <textarea name="message" required />
            </label>
          </p>
          <p className="text-align-right">
            <button
              className="button"
              sx={{
                variant: "variants.button"
              }}
              type="submit"
            >
              Versturen{" "}
              <span className="icon -right">
                <RiSendPlane2Line />
              </span>
            </button>
          </p>
        </form>
      </div>
    </Layout>
  )
}

export default Contact

const contactStyles = {
  contactPage: {
    input: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none"
    },
    select: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none"
    },
    textarea: {
      border: "6px solid",
      borderColor: "inputBorder",
      bg: "inputBackground",
      outline: "none"
    }
  }
}
