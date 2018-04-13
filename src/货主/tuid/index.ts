import {EntityUI, TuidUI, Tuid, MapperContainer,TuidMapper} from 'tonva-react-usql';
import {货品MainPage, FileUpload} from './货品MainPage';

export const mapperContainer:MapperContainer<Tuid, TuidUI, TuidMapper> = {
    //caption: '数据字典',
    mapper: {
    },
    mappers: {
        "货品": {
            //mainPage: 货品MainPage,
            mainPage: FileUpload,
            fieldFaces: {
                'no': {
                    label: '编号',
                    notes: '货品编号',
                    placeholder: '在这里输入编号',
                },
                name: {
                    label: '名称',
                },
                discription: {
                    label: '描述',
                },
            },
        },
        /*
        "商品": {
            input: {
                inputContent: ArticleContent,
                //component: ArticleInput
            }
        },
        "article": {
            caption: '货品',
            input: {
                inputContent: ArticleContent,
            }
        },
        "customer": {
            caption: '客户',
            icon: 'user',
            input: {
                inputContent: CustomerContent,
                candidateRow: CandidateRow,
            },
            fieldFaces: {
                name: {
                    label: '名称',
                },
                discription: {
                    label: '描述',
                }
            }
        },
        */
    },
}
