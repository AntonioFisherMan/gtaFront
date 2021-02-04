import { InformPanel } from '../components/InformPanel/InformPanel'
import { CharacteristicsPanel } from '../components/CharacteristicsPanel/CharacteristicsPanel'


export const choosePanel = (index) => {
        switch (index) {
                case 0:
                        return <InformPanel />
                case 1:
                        return <CharacteristicsPanel />
                case 2:
                        return <p>asadasdasdsdasd</p>
                case 3:
                        return <p>asadasdasdsdasd</p>
                default:
                        return ''
        }
}