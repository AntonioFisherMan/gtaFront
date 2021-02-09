import { createStyles } from "@material-ui/core";


export const styles = () => createStyles({
        settingsBlock: {
                width: '350px',
                height: '1080px',
                backgroundColor: 'rgba(29, 32, 40, 0.75)',
                opacity: '0.5',
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
})