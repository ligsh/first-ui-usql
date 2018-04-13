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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import * as React from 'react';
import { SearchBox, List } from 'tonva-react-form';
import { nav, Page } from 'tonva-tools';
var ArticleContent = /** @class */ (function (_super) {
    __extends(ArticleContent, _super);
    function ArticleContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArticleContent.prototype.render = function () {
        var value = this.props.value;
        return React.createElement("div", null,
            "id = ",
            value.id,
            " ",
            JSON.stringify(value),
            " ");
    };
    return ArticleContent;
}(React.Component));
export { ArticleContent };
var CandidateRow = /** @class */ (function (_super) {
    __extends(CandidateRow, _super);
    function CandidateRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CandidateRow.prototype.render = function () {
        return React.createElement("div", { className: "p-4" }, JSON.stringify(this.props.item));
    };
    return CandidateRow;
}(React.Component));
export { CandidateRow };
var ArticleInput = /** @class */ (function (_super) {
    __extends(ArticleInput, _super);
    function ArticleInput(props) {
        var _this = _super.call(this, props) || this;
        _this.id = 0;
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    ArticleInput.prototype.onClick = function () {
        var _a = this.props, id = _a.id, tuid = _a.tuid, input = _a.input, entitiesUI = _a.entitiesUI, params = _a.params, onPicked = _a.onPicked;
        if (entitiesUI === undefined) {
            alert('TonvaForm props 应该包含 context=EntitiesUI');
            return;
        }
        var tuidUI = entitiesUI.tuid.coll[tuid];
        if (tuidUI === undefined) {
            alert('Tuid ' + tuid + ' 没有定义');
            return;
        }
        nav.push(React.createElement(PickArticlePage, { id: id, input: input, tuidUI: tuidUI, params: params, onPicked: onPicked }));
    };
    ArticleInput.prototype.render = function () {
        var _a = this.props, id = _a.id, tuid = _a.tuid;
        return React.createElement("button", { className: "form-control btn btn-outline-info", type: "button", style: { textAlign: 'left', paddingLeft: '0.75rem' }, onClick: this.onClick },
            React.createElement("div", null,
                "Article: ",
                tuid,
                " id: ",
                id));
    };
    return ArticleInput;
}(React.Component));
export { ArticleInput };
var PickArticlePage = /** @class */ (function (_super) {
    __extends(PickArticlePage, _super);
    function PickArticlePage(props) {
        var _this = _super.call(this, props) || this;
        _this.onSearch = _this.onSearch.bind(_this);
        _this.renderRow = _this.renderRow.bind(_this);
        _this.rowClick = _this.rowClick.bind(_this);
        _this.state = {
            items: null
        };
        return _this;
    }
    PickArticlePage.prototype.onSearch = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.props.tuidUI.entity.search(key, 0, 30)];
                    case 1:
                        result = _a.sent();
                        this.setState({
                            items: result
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PickArticlePage.prototype.renderRow = function (item, index) {
        var CandidateRow = this.props.input.candidateRow;
        if (CandidateRow !== undefined)
            return React.createElement(CandidateRow, { item: item, index: index });
        return React.createElement("div", { className: "px-3 py-2" }, JSON.stringify(item));
    };
    PickArticlePage.prototype.rowClick = function (item) {
        this.props.onPicked(item);
        nav.pop();
    };
    PickArticlePage.prototype.render = function () {
        var _a = this.props, tuidUI = _a.tuidUI, input = _a.input;
        var header = React.createElement(SearchBox, { className: "mx-1 w-100", placeholder: tuidUI.caption, onSearch: this.onSearch });
        return React.createElement(Page, { header: header },
            React.createElement(List, { className: "my-3", before: '搜索' + tuidUI.caption + '--哈哈', items: this.state.items, item: { render: this.renderRow, onClick: this.rowClick } }));
    };
    return PickArticlePage;
}(React.Component));
export { PickArticlePage };
//# sourceMappingURL=articleInput.js.map