import { createStyles } from "@material-ui/core";

export const styles = () => createStyles({
        container: {
                marginTop: 59,
                marginBottom: 90,
                marginRight: 90,
                marginLeft: 282,

        },
        tabs: {
                position: 'relative',

        },
        priceBlock: {
                marginTop: 221,
                marginLeft: 50,
                marginBottom: 93
        },
        priceItem: {
                display: 'flex',
                marginBottom: 3,
        },
        tabWrapper: {
                width: 210,
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                fontSize: 20,
                fontWeight: 'bold',
                textTransform: 'capitalize',
        },
        tab: {
                minHeight: '0px ',
        },
        tabLeft: {
                marginLeft: 70
        },
        tabIndicator: {
                backgroundColor: "initial"
        },
        selectedTab: {
                color: 'rgba(230, 36, 46, 0.75)'
        },
        input: {
                width: '350px',
                marginTop: 93,
                marginBottom: 111
        },
        enterBlock: {
                display: 'flex',
                position: 'absolute',
                bottom: 76,
                left: 373
        },
        escapeBlock: {
                display: 'flex',
                position: 'absolute',
                bottom: 76,
                right: 90
        }
})