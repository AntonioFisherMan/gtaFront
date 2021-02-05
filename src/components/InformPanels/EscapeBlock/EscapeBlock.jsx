import React from 'react'
import { SecondaryButton } from '../../Buttons/SecondaryButton/SecondaryButton'
import { Subtitle } from '../../../common/typography/Subtitle/Subtitle'
import { styles } from './styles'
import classNames from 'classnames'
import { withStyles, Box } from '@material-ui/core'

export const EscapeBlock = withStyles(styles)(({ classes, closePanel, index, propsClasses }) => {
        return (
                <Box className={classNames(classes.container, propsClasses)}>
                        <SecondaryButton text="esc" onClick={(e) => closePanel(e, index)} />
                        <Subtitle text="Выйти из создания" propsClasses={classes.text} />
                </Box>
        )
})
