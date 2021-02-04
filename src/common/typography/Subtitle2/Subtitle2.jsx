import React from 'react'
import { Typography } from '@material-ui/core'


export const Subtitle2 = ({ align, propsClasses, text }) => {
        return (
                <Typography align={align ? align : 'center'} className={propsClasses} variant="subtitle2">{text}</Typography>
        )
}
