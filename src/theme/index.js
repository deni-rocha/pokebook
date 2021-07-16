import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8a1c1c',
    },
    secondary: {
      main: '#c62828',
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: '#eeeeee'
    }
  }
});

export default theme;