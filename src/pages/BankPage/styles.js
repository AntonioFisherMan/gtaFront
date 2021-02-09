import { createStyles } from "@material-ui/core";
import { BorderBottom } from "@material-ui/icons";

export const styles = () => createStyles({
        container: {
                display: 'flex',
                minWidth: '1920px',

        },
        panel: {
                width: '560px',
                height: '1080px',
                background: 'rgba(29, 32, 40, 0.75)',
                position: 'relative'
        },
        content: {
                height: '1080px',
                width: '100%',
                position: 'relative',
                background: 'grey'
        },
        iconBlock: {

                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: 33,
                marginBottom: 64
        },
        textBlock: {
                display: 'flex',
                marginTop: 10
        },
        headline: {
                marginRight: 20,
        },
        text: {
                wordWrap: 'break-word',
                wordBreak: 'break-all'
        },
        numbersBlock: {
                paddingRight: 54,
                paddingLeft: 54,
                display: 'flex',
                marginBottom: 78,
                paddingBottom: 21,
                borderBottom: '0.5px solid rgba(255, 255, 255, 0.5)',
        },
        numbersRight: {
                paddingTop: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '50%',
                paddingLeft: 8,

        },
        numbersLeft: {
                paddingTop: 20,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                width: '50%',
                paddingRight: 10,
                borderRight: '0.5px solid rgba(255, 255, 255, 0.5)',
        },
        subtitle: {
                fontSize: 15,
                marginTop: 20
        },
        collapseBlock: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',

        },
        btn: {
                background: 'rgba(230, 36, 46, 0.75) !important'
        },
        btnWidth: {
                width: 350,
        }
})