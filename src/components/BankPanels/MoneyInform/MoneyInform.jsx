import React from 'react'
import { withStyles, Box, } from '@material-ui/core';
import { Paragraph } from '../../../common/typography/Paragraph/Paragraph';
import { DolarIcon } from '../../../assets/icons/icons';
import { styles } from './styles'
import { Subtitle2 } from '../../../common/typography/Subtitle2/Subtitle2';


export const MoneyInform = withStyles(styles)(({ classes, text }) => {
        return (
                <Box className={classes.container}>
                        <Box className={classes.iconBlock}>
                                <Paragraph text={text} />
                                <DolarIcon />
                        </Box>
                        <Subtitle2 text="Деньги на счету" align="left" />
                </Box>
        )
})