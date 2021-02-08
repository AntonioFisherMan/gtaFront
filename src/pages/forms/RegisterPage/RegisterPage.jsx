import React from 'react'
import { Headline } from '../../../common/typography/Headline/Headline'
import { Box, withStyles } from '@material-ui/core'
import { styles } from '../styles'
import { MyInput } from '../../../components/Inputs/MyInput/MyInput'
import { AccountIcon, PasswordIcon, EmailIcon, CodeIcon } from '../../../assets/icons/icons'
import { FormButton } from '../../../components/Buttons/FormButton'
import { LinkButton } from '../../../components/Buttons/LinkButton'
import classNames from 'classnames'

export const RegisterPage = withStyles(styles)(({ classes }) => {
        return (
                <Box className={classes.container}>
                        <Headline text="Создание аккаунта" propsClasses={classes.headline} />
                        <Box className={classes.form}>
                                <Box className={classes.inputs}>
                                        <MyInput text="Логин" icon={<AccountIcon />} propsClasses={classes.input} />
                                        <MyInput text="Email" icon={<EmailIcon />} propsClasses={classes.input} />
                                        <MyInput text="Пароль" isPass={true} icon={<PasswordIcon />} propsClasses={classes.input} />
                                        <MyInput text="Повторите пароль" isPass={true} icon={<PasswordIcon />} propsClasses={classes.input} />
                                        <MyInput text="Реферальный код" icon={<CodeIcon />} />
                                </Box>
                                <Box className={classNames(classes.buttonsBlock, classes.buttonsBlockMargin)}>
                                        <LinkButton text="Войти в аккаунт" />
                                        <FormButton text="Далее" />
                                </Box>
                        </Box>

                </Box>
        )
})
