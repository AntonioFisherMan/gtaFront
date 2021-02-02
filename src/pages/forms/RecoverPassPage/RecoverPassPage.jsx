import { withStyles } from '@material-ui/core'
import React from 'react'

import { AccountIcon, ChatIcon, PasswordIcon } from '../../../assets/icons/icons'

import { RecoverPass } from '../../../components/RecoverPass/RecoverPass'

export const RecoverPassPage = () => {
        return (
                <>
                        {1 ?
                                <RecoverPass inputText="Логин или Email" inputIcon={<AccountIcon />} /> :
                                <> <RecoverPass inputText="Код из письма" inputIcon={<ChatIcon />} /> <RecoverPass inputText="Код подтверждения" inputIcon={<PasswordIcon />} linkButton={true} /></>}

                </>


        )
}

