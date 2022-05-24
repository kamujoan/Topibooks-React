import Navbar from './Navbar';
import Intro from '../components/Intro';
import {
  Container,
  Typography,
  CssBaseline,
  createTheme,
  ThemeProvider,
 
} from '@material-ui/core';
import useStyles from '../utils/styles';
import { Store } from '../utils/Store';
import { useContext } from 'react';

export default function Layout({ title, description, children }) {
  const { state, dispatch } = useContext(Store);
  const { darkMode} = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '1.6rem',
        fontWeight: 600,
      },
      h2: {
        fontSize: '1.2rem',
        fontWeight: 500,
      },
    },
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#008394',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar darkMode={darkMode} dispatch={dispatch} />
        <Intro />
        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved,</Typography>
          <Typography>Topibooks, {'\u00A9'}2022</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
}
