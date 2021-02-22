import React, { useState } from 'react'
import { withStyles, Tabs, Tab, Box } from '@material-ui/core'
import { styles } from './styles'
import { TabPanel } from '../../AppBar'
import { AccountItem } from './AccountItem/AccountItem'

import { listOfProperty, listOfBusiness } from '../../../data/index';

export const AccountPanel = withStyles(styles)(({ classes, index, closePanel, tabs, isPriceIcon, data, inputTexts, isShowAccountInput, isShowInput, btnTexts }) => {
        const [value, setValue] = useState(0);

        const handleChange = (e, newValue) => {
                setValue(newValue)
        }
        return (
                <Box className={classes.container}>
                        <Box className={classes.tabs}>
                                <Tabs value={value} onChange={handleChange} classes={{ indicator: classes.tabIndicator }}>
                                        <Tab label={tabs[0].text} icon={tabs[0].icon && tabs[0].icon} classes={{ root: tabs[1] ? classes.tab : classes.oneTab, selected: tabs[1] ? classes.selectedTab : null, wrapper: classes.tabWrapper, }} />
                                        {tabs[1] && <Tab label={tabs[1].text} icon={tabs[1].icon} classes={{ root: classes.tab, selected: classes.selectedTab, wrapper: classes.tabWrapper, labelIcon: classes.tabIcon }} />}
                                </Tabs>
                        </Box>
                        {tabs.length > 1
                                ? <>
                                        <TabPanel value={value} index={0} >
                                                <AccountItem closePanel={closePanel}
                                                        index={index}
                                                        btnTexts={btnTexts[0]}
                                                        isShowListObject={tabs[0].id === 2 ? true : false}
                                                        isShowInput={tabs[0].id === 0 ? true : false}
                                                        isShowToggleButton={tabs[0].id === 2 ? true : false}
                                                        isPriceIcon={isPriceIcon}
                                                        objectData={listOfProperty}
                                                        data={data}
                                                        inputTexts={inputTexts[0]} />
                                        </TabPanel>
                                        <TabPanel value={value} index={1} closePanel={closePanel} >
                                                <AccountItem closePanel={closePanel}
                                                        data={data}
                                                        index={index}
                                                        inputTexts={inputTexts[1]}
                                                        isShowInput={tabs[1].id === 1 ? true : false}
                                                        isShowListObject={tabs[1].id === 3 ? true : false}
                                                        isShowToggleButton={tabs[1].id === 3 ? true : false}
                                                        isPriceIcon={isPriceIcon}
                                                        objectData={listOfBusiness}
                                                        btnTexts={btnTexts[1]}

                                                />
                                        </TabPanel>
                                </>
                                : <TabPanel value={value} index={0} >
                                        <AccountItem closePanel={closePanel}
                                                index={index}
                                                isShowAccountInput={isShowAccountInput}
                                                isShowInput={isShowInput}
                                                isShowListObject={tabs[0].id === 2 ? true : false}
                                                isShowToggleButton={tabs[0].id === 2 ? true : false}
                                                isPriceIcon={isPriceIcon}
                                                data={data}
                                                btnTexts={btnTexts[0]}
                                                inputTexts={inputTexts[0]} />
                                </TabPanel>}


                </Box>
        )
})
