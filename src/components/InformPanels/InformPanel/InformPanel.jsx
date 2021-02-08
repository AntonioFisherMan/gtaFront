import React, { useState } from 'react'
import { withStyles, Box, Checkbox, FormControlLabel, Slider } from '@material-ui/core'
import { Paragraph } from '../../../common/typography/Paragraph/Paragraph'
import { Subtitle } from '../../../common/typography/Subtitle/Subtitle'
import { Subtitle2 } from '../../../common/typography/Subtitle2/Subtitle2'
import { styles } from './styles'
import classNames from 'classnames'
import { SelectButton } from '../../Buttons/SelectButton/SelectButton'
import { RandomIcon, CheckboxIcon, CheckboxIcon2, SelectedCheckboxIcon } from '../../../assets/icons/icons'
import { LinkButton } from '../../Buttons/LinkButton'
import { ages, names, nations } from '../../../data/index'
import { EscapeBlock } from '../EscapeBlock/EscapeBlock'
import CheckBoxIcon from '@material-ui/icons/CheckBox';

export const InformPanel = withStyles(styles)(({ classes, closePanel, index }) => {
        let [checked, setChecked] = useState({ man: false, women: false })

        const handleCheck = (e) => {
                setChecked({ ...checked, [e.target.name]: e.target.checked })
        }

        return (
                <Box className={classes.container}>
                        <Paragraph text="Информация" propsClasses={classes.headline} />
                        <Box className={classes.center}>
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
                                <SelectButton data={ages} isBackground={true} propsClasses={classes.btn} />

                                <Subtitle text="Национальность" />
                                <SelectButton data={nations} isBackground={true} propsClasses={classes.btn} />
                                <Subtitle text="Родители" />
                        </Box>

                        <Box className={classes.flex}>
                                <SelectButton data={names} isBackground={true} propsClasses={classes.btn} />
                                <SelectButton data={names} isBackground={true} propsClasses={classNames(classes.selectMargin, classes.btn)} />
                        </Box>

                        <Box>
                                <Subtitle text="Родословная" propsClasses={classes.sliderText} />
                                <Box className={classes.sliderBlock}>
                                        <Slider classes={{ thumb: classes.slider }} />
                                        <Box className={classes.sliderTextBlock}>
                                                <Subtitle2 text="Отец" />
                                                <Subtitle2 text="Мать" />
                                        </Box>
                                </Box>
                                <Subtitle text="Оттенок кожи" propsClasses={classes.sliderText} />
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

                        <EscapeBlock closePanel={closePanel} index={index} />

                </Box >

        )
})
