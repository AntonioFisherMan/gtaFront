import React, { useState } from 'react'
import { withStyles, Tabs, Tab, Box } from '@material-ui/core'
import { styles } from './styles'
import { TabPanel } from '../AppBar'
import { EscapeBlock } from '../InformPanels/EscapeBlock/EscapeBlock'
import { PriceItem } from './PriceItem/PriceItem'
import { CircleDownIcon, CircleUpIcon, DolarIcon } from '../../assets/icons/icons';
import { MoneyInform } from './MoneyInform/MoneyInform';
import { MyInput } from '../../components/Inputs/MyInput/MyInput'


export const AccountPanel = withStyles(styles)(({ classes, index, closePanel }) => {
        const [value, setValue] = useState(0);

        const handleChange = (event, newValue) => {
                setValue(newValue);
        };
        return (
                <Box className={classes.container}>
                        <Box className={classes.tabs}>
                                <Tabs value={value} onChange={handleChange} classes={{ indicator: classes.tabIndicator }}>
                                        <Tab label="Пополнить счёт" indic icon={<CircleUpIcon color={value === 0 ? "rgba(230, 36, 46, 0.75)" : "white"} />} classes={{ root: classes.tab, selected: classes.selectedTab, wrapper: classes.tabWrapper, }} />
                                        <Tab label="Снять со счёта" icon={<CircleDownIcon color={value === 1 ? "rgba(230, 36, 46, 0.75)" : "white"} />} classes={{ root: classes.tab, selected: classes.selectedTab, wrapper: classes.tabWrapper, labelIcon: classes.tabLeft }} />
                                </Tabs>
                        </Box>
                        <TabPanel value={value} index={0} >
                                <Box className={classes.priceBlock}>
                                        <Box className={classes.priceItem}>
                                                <PriceItem text="1 000" />
                                                <PriceItem text="5 000" />
                                        </Box>
                                        <Box className={classes.priceItem}>
                                                <PriceItem text="10 000" />
                                                <PriceItem text="50 000" />
                                        </Box>
                                        <Box className={classes.input}>
                                                <MyInput text="Укажите свою сумму" icon={<DolarIcon style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: 15 }} />} propsClasses={classes.input} />

                                        </Box>
                                </Box>



                                <MoneyInform text="2 500" />
                                <EscapeBlock index={index} closePanel={closePanel} text="Пополнить счёт" btnText="ENTER" propsClasses={classes.enterBlock} />
                                <EscapeBlock index={index} closePanel={closePanel} text="Выйти из банка " btnText="ESC" propsClasses={classes.escapeBlock} />
                        </TabPanel>
                        <TabPanel value={value} index={1} >
                                <Box>asdasd</Box>
                        </TabPanel>

                </Box>
        )
})