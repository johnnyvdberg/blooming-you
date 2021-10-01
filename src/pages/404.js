import React from "react"
import { Link } from "gatsby"
import { RiAlarmWarningLine, RiArrowLeftSLine, RiBugLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <Seo title="Page not found" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <header>
        <RiAlarmWarningLine
          style={{
            fontSize: "128px",
            color: "var(--primary-color)",
          }}
        />
        <h1>Oeps dat had ik niet verwacht</h1>
        <p>
          Dit kan ik niet vinden, klik hieronder om verder te gaan.
        </p>
      </header>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Terug
      </Link>
      <Link to="/contact" className="button -outline">
        Rapporteer <RiBugLine className="icon -right" />
      </Link>
    </div>
  </Layout>
)

export default NotFound
