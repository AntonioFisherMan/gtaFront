import { createStyles } from "@material-ui/core";


export const styles = () => createStyles({
        settingsBlock: {
                width: '350px',
                height: '1080px',
                background: 'rgba(29, 32, 40, 0.75)',
                paddingLeft: 54,
                paddingRight: 54,
                position: 'relative'
        },
        paragraph: {
                marginTop: 247,
                marginBottom: 80
        },
        form: {
                display: 'flex',
                flexDirection: 'column',
                marginBottom: 100
        },
        input: {
                marginBottom: 13
        },
        collapseBlock: {},
        listItem: {
                background: 'rgba(29, 32, 40, 0.75)',
                marginBottom: 14,
                padding: '12px 36px'
        },
        listItemSelected: {
                background: 'rgba(255, 255, 255, 0.75) !important'
        },
        listText: {
                fontSize: 15,
                fontWeight: 400,

        },
        white: {
                color: "white",
        },
        black: {
                color: "black !important",
        }
})