
export const selectCollapseIndex = (e, index, selectedIndex, expanded, setExpanded, setSelectedIndex) => {
        setSelectedIndex(prevState => prevState === index ? '' : index)
        if (selectedIndex === index) {
                setExpanded(!expanded)
        } else {
                setExpanded(true)
        }
}