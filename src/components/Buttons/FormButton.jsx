import React from 'react'
import { Button, withStyles } from '@material-ui/core'
import { styles } from './styles'

export const FormButton = withStyles(styles)(({ text, variant, classes }) => {
        return (
                <Button variant={variant ? variant : "contained"} className={classes.button}>{text}</Button>
        )
})
