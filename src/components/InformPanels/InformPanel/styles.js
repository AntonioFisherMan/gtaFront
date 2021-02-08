import { createStyles } from "@material-ui/core";

export const styles = () => createStyles({
        center: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
        },
        btn: {
                marginTop: 25,
                marginBottom: 25,
                width: 169,
                height: 55
        },
        flex: {
                display: 'flex',
                justifyContent: 'space-between'
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
                width: 18,
                height: 16,
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
                borderRadius: 0,
                padding: '0 !important'
        },
        sliderBlock: {
                width: '100%'
        },
        sliderText: {
                display: 'flex',
                justifyContent: 'center',
                marginBottom: 10
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

        iconBlockBtn: {
                fontSize: 15,
                fontWeight: 300,
        },


})