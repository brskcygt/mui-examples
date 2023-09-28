import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  status: {
    danger: "#C70039",
  },
  typography: {
    htmlFontSize: 10,
    subtitle1: {
      fontSize: 10,
    },
    poster: {
      fontSize: 64,
      color: "red",
    },
    // h3: undefined,
  },
  spacing: 10,
  breakpoints:{
    values:{
        mobile: 0,
        tablet: 640,
        laptop: 1024,
        desktop: 1200
    },
    step: 5
  },
  components: {
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          poster: "h1", // If we create a new variant variable, it is default created <span>. We can change its semantic element using variantMapping.
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme); // It allow us to make font sizes responsive.If you decrease your window size font size automatically decreases.
theme.spacing(2);

export default theme;
