import { createStyles } from "@material-ui/core";

export const styles = () => createStyles({
        container: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                width: 350,
        },
        headline: {
                marginBottom: 30
        },
        form: {
                width: '100%'
        },
        inputs: {
                display: 'flex',
                flexDirection: 'column'
        },
        input: {
                marginBottom: 8
        },
        forgotBtn: {
                fontSize: 11,
                textTransform: 'unset',
                color: 'rgba(255, 255, 255, 0.5)',
                fontWeight: 400
        },
        buttonsBlock: {
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 4
        }

})