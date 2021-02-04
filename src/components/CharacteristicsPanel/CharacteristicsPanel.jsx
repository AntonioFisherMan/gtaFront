import { withStyles, Box } from '@material-ui/core'
import React from 'react'
import { Paragraph } from '../../common/typography/Paragraph/Paragraph'
import { styles } from './styles'
import { Subtitle } from '../../common/typography/Subtitle/Subtitle'
import { SelectButton } from '../Buttons/SelectButton/SelectButton'
import { LinkButton } from '../Buttons/LinkButton'
import { SecondaryButton } from '../Buttons/SecondaryButton/SecondaryButton'


const characteristicsArr = [
        { text: "Стандарт" },
        { text: "Optimal" },
        { text: "Max" },
]
const characteristics = [
        { text: "Лоб", characteristicsArr },
        { text: "Глаза", characteristicsArr },
        { text: "Нос", characteristicsArr },
        { text: "Проф. носа", characteristicsArr },
        { text: "Кончик носа", characteristicsArr },
        { text: "Скулы", characteristicsArr },
        { text: "Щёки", characteristicsArr },
        { text: "Губы", characteristicsArr },
        { text: "Челюсть", characteristicsArr },
        { text: "Проф. подбородка", characteristicsArr },
        { text: "Форма подбородка", characteristicsArr },
]

export const CharacteristicsPanel = withStyles(styles)(({ classes }) => {
        return (
                <>
                        <Paragraph text="Характеристики" propsClasses={classes.headline} />
                        <Box className={classes.container}>
                                {characteristics.map(item => {
                                        return (
                                                <Box className={classes.item}>
                                                        <Subtitle text={item.text} propsClasses={classes.text} />
                                                        <Box >
                                                                <SelectButton data={item.characteristicsArr} />
                                                        </Box>
                                                </Box>
                                        )
                                })}
                        </Box>
                        <Box className={classes.endBlock}>
                                <SecondaryButton text="esc" notIcons={true} />
                                <LinkButton text="Выйти из создания "  propsClasses={classes.endBlockBtn}/>
                        </Box>
                </>
        )
})
