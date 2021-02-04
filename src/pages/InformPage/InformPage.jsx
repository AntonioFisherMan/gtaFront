import { Box, withStyles, ListItem, ListItemText, Collapse, ListItemSecondaryAction, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import { Paragraph } from '../../common/typography/Paragraph/Paragraph'
import { MyInput } from '../../components/Inputs/MyInput/MyInput'
import { styles } from './styles'
import { RightArrowIcon } from '../../assets/icons/icons'
import classNames from 'classnames'
import { choosePanel } from '../../utils/choosePanel'


const list = [
        { id: 0, text: "ИНФОРМАЦИЯ" },
        { id: 1, text: "ХАРАКТЕРИСТИКИ" },
        { id: 2, text: "ВНЕШНИЙ ВИД" },
        { id: 3, text: "ОДЕЖДА" }
]
export const InformPage = withStyles(styles)(({ classes }) => {
        const [expanded, setExpanded] = useState(false)
        const [selectedIndex, setSelectedIndex] = useState();


        const handleClickItem = (e, index) => {
                setSelectedIndex(prevState => prevState === index ? '' : index)
                if (selectedIndex === index) {
                        setExpanded(!expanded)
                } else {
                        setExpanded(true)
                }
        }

        return (
                <>
                        <Box className={classes.settingsBlock}>
                                <Paragraph text="Создание персонажа" propsClasses={classes.paragraph} />
                                <Box className={classes.form}>
                                        <MyInput text="Имя" propsClasses={classes.input} />
                                        <MyInput text="Фамилия" />
                                </Box>
                                <Box className={classes.collapseBlock}>
                                        {list.map((item, index) => {
                                                return (
                                                        <ListItem key={item.id} selected={selectedIndex === index} disableGutters={true} button onClick={(e) => handleClickItem(e, index)} classes={{ root: classes.listItem }}>
                                                                <ListItemText primary={item.text} classes={{ root: classNames(classes.listText, selectedIndex === index ? classes.black : classes.white) }} />
                                                                <RightArrowIcon color={selectedIndex === index ? "black" : "white"} />
                                                        </ListItem>
                                                )
                                        })}
                                </Box>
                        </Box>
                        <Collapse in={expanded} className={classes.settingsBlock}>
                                {choosePanel(selectedIndex)}
                        </Collapse>
                </>

        )
})
