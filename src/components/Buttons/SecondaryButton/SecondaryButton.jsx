import { withStyles, Button, IconButton } from '@material-ui/core'
import React from 'react'
import { styles } from './styles'
import classNames from 'classnames'

export const SecondaryButton = withStyles(styles)(({ classes, text, onClick, propsClasses, icon }) => {
        return (
                <Button className={classNames(propsClasses ? propsClasses : classes.btn)} onClick={onClick}>
                        {icon ? <IconButton>{icon}</IconButton> : text}
                </Button>
        )
})
