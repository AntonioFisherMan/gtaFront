import { InformPanel } from '../components/InformPanels/InformPanel/InformPanel'
import { CharacteristicsPanel } from '../components/InformPanels/CharacteristicsPanel/CharacteristicsPanel'
import { characteristics, appearance, clothes } from '../data/index'
import { ClothesPanel } from '../components/InformPanels/ClothesPanel/ClothesPanel'
import { AccountPanel } from '../components/BankPanels/AccountPanel/AccountPanel'
import { MonitorIcon, HomeIcon, CircleDownIcon, CircleUpIcon } from '../assets/icons/icons';
import { prices, dates } from '../data/index'


const tabs = [
        { id: 0, text: "Пополнить счёт", icon: <CircleUpIcon style={{ marginRight: 15 }} /> },
        { id: 1, text: "Снять со счёта", icon: <CircleDownIcon style={{ marginRight: 15 }} /> },
        { id: 2, text: "Оплата недвижимости", icon: <HomeIcon style={{ marginRight: 15 }} /> },
        { id: 3, text: "Оплата бизнеса", icon: <MonitorIcon style={{ marginRight: 15 }} /> },
        { id: 4, text: "Перевести на счёт" }

]
const inputTexts = [
        { id: 0, text: "Пополнить счёт в размере ", view: 0 },
        { id: 1, text: "Снять сумму в размере ", view: 0 },
        { id: 2, text: "Оплатить налог на ", view: 1 },
        { id: 3, text: "Оплатить налог на ", view: 1 },
        { id: 4, text: "Перевести на счёт ", view: 2 },
]
const btnTexts = [
        { id: 0, text: "Пополнить счёт" },
        { id: 1, text: "Снять со счёта" },
        { id: 2, text: "Оплатить недвижимость " },
        { id: 3, text: "Оплатить бизнес" },
        { id: 4, text: "Перевести на счёт" }
]


export const choosePanel = (index, closePanel, label) => {
        if (label === 'bank') {
                switch (index) {
                        case 0:
                                return <AccountPanel closePanel={closePanel} index={0} tabs={tabs.filter(i => i.id <= 1)} isPriceIcon={true} data={prices} inputTexts={inputTexts.filter(i => i.id <= 1)} isShowInput={true} btnTexts={btnTexts.filter(i => i.id <= 1)} />
                        case 1:
                                return <AccountPanel closePanel={closePanel} index={1} tabs={tabs.filter(i => i.id > 1)} isPriceIcon={false} data={dates} inputTexts={inputTexts.filter(i => i.id > 1 && i.id <= 3)} btnTexts={btnTexts.filter(i => i.id > 1 && i.id <= 3)} />
                        case 2:
                                return <AccountPanel closePanel={closePanel} index={2} tabs={tabs.filter(i => i.id > 3)} inputTexts={inputTexts.filter(i => i.id === 4)} isShowAccountInput={true} isShowInput={true} btnTexts={btnTexts.filter(i => i.id === 4)} />
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