const spacing = {
  minWidth: "320px",
  maxWidth: "1347px",
  sideMargin: "8vw",
  sectionMargin: "calc(50px + 4vw)",
}

const colors = {
  black: "#000000",
  grey: {
    700: "#616161",
    300: "#E0E0E0",
  },
  palette: {
    electricBlue: "#8AEEF0",
    water: "#8AEEF0",
    cosmicLatte: "#F9F9EB",
    lightGoldenrodYellow: "#F9F5CE",
    CrayolaGold: "#E3CE8B",
    metallicSunburst: "9E7E44",
  },
}

const text = {
  color: colors.grey[700],
  size: "14px",
  weight: "normal",
  family: "Montserrat, sans-serif",
}

export default {
  spacing: spacing,
  colors: colors,
  text: text,
}
