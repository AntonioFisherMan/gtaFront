import React from 'react'
import { Box, withStyles } from '@material-ui/core'
import { styles } from './styles'
import { Paragraph } from '../../../common/typography/Paragraph/Paragraph'
import { DolarIcon } from '../../../assets/icons/icons'



export const PriceItem = withStyles(styles)(({ classes, text }) => {
        return (
                <Box className={classes.container}>
                        <Box className={classes.textBlock}>
                                <Paragraph text={text} />
                                <DolarIcon />
                        </Box>
                </Box>
        )
})
