import { ThemeProvider, withStyles } from "@material-ui/core";
import { theme } from "../../materialUI/theme";
import { styles } from "./styles";



export const ThemeProviderHOC = (Component) => {
        const ComponentWithData = withStyles(styles)(({ classes }) => {
                return (
                        <ThemeProvider theme={theme}>

                                <Component />

                        </ThemeProvider>
                )
        })
        return ComponentWithData
}