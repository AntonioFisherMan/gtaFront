import { ThemeProvider, withStyles } from "@material-ui/core";
import { Component } from "react";
import { theme } from "../../materialUI/theme";
import { styles } from "./styles";
import { Box } from '@material-ui/core'


export const InformUserStylesHOC = (Component) => {
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