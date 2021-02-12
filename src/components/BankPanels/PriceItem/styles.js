import { createStyles } from "@material-ui/core";

export const styles = () => createStyles({
        container: {
               
        },
        textBlock: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
        },
        textBlockWithIcon: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%'
        },
        text: {
                textTransform: 'inherit',
                color: 'inherit',
                fontSize: 'inherit'
        },
        startIcon: {
                display: 'flex',
                alignItems: 'center',
                marginRight: 30,
        },
        number: {
                marginLeft: 10
        },
        term: {
                textTransform: 'lowercase',
        },
        flex: {
                display: 'flex'
        }
})