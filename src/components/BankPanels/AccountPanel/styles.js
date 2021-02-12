
import { createStyles } from '@material-ui/core';

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
        tabWrapper: {
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                fontSize: 20,
                fontWeight: 'bold',
                textTransform: 'capitalize',
        },
        tab: {
                minHeight: 0,
                maxWidth: 364

        },
        tabIcon: {
                marginLeft: 70,

        },
        tabIndicator: {
                backgroundColor: "initial"
        },
        selectedTab: {
                color: 'rgba(230, 36, 46, 0.75)'
        },
        //overrides
        oneTab: {
                marginLeft: 120
        }


})