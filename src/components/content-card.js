/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const ContentCard = ({ data }) => (
  <Link
    to={data.contentLink}
    sx={{
      variant: "links.postLink"
    }}
  >
    <article
      className="post-card"
      sx={{
        bg: "cardBg"
      }}
    >
      {data.featuredImage ? (
        <GatsbyImage
          image={data.featuredImage.childImageSharp.gatsbyImageData}
          alt={data.title + " - Featured image"}
          className="featured-image"
        />
      ) : (
        ""
      )}
      <div className="post-content">
        <h2 className="title">
          {data.title}
        </h2>
        <p
          className="meta"
          sx={{
            color: "muted"
          }}
        >
          {data.content}
        </p>
      </div>
    </article>
  </Link>
)

export default ContentCard
