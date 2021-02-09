import { InformPanel } from '../components/InformPanels/InformPanel/InformPanel'
import { CharacteristicsPanel } from '../components/InformPanels/CharacteristicsPanel/CharacteristicsPanel'
import { characteristics, appearance, clothes } from '../data/index'
import { ClothesPanel } from '../components/InformPanels/ClothesPanel/ClothesPanel'
import { AccountPanel } from '../components/BankPanels/AccountPanel'
import { PaymentPanel } from '../components/BankPanels/PaymentPanel'
import { MoneyPanel } from '../components/BankPanels/MoneyPanel'



export const choosePanel = (index, closePanel, label) => {
        if (label === 'bank') {
                switch (index) {
                        case 0:
                                return <AccountPanel closePanel={closePanel} index={0} />
                        case 1:
                                return <PaymentPanel closePanel={closePanel} index={1} />
                        case 2:
                                return <MoneyPanel closePanel={closePanel} index={2} />
                }
        } else {
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

}