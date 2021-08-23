/** @jsx jsx */
import { jsx } from "theme-ui"
import { RiHeart2Line } from "react-icons/ri"

const Footer = () => (
  <footer
    className="site-footer"
    sx={{
      bg: "siteColor"
    }}
  >
    <div className="container">
      <p>
        Blooming You
        <span className="icon -love">
          <RiHeart2Line />
        </span>
      </p>
    </div>
  </footer>
)

export default Footer
