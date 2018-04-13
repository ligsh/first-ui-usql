import {Sheet, EntityUI, SheetUI, GeneralTuidInput, MapperContainer,SheetMapper, TuidContentProps} from 'tonva-react-usql';
import {ArticleInput, ArticleContent, CandidateRow, PickArticlePage} from './articleInput';
import {OrderRow} from './order';

export const mapperContainer:MapperContainer<Sheet, SheetUI, SheetMapper> = {
    caption: '凭单',
    mapper: {
        //link: EntityLink,
        mainPage: undefined,
    },
    mappers: {
        "购物单": {
            fieldFaces: {
                sumamount: {
                    label: '合计',
                },
            },
            detailFaces: {
                a1: {
                    label: 'a1a1--Label',
                    fields: {
                        article: {
                            label: '商品',
                            input: {
                                //ArticleInput
                                inputContent: ArticleContent,
                                candidateRow: CandidateRow,
                                pickPage: PickArticlePage,
                            }
                        },
                        price: {
                            label: '单价',
                        }
                    }
                }
            }
        },
        "order": {
            fieldFaces: {
                sumamount: {
                    label: '合计',
                },
            },
            detailFaces: {
                articles: {
                    label: '清单',
                    renderRow: OrderRow,
                    fields: {
                        article: {
                            label: '商品',
                            input: {
                                //ArticleInput
                                inputContent: ArticleContent,
                                candidateRow: CandidateRow,
                                pickPage: PickArticlePage,
                            }
                        },
                        price: {
                            label: '单价',
                        }
                    }
                }
            }
        }
    }
}
