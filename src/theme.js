import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#1976D2', //bright blue
      light: '#b4c5e4', //light steel blue
      dark: '#191970', // midnight blue
    },
    secondary: {
      main: '#b94916', //brown
      light: '#e3904e', //caramel powder
      dark: '#21130d', //eternity
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFFFFF',
    },
  },
});
export default theme;