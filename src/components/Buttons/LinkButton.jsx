import React from 'react'
import { Button, withStyles } from '@material-ui/core'
import { styles } from './styles'
import classNames from 'classnames'

export const LinkButton = withStyles(styles)(({ text, propsClasses, classes }) => {
        return (
                <Button variant="text" className={classNames(classes.linkButton,propsClasses)}>{text}</Button>
        )
})
