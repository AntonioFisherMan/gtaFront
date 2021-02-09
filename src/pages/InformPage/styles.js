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
        btnBlock: {
                display: 'flex',
                alignItems: 'flex-end',
                marginBottom: 76,
                boxShadow: 'none !important'
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
        btn: {
                textTransform: 'uppercase',
                width: 350,
                height: 55,
                background: 'rgba(29, 32, 40, 0.9)',
                fontSize: 19,
                color: 'white',
                fontWeight: 300
        }
})