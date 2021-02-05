import { InformPanel } from '../components/InformPanels/InformPanel/InformPanel'
import { CharacteristicsPanel } from '../components/InformPanels/CharacteristicsPanel/CharacteristicsPanel'
import { characteristics, appearance, clothes } from '../data/index'
import { ClothesPanel } from '../components/InformPanels/ClothesPanel/ClothesPanel'

export const choosePanel = (index, closePanel) => {
        switch (index) {
                case 0:
                        return <InformPanel closePanel={closePanel} index={0} />
                case 1:
                        return <CharacteristicsPanel closePanel={closePanel} index={1} headline="Характеристики" data={characteristics} />
                case 2:
                        return <CharacteristicsPanel closePanel={closePanel} index={2} headline="Внешний вид" data={appearance} />
                case 3:
                        return <ClothesPanel closePanel={closePanel} index={3} headline="Одежда" data={clothes} />
                default:
                        return ''
        }
}