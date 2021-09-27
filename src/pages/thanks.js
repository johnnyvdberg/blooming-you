import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <Seo title="Thank you" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "var(--primary-color)",
        }}
      />
      <h1>Bedankt voor je bericht!</h1>
      <p>Binnen de 48 uur mag jij een mail van me terug verwachten.</p>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Terug naar Home
      </Link>
    </div>
  </Layout>
)

export default Thanks
