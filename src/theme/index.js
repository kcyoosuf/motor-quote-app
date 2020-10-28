import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import colors from './colors';

let theme = createMuiTheme({
  palette: {
    primary: {
      light: colors.blue,
      main: colors.main,
      dark: colors.main_dark,
      contrastText: colors.white,
    },
    secondary: {
      light: colors.secondary_light,
      main: colors.secondary,
      dark: colors.secondary_dark,
      contrastText: colors.black,
    },
  },
  typography: {
    useNextVariants: true,
    suppressDeprecationWarnings: true,
  }
})
export default responsiveFontSizes(theme);
