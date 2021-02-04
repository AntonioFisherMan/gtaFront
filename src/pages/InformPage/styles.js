import { createStyles } from "@material-ui/core";


export const styles = () => createStyles({
        settingsBlock: {
                width: '20%',
                height: '1080px',
                background: 'rgba(29, 32, 40, 0.75)',
                paddingLeft: 54,
                paddingRight: 54
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
        listText: {
                fontSize: 15,
                fontWeight: 400,
                color: '#FFFFFF'
        },
        white: {
                color: "white",
        },
        black: {
                color: "black",
        }
})