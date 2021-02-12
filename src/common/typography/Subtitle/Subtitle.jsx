


import React from 'react'
import { Typography } from '@material-ui/core'


export const Subtitle = ({ align, propsClasses, text }) => {
        return (
                <Typography align={align ? align : 'center'} className={propsClasses} variant="subtitle1">{text}</Typography>
        )
}

