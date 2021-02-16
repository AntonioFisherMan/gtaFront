import React, { useState } from 'react'
import { AppBar, Tabs, Tab, Box, Typography, withStyles, createStyles } from '@material-ui/core'
import { InformPage } from '../pages/InformPage/InformPage'
import { InformUserStylesHOC } from '../hoc/InformUserStylesHOC/InformUserStylesHOC';
import { LoginPage } from '../pages/forms/LoginPage/LoginPage';
import { RegisterPage } from '../pages/forms/RegisterPage/RegisterPage';
import { RecoverPassPage } from '../pages/forms/RecoverPassPage/RecoverPassPage';
import { FormStylesHOC } from '../hoc/FormStylesHOC/FormStylesHOC'
import { BankPage } from '../pages/BankPage/BanpPage'
import { ThemeProviderHOC } from '../hoc/InformUserStylesHOC/ThemeProviderHOC';
import { SliderPage } from '../pages/SliderPage/SliderPage'


const InformWithStyles = InformUserStylesHOC(InformPage)
const LoginWithStyles = FormStylesHOC(LoginPage)
const RegisterWithStyles = FormStylesHOC(RegisterPage)
const RecoverWithStyles = FormStylesHOC(RecoverPassPage)
const BankPageWithStyles = ThemeProviderHOC(BankPage)



export const AppBarMenu = () => {
        const [value, setValue] = useState(0);

        const handleChange = (event, newValue) => {
                setValue(newValue);
        };
        return (
                <>
                        <AppBar position="static">
                                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                        <Tab label="Inform" />
                                        <Tab label="Login" />
                                        <Tab label="Register" />
                                        <Tab label="Recover Pass" />
                                        <Tab label="Bank Page" />
                                        <Tab label="Slider Page" />
                                </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0} >
                                <InformWithStyles />
                        </TabPanel>
                        <TabPanel value={value} index={1} >
                                <LoginWithStyles />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                                <RegisterWithStyles />
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                                <RecoverWithStyles />
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                                <BankPageWithStyles />
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                                <SliderPage />
                        </TabPanel>

                </>
        )
}

export function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
                <div
                        role="tabpanel"
                        hidden={value !== index}
                        id={`full-width-tabpanel-${index}`}
                        aria-labelledby={`full-width-tab-${index}`}
                        {...other}
                >
                        {value === index && (
                                <Box >
                                        <Typography>{children}</Typography>
                                </Box>
                        )}
                </div>
        );
}