import { createStyles } from '@material-ui/core';

export const styles = () => createStyles({
        priceBlock: {
                marginTop: 201,
                marginLeft: 50,
                marginBottom: 93
        },
        priceItems: {
                width: 410,
                maxHeight: 250,
                display: 'flex',
                flexWrap: 'wrap',
        },
        priceItem: {
                color: 'white',
                background: 'rgba(29, 32, 40, 0.75)',
                marginRight: 5,
                marginBottom: 5,
                textTransform: 'lowercase'
        },
        priceItemText: {
                width: 129,
                height: 83,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                fontWeight: 500,
                paddingLeft: 22,
                paddingRight: 25,
        },
        selectedPriceItem: {
                background: 'rgba(230, 36, 46, 0.75) !important',
                color: 'black !important'
        },
        input: {
                width: '350px',
                marginBottom: 16,
        },
        text: {
                display: 'flex',
        },

        enterBlock: {
                display: 'flex',
                position: 'absolute',
                alignItems: 'center',
                bottom: 76,
                left: 373
        },
        escapeBlock: {
                display: 'flex',
                position: 'absolute',
                alignItems: 'center',
                bottom: 76,
                right: 90
        },
        centralBlock: {
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: 93
        },
        priceItemWidth: {
                color: 'white',
                background: 'rgba(29, 32, 40, 0.75)',
                width: '356px !important',
                textTransform: 'lowercase'
        }
})

