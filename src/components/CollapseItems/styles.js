import { createStyles } from "@material-ui/core";

export const styles = () => createStyles({
        container: {

        },
        item: {
                background: 'rgba(29, 32, 40, 0.75)',
                marginBottom: 14,
                padding: '12px 36px'
        },
        itemSelected: {
                background: 'rgba(255, 255, 255, 0.75) !important'
        },
        text: {
                fontSize: 15,
                fontWeight: 400,

        },
        white: {
                color: "white",
        },
        black: {
                color: "black !important",
        }
})