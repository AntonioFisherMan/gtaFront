import React from 'react'
import { withStyles, Box, ListItem, ListItemText } from '@material-ui/core'
import classNames from 'classnames'
import { RightArrowIcon } from '../../assets/icons/icons'
import { styles } from './styles'

export const CollapseItems = withStyles(styles)(({ classes, data, handleClickItem, selectedIndex, propsClasses, width }) => {
        return (
                <Box className={classNames(classes.container, width)}>
                        {data.map((item, index) => {
                                return (
                                        <ListItem key={item.id} selected={selectedIndex === index} disableGutters={true} button onClick={(e) => handleClickItem(e, index)} classes={{ root: classes.item, selected: propsClasses ? propsClasses : classes.itemSelected }}>
                                                <ListItemText primary={item.text} classes={{ primary: classNames(classes.text, selectedIndex === index ? classes.black : classes.red) }} />
                                                <RightArrowIcon style={{ color: selectedIndex === index ? "black" : "white", fontSize: '10px' }} />
                                        </ListItem>
                                )
                        })}
                </Box>
        )
})
