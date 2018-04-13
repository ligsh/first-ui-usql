import {GeneralTuidInput, EntityUI, HistoryUI, History, MapperContainer,HistoryMapper} from 'tonva-react-usql';
import {ListRow} from './listRow';

export const mapperContainer:MapperContainer<History, HistoryUI, HistoryMapper> = {
    caption: '流水台账',
    mapper: {
        //link: EntityLink,
        //mainPage: undefined,
    },
    mappers: {
        "商品流水": {
            listRow: ListRow,
            fieldFaces: {
                sumamount: {
                    label: '合计',
                },
            },
        }
    }
}
