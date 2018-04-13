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
import { Muted } from 'tonva-react-form';
import { nav, Page } from 'tonva-tools';
var ArticleContent = /** @class */ (function (_super) {
    __extends(ArticleContent, _super);
    function ArticleContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArticleContent.prototype.render = function () {
        var value = this.props.value;
        //return <div>id = {value.id} {JSON.stringify(value)} </div>;
        if (value === undefined)
            return React.createElement("div", null, "Article");
        return React.createElement(React.Fragment, null,
            value.discription,
            " ",
            React.createElement(Muted, null, value.name));
    };
    return ArticleContent;
}(React.Component));
export { ArticleContent };
var ArticleInput = /** @class */ (function (_super) {
    __extends(ArticleInput, _super);
    function ArticleInput(props) {
        var _this = _super.call(this, props) || this;
        _this.id = 0;
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    ArticleInput.prototype.onClick = function () {
        var _a = this.props, id = _a.id, tuid = _a.tuid, entitiesUI = _a.entitiesUI, params = _a.params, onPicked = _a.onPicked;
        if (entitiesUI === undefined) {
            alert('TonvaForm props 应该包含 context=EntitiesUI');
            return;
        }
        var tuidUI = entitiesUI.tuid.coll[tuid];
        if (tuidUI === undefined) {
            alert('Tuid ' + tuid + ' 没有定义');
            return;
        }
        nav.push(React.createElement(PickTuidPage, { id: id, tuidUI: tuidUI, params: params, changeId: onPicked }));
    };
    ArticleInput.prototype.render = function () {
        var _a = this.props, id = _a.id, tuid = _a.tuid;
        return React.createElement("button", { className: "form-control btn btn-outline-info", type: "button", style: { textAlign: 'left', paddingLeft: '0.75rem' }, onClick: this.onClick },
            React.createElement("div", null,
                "\u5546\u54C1\u7279\u5B9A\u7684input: ",
                tuid,
                " id: ",
                id));
    };
    return ArticleInput;
}(React.Component));
export { ArticleInput };
var PickTuidPage = /** @class */ (function (_super) {
    __extends(PickTuidPage, _super);
    function PickTuidPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PickTuidPage.prototype.render = function () {
        var _this = this;
        var tuidUI = this.props.tuidUI;
        return React.createElement(Page, { header: '选择' + tuidUI.caption },
            "tuid: ",
            JSON.stringify({
                name: tuidUI.entity.name,
                capiton: tuidUI.caption,
            }),
            React.createElement("br", null),
            React.createElement("button", { onClick: function () {
                    var _a = _this.props, id = _a.id, changeId = _a.changeId;
                    if (id === undefined)
                        id = 0;
                    changeId(++id);
                    nav.pop();
                } }, "\u9009\u4E2D"));
    };
    return PickTuidPage;
}(React.Component));
//# sourceMappingURL=articleInput.js.map