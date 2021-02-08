import React, { useState } from 'react'
import { withStyles, Box, Divider } from '@material-ui/core'
import { styles } from './styles'
import { CollapseItems } from '../../components/CollapseItems/CollapseItems'
import { bankItems } from '../../data'
import { selectCollapseIndex } from '../../utils/selectCollapseIndex'
import { Headline } from '../../common/typography/Headline/Headline'
import { Subtitle2 } from '../../common/typography/Subtitle2/Subtitle2'
import { BankLogo } from '../../assets/icons/icons'


export const BankPage = withStyles(styles)(({ classes }) => {
        const [expanded, setExpanded] = useState(false)
        const [selectedIndex, setSelectedIndex] = useState();


        const handleClickItem = (e, index) => {
                selectCollapseIndex(e, index, selectedIndex, expanded, setExpanded, setSelectedIndex)
        }

        return (
                <>
                        <Box className={classes.container}>
                                <Box className={classes.iconBlock}>
                                        <BankLogo />
                                        <Box className={classes.textBlock}>
                                                <Headline text="MAZE" propsClasses={classes.headline} />
                                                <Headline text="BANK" />
                                        </Box>

                                </Box>
                                <Box className={classes.numbersBlock}>
                                        <Box className={classes.numbersLeft}>
                                                <Headline text="01 053 75" align="center" propsClasses={classes.text} />
                                                <Subtitle2 text="Номер счета" align="left" propsClasses={classes.subtitle} />
                                        </Box>
                                        <Box className={classes.numbersRight}>
                                                <Headline text="500 000" align="center" propsClasses={classes.text} />
                                                <Subtitle2 text="Деньги на счету" propsClasses={classes.subtitle} />
                                        </Box>
                                </Box>

                                <Box className={classes.collapseBlock}>
                                        <CollapseItems data={bankItems} selectedIndex={selectedIndex} handleClickItem={handleClickItem} propsClasses={classes.btn} width={classes.btnWidth} />
                                </Box>

                        </Box>

                </>
        )
})
