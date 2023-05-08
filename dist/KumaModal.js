var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import styled from 'styled-components';
export function KumaModal(props) {
    var children = props.children, active = props.active;
    if (!active)
        return null;
    return (_jsx(BackDrop, { children: _jsx(ContentContainer, __assign({}, props, { children: children })) }));
}
var BackDrop = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  background: rgba(0, 0, 0, 0.35);\n"], ["\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n\n  background: rgba(0, 0, 0, 0.35);\n"])));
var ContentContainer = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  border-radius: 10px 10px 0px 0px;\n"], ["\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background: white;\n  border-radius: 10px 10px 0px 0px;\n"])));
var templateObject_1, templateObject_2;
