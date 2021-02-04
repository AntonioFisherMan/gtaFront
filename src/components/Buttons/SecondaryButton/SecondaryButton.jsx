import { withStyles, Button } from '@material-ui/core'
import React from 'react'
import { styles } from './styles'


export const SecondaryButton = withStyles(styles)(({ classes, text }) => {
        return (
                <Button className={classes.btn}>
                        {text}
                </Button>
        )
})
