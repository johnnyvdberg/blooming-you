import defaultColors from "../util/default-colors.json"
import darkColors from "../util/dark-theme-colors.json"
import { lightness } from "@theme-ui/color"

const theme = {
  colors: {
    ...defaultColors,
    text: "rgba(0, 0, 0, 0.7)",
    background: "#FFFDFC",
    primary: "#ffb6b9",
    accent: "#bbded6",
    muted: "rgba(0, 0, 0, 0.7)",
    cardBg: "#fff",
    borderColor: "#540229",
    labelText: "#777",
    inputBorder: "#aaa",
    inputBackground: "#fff",
    socialIcons: lightness("siteColor", 0.4),
    socialIconsHover: lightness("siteColor", 0.3),
    buttonHoverBg: lightness("accent", 0.4),
    buttonHoverColor: lightness("accent", 0.8),
    modes: {
      dark: {
        text: "#f5f5f5",
        background: "#111",
        primary: "#252525",
        accent: "#5C2941",
        muted: "rgba(255, 255, 255, 0.7)",
        cardBg: "#252525",
        borderColor: "#888",
        labelText: "#777",
        inputBorder: "#777",
        inputBackground: "#333",
        socialIcons: lightness("siteColor", 0.5),
        socialIconsHover: lightness("siteColor", 0.9),
        buttonColor: lightness("siteColor", 0.7),
        buttonHoverBg: lightness("siteColor", 0.3),
        buttonHoverColor: lightness("siteColor", 0.9),
        ...darkColors
      }
    }
  },
  links: {
    postLink: {
      color: "muted",
      "&:hover": {
        color: "text"
      }
    }
  },
  variants: {
    content: {
      h1: {
        color: "accent"
      },
      h2: {
        color: "accent"
      },
      h3: {
        color: "accent"
      },
      h4: {
        color: "accent"
      }
    },
    button: {
      bg: "accent",
      color: "white",
      "&:hover": {
        bg: "buttonHoverBg",
        color: "buttonHoverColor"
      }
    },
    socialIcons: {
      a: {
        color: "socialIcons",
        ":hover": {
          color: "socialIconsHover"
        }
      }
    }
  }
}

export default theme
