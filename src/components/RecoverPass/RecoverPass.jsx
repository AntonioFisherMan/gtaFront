import React from 'react'
import { FormButton } from '../../components/Buttons/FormButton'
import classNames from 'classnames'
import { Headline } from '../../common/typography/Headline/Headline'
import { MyInput } from '../../components/Inputs/MyInput/MyInput'
import { styles } from '../../pages/Forms/styles'
import { Box, withStyles } from '@material-ui/core'
import { LinkButton } from '../Buttons/LinkButton'


export const RecoverPass = withStyles(styles)(({ classes, inputText, inputIcon, linkButton }) => {
        return (
                <Box className={classes.container} propsClasses={classes.headline}>
                        <Headline text="Восстановление пароля" />
                        <Box className={classes.form}>
                                <Box className={classes.inputs}>
                                        <MyInput text={inputText} icon={inputIcon} />
                                </Box>
                                <Box className={classNames(classes.buttonsBlock, classes.buttonsBlockMargin)}>
                                        <Box> {linkButton ? <LinkButton text="Пропустить" /> : null}</Box>
                                        <Box className={classes.right}>
                                                <FormButton text="Далее" />
                                        </Box>
                                </Box>
                        </Box>
                </Box>
        )
})


