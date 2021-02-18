import React from 'react'
import { Button, withStyles } from '@material-ui/core'
import { styles } from './styles'

export const FormButton = withStyles(styles)(({ text, variant, classes, propsClasses, endIcon, onClick }) => {
        return (
                <Button endIcon={endIcon ? endIcon : null} variant={variant ? variant : "contained"} className={propsClasses ? propsClasses : classes.button} onClick={onClick}>{text}</Button>
        )
})
