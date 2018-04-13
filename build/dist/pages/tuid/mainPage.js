var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import { Button } from 'reactstrap';
import { nav, Page } from 'tonva-tools';
import { LMR, SearchBox } from 'tonva-react-form';
//import {EntitiesUI, TuidUI} from '../../ui';
//import {EditPage} from './editPage';
//import {ListPage} from './listPage';
//import {SearchPage} from './searchPage';
var MainPage = /** @class */ (function (_super) {
    __extends(MainPage, _super);
    function MainPage(props) {
        var _this = _super.call(this, props) || this;
        _this.addNew = _this.addNew.bind(_this);
        _this.list = _this.list.bind(_this);
        _this.onSearch = _this.onSearch.bind(_this);
        return _this;
    }
    MainPage.prototype.addNew = function () {
        nav.push(React.createElement(this.props.ui.editPage, { ui: this.props.ui }));
    };
    MainPage.prototype.list = function () {
        nav.push(React.createElement(this.props.ui.searchPage, { ui: this.props.ui }));
    };
    MainPage.prototype.onSearch = function (key) {
        nav.push(React.createElement(this.props.ui.searchPage, { ui: this.props.ui, data: key }));
    };
    MainPage.prototype.render = function () {
        var _a = this.props.ui, entity = _a.entity, caption = _a.caption;
        var name = entity.name, schema = entity.schema;
        caption = caption || name;
        var right = React.createElement(SearchBox, { className: "mr-3", onSearch: this.onSearch, placeholder: '搜索' + caption });
        return React.createElement(Page, { header: caption || name },
            React.createElement(LMR, { className: "mt-3", right: right },
                React.createElement("div", null,
                    React.createElement(Button, { className: "mr-3", color: "primary", onClick: this.addNew }, "\u65B0\u589E"),
                    React.createElement(Button, { className: "mr-3", color: "primary", onClick: this.list }, "\u5217\u8868"))));
    };
    return MainPage;
}(React.Component));
export { MainPage };
// <pre>{JSON.stringify(schema, undefined, ' ')}</pre>
//# sourceMappingURL=mainPage.js.map