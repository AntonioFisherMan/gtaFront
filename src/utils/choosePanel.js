import { InformPanel } from '../components/InformPanel/InformPanel'

export const choosePanel = (index) => {
        switch (index) {
                case 0:
                        return <InformPanel />
                case 1:
                        return <p>asadasdasdsdasd</p>
                case 2:
                        return <p>asadasdasdsdasd</p>
                case 3:
                        return <p>asadasdasdsdasd</p>
                default:
                        return ''
        }
}