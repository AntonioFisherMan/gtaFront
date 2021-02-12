import React from 'react'
import { withStyles, Box } from '@material-ui/core'
import { styles } from './styles'
import { Subtitle } from '../../../../common/typography/Subtitle/Subtitle';
import classNames from 'classnames'



export const InputText = withStyles(styles)(({ classes, children }) => {
        const renderContent = (children) => {
                const view = children[0].view
                if (view === 0) {
                        return <Box className={classNames(classes.textBlock, classes.center)}>
                                <Subtitle text={children ? children[0].text : null} />
                                <Subtitle text={`${children[1]}$`} propsClasses={classes.textSumm} />
                                <Subtitle text="?" />
                        </Box>

                } else if (view === 1) {
                        return <Box className={classes.textBlock2}>
                                <Subtitle text={children && children[0].text} propsClasses={classes.addition} />
                                <Subtitle text={children && children[3]} propsClasses={classes.textSumm} />
                                <Subtitle text="на " />
                                <Subtitle text={children && children[1] === 0 ? "1 день " : children[1]} propsClasses={classes.textSumm} />
                                <Subtitle text=" сумму в размере" propsClasses={classes.addition} />
                                <Subtitle text={`${"1"}$`} propsClasses={classes.textSumm} />
                                <Subtitle text="?" />

                        </Box>
                } else if (view === 2) {
                        return <Box className={classes.textBlock}>
                                <Subtitle text={children ? children[0].text : null} propsClasses={classes.addition} />
                                <Subtitle text={children ? children[2] : null} propsClasses={classes.textSumm} />
                                <Subtitle text="сумму в размере" propsClasses={classes.addition} />
                                <Subtitle text={`${children[1]}$`} propsClasses={classes.textSumm} />
                                <Subtitle text="?" />
                        </Box>
                } else {
                        return null
                }
        }
        return (
                <>
                        { renderContent(children)}
                </>
        )
})
