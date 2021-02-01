import React from 'react'
import { Typography } from '@material-ui/core'


export const Headline = ({ align, propsClasses, text }) => {
        return (
                <Typography align={align ? align : 'center'} className={propsClasses} variant="h4">{text}</Typography>
        )
}
