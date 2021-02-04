import React, { useState } from 'react'
import { withStyles, Box, IconButton } from '@material-ui/core'
import { styles } from './styles'
import { Subtitle } from '../../../common/typography/Subtitle/Subtitle'
import { RightArrowIcon } from '../../../assets/icons/icons'
import { LeftArrowIcon } from '../../../assets/icons/icons'


export const SelectButton = withStyles(styles)(({ classes, data }) => {
        const [index, setIndex] = useState(0)

        const isDisabledLeft = index === 0 ? true : false;
        const isDisabledRight = data.length - 1 <= index ? true : false
        const decreaseIndex = () => {
                setIndex(prev => prev - 1)
        }
        const increaseIndex = () => {
                setIndex(prev => prev + 1)
        }

        return (
                <Box className={classes.container}>
                        <IconButton onClick={() => decreaseIndex()} disabled={isDisabledLeft} >
                                <LeftArrowIcon style={{ color: isDisabledLeft ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.8)", fontSize: "10px" }} />
                        </IconButton>
                        {data.map((item, id) => {
                                return (
                                        <>
                                                {id === index ? <Subtitle text={item.text} /> : null}

                                        </>

                                )
                        })}
                        <IconButton onClick={() => increaseIndex()} disabled={isDisabledRight}>
                                <RightArrowIcon style={{ color: isDisabledRight ? "rgba(255, 255, 255, 0.5)" : "rgba(255, 255, 255, 0.8)", fontSize: "10px" }} />
                        </IconButton>

                </Box >

        )
})