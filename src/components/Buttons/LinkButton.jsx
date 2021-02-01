import React from 'react'
import { Button, withStyles } from '@material-ui/core'
import { styles } from './styles'


export const LinkButton = withStyles(styles)(({ text, propsClasses, classes }) => {
        return (
                <Button variant="text" className={propsClasses ? propsClasses : classes.linkButton}>{text}</Button>
        )
})
