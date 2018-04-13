import { FileUpload } from './货品MainPage';
export var mapperContainer = {
    //caption: '数据字典',
    mapper: {},
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
    },
};
//# sourceMappingURL=index.js.map