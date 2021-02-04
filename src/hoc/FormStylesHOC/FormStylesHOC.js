
import { Box, ThemeProvider, withStyles } from '@material-ui/core';
import React from 'react'
import { theme } from '../../materialUI/theme';
import { styles } from './styles'

export const FormStylesHOC = (Component) => {
        const ComponentWithData = withStyles(styles)(({ classes }) => {
                return (
                        <ThemeProvider theme={theme}>
                                <Box className={classes.container}>
                                        <Component />
                                </Box>
                        </ThemeProvider>

                )
        })
        return ComponentWithData
}