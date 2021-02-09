import React, { useState } from 'react'
import { Box, withStyles, Collapse } from '@material-ui/core'
import { Paragraph } from '../../common/typography/Paragraph/Paragraph'
import { MyInput } from '../../components/Inputs/MyInput/MyInput'
import { styles } from './styles'
import { informItems } from '../../data/index'

import { CollapseItems } from '../../components/CollapseItems/CollapseItems'
import { selectCollapseIndex } from '../../utils/selectCollapseIndex'
import { choosePanel } from '../../utils/choosePanel'


export const InformPage = withStyles(styles)(({ classes }) => {
        const [expanded, setExpanded] = useState(false)
        const [selectedIndex, setSelectedIndex] = useState();


        const handleClickItem = (e, index) => {
                selectCollapseIndex(e, index, selectedIndex, expanded, setExpanded, setSelectedIndex)
        }

        return (
                <>
                        <Box className={classes.settingsBlock}>
                                <Paragraph text="Создание персонажа" propsClasses={classes.paragraph} />
                                <Box className={classes.form}>
                                        <MyInput text="Имя" propsClasses={classes.input} />
                                        <MyInput text="Фамилия" />
                                </Box>
                                <CollapseItems data={informItems} selectedIndex={selectedIndex} handleClickItem={handleClickItem} />
                        </Box>
                        <Collapse in={expanded} className={classes.settingsBlock}>
                                {choosePanel(selectedIndex, handleClickItem)}
                        </Collapse>
                </>

        )
})
