import { withStyles, Box } from '@material-ui/core'
import React from 'react'
import { Paragraph } from '../../../common/typography/Paragraph/Paragraph'
import { styles } from './styles'
import { Subtitle } from '../../../common/typography/Subtitle/Subtitle'
import { SelectButton } from '../../Buttons/SelectButton/SelectButton'
import { EscapeBlock } from '../EscapeBlock/EscapeBlock'



export const CharacteristicsPanel = withStyles(styles)(({ classes, data, closePanel, index, headline }) => {

        return (
                <>
                        <Paragraph text={headline} propsClasses={classes.headline} />
                        <Box className={classes.container}>
                                {data.map(item => {
                                        return (
                                                <Box className={classes.item}>
                                                        <Subtitle text={item.text} propsClasses={classes.text} />
                                                        <Box className={classes.itemBtn}>
                                                                <SelectButton data={item.hasOwnProperty('appearanceArr') ? item.appearanceArr : item.characteristicsArr} />
                                                        </Box>
                                                </Box>
                                        )
                                })}
                        </Box>
                        <EscapeBlock closePanel={closePanel} index={index} />
                </>
        )
})
