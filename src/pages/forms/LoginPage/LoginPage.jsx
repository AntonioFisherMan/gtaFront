import React from 'react'
import { Box, withStyles } from '@material-ui/core'
import { Headline } from '../../../common/typography/Headline/Headline'
import { styles } from '../styles'
import { FormButton } from '../../../components/Buttons/FormButton'
import { LinkButton } from '../../../components/Buttons/LinkButton'

import { MyInput } from '../../../components/Inputs/MyInput/MyInput'
import { AccountIcon, PasswordIcon } from '../../../assets/icons/icons'



export const LoginPage = withStyles(styles)(({ classes }) => {
        return (

                <Box className={classes.container}>
                        <Headline propsClasses={classes.headline} text="Войти в аккаунт" />
                        <Box className={classes.form}>
                                <Box className={classes.inputs}>
                                        <MyInput label="Логин или Email" propsClasses={classes.input} icon={<AccountIcon />} />
                                        <MyInput label="Пароль" icon={<PasswordIcon />} />
                                </Box>
                                <LinkButton text="Забыли пароль?" variant="text" propsClasses={classes.forgotBtn} />
                                <Box className={classes.buttonsBlock}>
                                        <LinkButton text="Создать аккаунт" variant="text" />
                                        <FormButton text="Войти" />
                                </Box>
                        </Box>

                </Box>
        )
})
