'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _highlight = require('highlight.js');

var _highlight2 = _interopRequireDefault(_highlight);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Highlight = function (_React$Component) {
    _inherits(Highlight, _React$Component);

    function Highlight(props) {
        _classCallCheck(this, Highlight);

        var _this = _possibleConstructorReturn(this, (Highlight.__proto__ || Object.getPrototypeOf(Highlight)).call(this, props));

        _this.setEl = _this.setEl.bind(_this);
        return _this;
    }

    _createClass(Highlight, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.highlightCode();
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.highlightCode();
        }
    }, {
        key: 'highlightCode',
        value: function highlightCode() {
            var nodes = this.el.querySelectorAll('pre code');

            for (var i = 0; i < nodes.length; i++) {
                _highlight2.default.highlightBlock(nodes[i]);
            }
        }
    }, {
        key: 'setEl',
        value: function setEl(el) {
            this.el = el;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                className = _props.className,
                Element = _props.element,
                innerHTML = _props.innerHTML;

            var props = { ref: this.setEl, className: className };

            if (innerHTML) {
                props.dangerouslySetInnerHTML = { __html: children };
                if (Element) {
                    return _react2.default.createElement(Element, props);
                }
                return _react2.default.createElement('div', props);
            }

            if (Element) {
                return _react2.default.createElement(
                    Element,
                    props,
                    children
                );
            }
            return _react2.default.createElement(
                'pre',
                { ref: this.setEl },
                _react2.default.createElement(
                    'code',
                    { className: className },
                    children
                )
            );
        }
    }]);

    return Highlight;
}(_react2.default.Component);

Highlight.defaultProps = {
    innerHTML: false,
    className: null,
    element: null
};

exports.default = Highlight;