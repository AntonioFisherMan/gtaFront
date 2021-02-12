import { createStyles } from '@material-ui/core';

export const styles = () => createStyles({
        container: {
                width: 328,
                maxHeight: 256,
                minHeight: 256,
                position: 'relative',
                bottom: 50
        },
        subtitle2: {
                borderBottom: '0.5px solid rgba(255, 255, 255, 0.5)',
                paddingBottom: 26
        },
        itemsBlock: {
                display: 'flex',
                flexDirection: 'column',
                marginTop: 26
        },
        item: {
                color: 'white',
                background: 'rgba(29, 32, 40, 0.75)',
                marginRight: 5,
                marginBottom: 5,
                textTransform: 'lowercase'
        },

        itemText: {
                width: 328,
                maxHeight: 55,
                display: 'flex',
                alignItems: 'center',
                paddingTop: 15,
                paddingBottom: 15,
                paddingLeft: 26,
                paddingRight: 26,
                fontSize: 15,
                textTransform: 'capitalize',
                fontWeight: 400
        },
        selectedItem: {
                background: 'rgba(230, 36, 46, 0.75) !important',
                color: 'black !important'
        },
})
