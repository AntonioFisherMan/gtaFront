import { createStyles } from '@material-ui/core'


export const styles = () => createStyles({
        headline: {
                marginTop: 200,
                marginBottom: 52
        },
        container: {

                background: 'rgba(29, 32, 40, 0.75)',
                paddingLeft: 33,
                paddingTop: 5,
                paddingBottom: 1,
                marginBottom: 207
        },
        item: {
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 5
        },
        itemBtn: {
                width: '50%'
        },
        text: {
                fontWeight: 200
        },
        endBlock: {
                display: 'flex',
                justifyContent: 'center'
        },
        endBlockBtn: {
                fontSize: 19,
                marginLeft: 22,
                fontWeight: 200
        }
})