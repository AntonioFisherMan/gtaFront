import React from 'react'
import { SecondaryButton } from '../../Buttons/SecondaryButton/SecondaryButton'
import { Subtitle } from '../../../common/typography/Subtitle/Subtitle'
import { styles } from './styles'
import classNames from 'classnames'
import { withStyles, Box } from '@material-ui/core'

export const EscapeBlock = withStyles(styles)(({ classes, closePanel, index, propsClasses, text, btnText }) => {
        return (
                <Box className={propsClasses ? propsClasses : classes.container}>
                        <SecondaryButton text={btnText ? btnText : "esc"} onClick={(e) => closePanel(e, index)} />
                        <Subtitle text={text ? text : "Выйти из создания"} propsClasses={classes.text} />
                </Box>
        )
})
