import React, { useState } from 'react'
import { IconButton, TextField, withStyles } from '@material-ui/core'
import { styles } from './styles'
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { PasswordIcon } from '../../../assets/icons/icons'


export const MyInput = withStyles(styles)(({ classes, icon, text, propsClasses, isPass }) => {
        const [showPass, setShowPass] = useState(false)

        const handleShowPass = () => {
                setShowPass(!showPass)
        }

        return (
                <TextField
                        InputLabelProps={{ classes: { root: classes.label } }}
                        color="primary"
                        type={isPass ? showPass ? "text" : "password" : "text"}
                        label={text}
                        InputProps={{
                                classes: { root: classes.input, formControl: propsClasses },
                                endAdornment: isPass ? showPass ? <IconButton onClick={handleShowPass}>
                                        <LockOpenIcon style={{ fontSize: '13px', color: "white" }} />
                                </IconButton> : <IconButton onClick={handleShowPass} ><PasswordIcon style={{ fontSize: '13px' }} /></IconButton> : icon
                        }}

                />
        )
})


