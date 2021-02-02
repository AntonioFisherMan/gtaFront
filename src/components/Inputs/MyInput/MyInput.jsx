import React from 'react'
import { TextField, withStyles } from '@material-ui/core'
import { styles } from './styles'


export const MyInput = withStyles(styles)(({ classes, icon, text, propsClasses }) => {

        return (
                <TextField
                        InputLabelProps={{ classes: { root: classes.label } }}
                        color="primary"
                        label={text}
                        InputProps={{
                                classes: { root: classes.input, formControl: propsClasses },
                                endAdornment: icon
                        }}

                />
        )
})
