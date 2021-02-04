import { createStyles } from "@material-ui/core";

export const styles = () => createStyles({
        container: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
        },
        btn: {
                width: 169,
                height: 55,
                background: 'rgba(29, 32, 40, 0.75)',
                marginTop: 28,
                marginBottom: 28,
                textTransform: 'capitalize',

        },
        center: {
                display: 'flex',
                justifyContent: 'center'
        },
        label: {
                display: 'flex',
                justifyContent: 'space-around'
        }
})