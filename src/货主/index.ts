import {EntitiesMapper} from 'tonva-react-usql';
import {mapperContainer as tuidMapperContainer} from './tuid';
//import {mapperContainer as sheetMapperContainer} from './sheet';
//import {mapperContainer as historyMapperContainer} from './history';

export const pageMapper:EntitiesMapper = {
    tuid: tuidMapperContainer,
};
