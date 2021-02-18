import { InformPanel } from '../components/InformPanels/InformPanel/InformPanel'
import { CharacteristicsPanel } from '../components/InformPanels/CharacteristicsPanel/CharacteristicsPanel'
import { characteristics, appearance, clothes, tabs, inputTexts, btnTexts, tabsAdmin } from '../data/index'
import { ClothesPanel } from '../components/InformPanels/ClothesPanel/ClothesPanel'
import { AccountPanel } from '../components/BankPanels/AccountPanel/AccountPanel'
import { prices, dates } from '../data/index'
import { AuthPanel } from '../components/AdminPanels/AuthPanel/AuthPanel'
import { AdminPanel } from '../components/AdminPanels/AdminPanel/AdminPanel'



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
        } else if (label === 'admin') {
                switch (index) {
                        case 0:
                                return <AuthPanel closePanel={closePanel} index={0} tabs={tabsAdmin.filter(i => i.id <= 1)} />
                        case 1:
                                return <AdminPanel closePanel={closePanel} index={1} tabs={tabsAdmin.filter(i => i.id <= 5 && i.id > 1)} />
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