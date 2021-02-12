import React from 'react'
import { Box, withStyles, } from '@material-ui/core'
import { styles } from './styles'
import { DolarIcon } from '../../../assets/icons/icons'
import { Subtitle } from '../../../common/typography/Subtitle/Subtitle';
import classNames from 'classnames'
import { HomeIcon } from '../../../assets/icons/icons'


export const PriceItem = withStyles(styles)(({ classes, propsClasses, isIcon, item }) => {
        return (
                <Box className={propsClasses ? propsClasses : classes.container}>
                        {item.icon && <Box className={classes.startIcon}>{item.icon}</Box>}
                        <Box className={isIcon || item.icon ? classes.textBlockWithIcon : classes.textBlock}>

                                <Box className={classes.flex}>
                                        <Subtitle text={item && item.text} propsClasses={classes.text} />
                                        {item && item.number && <Subtitle text={item.number} propsClasses={classNames(classes.text, classes.number)} />}
                                </Box>
                                {item && item.term && <Subtitle text={item.term} propsClasses={classNames(classes.text, classes.term)} />}
                                {isIcon && <DolarIcon />}
                        </Box>
                </Box>




        )
})
