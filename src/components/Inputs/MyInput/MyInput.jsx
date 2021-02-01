import React from 'react'
import { TextField, withStyles, IconButton } from '@material-ui/core'
import { styles } from './styles'
import AccountCircle from '@material-ui/icons/AccountCircle';
import { HomeIcon } from '../../../assets/icons/icons';

export const MyInput = withStyles(styles)(({ classes, icon, label, propsClasses }) => {

        return (
                <TextField
                        InputLabelProps={{ classes: { root: classes.label } }}
                        color="primary"
                        label={label}
                        InputProps={{
                                classes: { root: classes.input, formControl: propsClasses },

                                endAdornment: icon

                        }}

                />
        )
})
