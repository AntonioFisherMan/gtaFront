import React from 'react'
import { Typography } from '@material-ui/core'


export const Paragraph = ({ align, propsClasses, text }) => {
        return (
                <Typography align={align ? align : 'center'} className={propsClasses} variant="h5">{text}</Typography>
        )
}
