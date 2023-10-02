import { createTheme } from '@mui/material/styles';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#479066',
    },
    secondary: {
      main: '#ab876b',
    },
    background: {
      default: '#f8f7f6',
      paper: '#e8e9e4',
    },
  },
});

export default theme;