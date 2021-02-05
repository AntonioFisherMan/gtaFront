import React from 'react'
import { withStyles, Box } from '@material-ui/core'
import { styles } from './styles'
import { Headline } from '../../../common/typography/Headline/Headline'
import { SelectButton } from '../../Buttons/SelectButton/SelectButton'
import { Subtitle } from '../../../common/typography/Subtitle/Subtitle'
import { EscapeBlock } from '../EscapeBlock/EscapeBlock'

export const ClothesPanel = withStyles(styles)(({ classes, data, headline, closePanel, index }) => {
        return (
                <Box>
                        <Headline text={headline} propsClasses={classes.headline} />
                        {data && data.map(item => {
                                return (
                                        <Box className={classes.item}>
                                                <Subtitle text={item.text} propsClasses={classes.itemText} />
                                                <SelectButton data={item.clothesArr} propsClasses={classes.itemBtn} isBackground={true} />
                                        </Box>

                                )
                        })}
                        <EscapeBlock closePanel={closePanel} index={index} propsClasses={classes.endBlock} />
                </Box>
        )
})