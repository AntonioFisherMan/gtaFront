import React, { useState } from 'react'
import { withStyles, Box } from '@material-ui/core'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

import { EscapeBlock } from '../../../InformPanels/EscapeBlock/EscapeBlock'
import { MoneyInform } from '../../MoneyInform/MoneyInform'
import { DolarIcon } from '../../../../assets/icons/icons'

import { MyInput } from '../../../Inputs/MyInput/MyInput'
import { styles } from './styles'
import { PriceItem } from '../../PriceItem/PriceItem'
import { ListObject } from '../../ListObject/ListObject'
import { InputText } from '../InputText/InputText'



export const AccountItem = withStyles(styles)(({ classes, closePanel, index, btnTexts, inputTexts, isShowListObject, isShowToggleButton, isShowInput, isShowAccountInput, isPriceIcon, data, objectData }) => {
        const [summ, setSumm] = useState(0)
        const [account, setAccount] = useState("122 122 1233")
        const [objectText, setObjectText] = useState("Дом2")
        const handleSelect = (event, summ) => {
                setSumm(() => summ === null ? 0 : summ)
        }
        const handleObject = (event, text) => {
                setObjectText(text)
        }
        const handleSummValue = (e) => {
                setSumm(Number(e.target.value))
        }
        return (
                <>
                        <Box className={classes.priceBlock}>
                                <Box className={classes.centralBlock}>
                                        <ToggleButtonGroup
                                                value={summ}
                                                exclusive
                                                onChange={handleSelect}
                                                classes={{ root: classes.priceItems }}
                                        >
                                                {data && data.map(item => {
                                                        return (
                                                                <ToggleButton value={item.text} classes={{ root: classes.priceItem, selected: classes.selectedPriceItem }}>
                                                                        <PriceItem item={item} isIcon={isPriceIcon} propsClasses={classes.priceItemText} />
                                                                </ToggleButton>

                                                        )
                                                })}
                                                {isShowToggleButton &&
                                                        <ToggleButton value={"30 дней"} classes={{ root: classes.priceItemWidth, selected: classes.selectedPriceItem }}>
                                                                <PriceItem item={{ text: "30 дней" }} isIcon={isPriceIcon} propsClasses={classes.priceItemText} />
                                                        </ToggleButton>}
                                        </ToggleButtonGroup >

                                        {isShowListObject && <ListObject handleObject={handleObject} objectText={objectText} data={objectData} />}


                                </Box>


                                <Box className={classes.input}>
                                        {isShowAccountInput && <MyInput text="Номер счёта" propsClasses={classes.input} onChange={(e) => setAccount(e.target.value)} type="number" />}
                                        {isShowInput && <MyInput text="Укажите свою сумму" icon={<DolarIcon style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: 15 }} />} propsClasses={classes.input} onChange={handleSummValue} type="number" />}
                                </Box>
                                <Box className={classes.text}>
                                        <InputText>
                                                {inputTexts}
                                                {summ}
                                                {account}
                                                {objectText}
                                        </InputText>
                                </Box>


                        </Box>

                        <MoneyInform text="2 500" />
                        <EscapeBlock index={index} closePanel={closePanel} text={btnTexts ? btnTexts.text : "Пополнить счёт"} btnText="ENTER" propsClasses={classes.enterBlock} />
                        <EscapeBlock index={index} closePanel={closePanel} text="Выйти из банка " btnText="ESC" propsClasses={classes.escapeBlock} />
                </>
        )
})
