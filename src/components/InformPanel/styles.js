import { createStyles } from "@material-ui/core";

export const styles = () => createStyles({
        flex: {
                display: 'flex'
        },
        headline: {
                marginTop: 89,
                marginBottom: 52
        },
        checkboxBlock: {
                display: 'flex',
                justifyContent: 'center',
                marginTop: 23,
                marginBottom: 29
        },
        checkbox: {
                padding: 0,
                marginRight: 5,
                color: 'rgba(254, 202, 48, 0.3)',
        },
        label: {
                color: 'white',
                margin: 0,
                fontSize: '13px !important'
        },
        checkboxLeft: {
                marginRight: 23
        },
        checkboxRight: {
                marginLeft: 23
        },
        selectMargin: {
                marginLeft: 10
        },
        slider: {
                borderRadius: 0
        },
        sliderBlock: {
                width: '100%'
        },
        sliderTextBlock: {
                display: "flex",
                justifyContent: 'space-between',
                marginBottom: 29
        },
        iconBlock: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
        },
        endBlock: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: 16,

        },
        endBlockBtn: {
                width: 95,
                marginRight: 22,
                textTransform: 'uppercase'
        },
        iconBlockBtn: {
                fontSize: 15,
                fontWeight: 300
        },
        endBtnSize: {
                fontSize: 19,
                fontWeight: 300
        }

})