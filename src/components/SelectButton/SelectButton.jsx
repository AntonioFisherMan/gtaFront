import { Button, withStyles, Box, IconButton } from '@material-ui/core'
import React from 'react'
import { styles } from './styles'
import classNames from 'classnames'
import { RightArrowIcon } from '../../assets/icons/icons'
import { LeftArrowIcon } from '../../assets/icons/icons'


export const SelectButton = withStyles(styles)(({ classes, text, propsClasses, notIcons, isCenter }) => {
        return (
                <Box className={isCenter ? classes.center : null}>
                        <Button variant="contained" color="secondary" classes={{ root: classNames(classes.btn, propsClasses), label: classes.label }} startIcon={notIcons === true ? null : <LeftArrowIcon />} endIcon={notIcons === true ? null : <RightArrowIcon />}>
                                {text}
                        </Button >
                </Box >

        )
})