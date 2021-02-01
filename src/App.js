import { Box, ThemeProvider, withStyles } from '@material-ui/core';
import React from 'react'
import { theme } from './materialUI/theme';
import { LoginPage } from './pages/LoginPage/LoginPage'
import { styles } from './styles'


function App({ classes }) {
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.container}>
        <LoginPage />
      </Box>
    </ThemeProvider>

  );
}

export default withStyles(styles)(App)
