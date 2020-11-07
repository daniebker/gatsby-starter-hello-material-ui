import { createMuiTheme} from "@material-ui/core"

// default setup from the gatsby examples
// https://www.gatsbyjs.com/plugins/gatsby-theme-material-ui/
// Override here to set custom phones, or delete this file to
// stick with the Roboto defaults

const theme = createMuiTheme({
  typography: {
    //   palette: {
    //     type: 'dark',
    //   },
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
})

export default theme
