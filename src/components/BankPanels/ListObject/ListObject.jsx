import React from 'react'
import { withStyles, Box } from '@material-ui/core'
import { Paragraph } from '../../../common/typography/Paragraph/Paragraph'
import { Subtitle2 } from '../../../common/typography/Subtitle2/Subtitle2'
import { styles } from './styles'
import { PriceItem } from '../PriceItem/PriceItem'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { QuestionItem } from '../../AdminPanels/AdminPanel/QuestionItem/QuestionItem'


export const ListObject = withStyles(styles)(({ classes, objectText, handleObject, data, headline, subtitle, questionItem }) => {
        return (
                <Box className={classes.container}>
                        <Paragraph text={headline ? headline : "Список объектов"} align="right" />
                        <Subtitle2 text={subtitle ? subtitle : "Выберите объект для оплаты недвижимости"} align="right" propsClasses={classes.subtitle2} />

                        <ToggleButtonGroup
                                value={objectText}
                                exclusive
                                onChange={handleObject}
                                classes={{ root: classes.itemsBlock }}
                        >

                                {data.map((item, index) => {
                                        return (
                                                <ToggleButton value={questionItem ? item : [item.text, item.number].toString().replace(',', ' ')} classes={{ root: classes.item, selected: classes.selectedItem }}>
                                                        {questionItem ? <QuestionItem item={item} /> : <PriceItem item={item} propsClasses={classes.itemText} />}
                                                </ToggleButton>
                                        )
                                })}

                        </ToggleButtonGroup>
                </Box>
        )
})




