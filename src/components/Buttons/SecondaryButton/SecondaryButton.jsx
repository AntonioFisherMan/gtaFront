import { withStyles, Button } from '@material-ui/core'
import React from 'react'
import { styles } from './styles'
import classNames from 'classnames'

export const SecondaryButton = withStyles(styles)(({ classes, text, onClick, propsClasses }) => {
        return (
                <Button className={classNames(propsClasses ? propsClasses : classes.btn)} onClick={onClick}>
                        {text}
                </Button>
        )
})
