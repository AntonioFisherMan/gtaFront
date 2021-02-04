import { withStyles, Box, Checkbox, FormControlLabel, Slider, IconButton } from '@material-ui/core'
import React, { useState } from 'react'
import { Paragraph } from '../../common/typography/Paragraph/Paragraph'
import { Subtitle } from '../../common/typography/Subtitle/Subtitle'
import { Subtitle2 } from '../../common/typography/Subtitle2/Subtitle2'
import { styles } from './styles'
import classNames from 'classnames'
import { SelectButton } from '../SelectButton/SelectButton'
import { RandomIcon } from '../../assets/icons/icons'
import { CheckboxIcon } from '../../assets/icons/icons'
import { CheckboxIcon2 } from '../../assets/icons/icons'
import { SliderIcon } from '../../assets/icons/icons'
import { LinkButton } from '../Buttons/LinkButton'


export const InformPanel = withStyles(styles)(({ classes }) => {
        let [checked, setChecked] = useState({ man: false, women: false })

        const handleCheck = (e) => {
                setChecked({ ...checked, [e.target.name]: e.target.checked })
        }

        return (
                <Box className={classes.container}>
                        <Paragraph text="Информация" propsClasses={classes.headline} />
                        <Subtitle text="Пол" />
                        <Box className={classes.checkboxBlock}>
                                <FormControlLabel
                                        classes={{ root: classNames(classes.label, classes.checkboxLeft) }}
                                        control={
                                                <Checkbox
                                                        icon={<CheckboxIcon />}
                                                        classes={{ root: classes.checkbox }}
                                                        checked={checked.men}
                                                        onChange={handleCheck}
                                                        name="men"
                                                        color="primary"
                                                />
                                        }
                                        label="Мужской"
                                />

                                <FormControlLabel
                                        classes={{ root: classNames(classes.label, classes.checkboxRight) }}
                                        control={
                                                <Checkbox
                                                        icon={<CheckboxIcon2 />}
                                                        classes={{ root: classes.checkbox }}
                                                        checked={checked.women}
                                                        onChange={handleCheck}
                                                        name="women"
                                                        color="primary"
                                                />
                                        }
                                        label="Женский"
                                />
                        </Box>
                        <Subtitle text="Возраст" />

                        <SelectButton text="23" isCenter={true} />


                        <Subtitle text="Национальность" />
                        <SelectButton text="Русский" isCenter={true} />
                        <Subtitle text="Родители" />
                        <Box className={classes.flex}>
                                <SelectButton text="Андриан" />
                                <SelectButton text="Грейси" propsClasses={classes.selectMargin} />
                        </Box>


                        <Box>
                                <Subtitle text="Родословная" />
                                <Box className={classes.sliderBlock}>
                                        <Slider classes={{ thumb: classes.slider }} />
                                        <Box className={classes.sliderTextBlock}>
                                                <Subtitle2 text="Отец" />
                                                <Subtitle2 text="Мать" />
                                        </Box>
                                </Box>
                                <Subtitle text="Оттенок кожи" />
                                <Box className={classes.sliderBlock}>
                                        <Slider classes={{ thumb: classes.slider }} />
                                        <Box className={classes.sliderTextBlock}>
                                                <Subtitle2 text="Светлее" />
                                                <Subtitle2 text="Темнее" />
                                        </Box>
                                </Box>
                        </Box>

                        <Box className={classes.iconBlock}>
                                <LinkButton text="Сгенерировать случайно " propsClasses={classes.iconBlockBtn} />
                                <RandomIcon />
                        </Box>
                        <Box className={classes.endBlock}>
                                <SelectButton text="ESC" propsClasses={classes.endBlockBtn} notIcons={true} />
                                <LinkButton text="Выйти из создания " propsClasses={classes.endBtnSize} />
                        </Box>

                </Box >

        )
})
