webpackHotUpdate(5,{

/***/ 753:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(486);

var _Layout = __webpack_require__(1013);

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = __webpack_require__(1029);

var _factory2 = _interopRequireDefault(_factory);

var _web = __webpack_require__(691);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(686);

var _reactBootstrap = __webpack_require__(1313);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/initish/Pictures/Github Temp file/EtherVote/pages/index.js?entry';


var divStyle = {
    width: '600px'
};

var imgStyle = {
    height: '400px'
};

var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            errorMessage: '',
            loading: false
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var accounts, add, campaigns, address;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _context.next = 3;
                                return _web2.default.eth.getAccounts();

                            case 3:
                                accounts = _context.sent;

                                _this.setState({ loading: true, errorMessage: '' });

                                _context.prev = 5;
                                _context.next = 8;
                                return _factory2.default.methods.createCampaign().send({
                                    from: accounts[0]
                                });

                            case 8:
                                add = _context.sent;
                                _context.next = 11;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 11:
                                campaigns = _context.sent;
                                address = campaigns[campaigns.length - 1];

                                _routes.Router.pushRoute('/campaigns/' + address + '/dashboard');

                                _context.next = 20;
                                break;

                            case 16:
                                _context.prev = 16;
                                _context.t0 = _context['catch'](5);

                                _this.setState({ errorMessage: _context.t0.message });
                                _this.setState({ loading: false });

                            case 20:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[5, 16]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(_reactBootstrap.Container, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(_reactBootstrap.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, _react2.default.createElement(_reactBootstrap.Col, { xs: 6, md: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('h3', { textAlign: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Create a Campaign.'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Input, {
                label: 'Election Title',
                placeholder: 'Election Title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Group, { widths: 2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Input, {
                label: 'Constituency Name',
                placeholder: 'Constituency Name', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'Something Went Wrong.', content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { style: { marginTop: '10px' }, primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, ' Deploy to Blockchain. ')), _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.loading, inverted: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement(_semanticUiReact.Loader, { size: 'large', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }, 'Deploying the election on Blockchain.')))), _react2.default.createElement(_reactBootstrap.Col, { xs: 12, md: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, _react2.default.createElement('div', { style: divStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }, _react2.default.createElement(_reactBootstrap.Carousel, { interval: 3000, fade: true, controls: false, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement(_reactBootstrap.Carousel.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement('img', { style: imgStyle,
                className: 'd-block w-100',
                src: 'https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-pv50o4heptmeim10441npt7q54-20160901065939.Medi.jpeg',
                alt: 'First slide',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            })), _react2.default.createElement(_reactBootstrap.Carousel.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, _react2.default.createElement('img', { style: imgStyle,
                className: 'd-block w-100',
                src: 'https://c.ndtvimg.com/2019-03/5f7s9hg8_vote-generic_625x300_12_March_19.jpg',
                alt: 'Third slide',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            })), _react2.default.createElement(_reactBootstrap.Carousel.Item, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, _react2.default.createElement('img', { style: imgStyle,
                className: 'd-block w-100',
                src: 'https://www.abc.net.au/news/image/5414640-3x2-700x467.jpg',
                alt: 'Third slide',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }))))))));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiRm9ybSIsIkJ1dHRvbiIsIklucHV0IiwiTWVzc2FnZSIsIkRpbW1lciIsIkxvYWRlciIsIkxheW91dCIsImZhY3RvcnkiLCJ3ZWIzIiwiUm91dGVyIiwiQ2Fyb3VzZWwiLCJDb250YWluZXIiLCJSb3ciLCJDb2wiLCJkaXZTdHlsZSIsIndpZHRoIiwiaW1nU3R5bGUiLCJoZWlnaHQiLCJDYW1wYWlnbk5ldyIsInN0YXRlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJzZXRTdGF0ZSIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInNlbmQiLCJmcm9tIiwiYWRkIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwiY2FtcGFpZ25zIiwiYWRkcmVzcyIsImxlbmd0aCIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQVEsQUFBTyxBQUFTLEFBQVE7O0FBQy9DLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBYzs7QUFDdkIsQUFBUyxBQUFVLEFBQVcsQUFBSzs7Ozs7OztBQUVuQyxJQUFNO1dBQU4sQUFBaUI7QUFBQSxBQUNiOztBQUdKLElBQU07WUFBTixBQUFpQjtBQUFBLEFBQ2I7O0lBR0UsQTs7Ozs7Ozs7Ozs7Ozs7OzBOQUVGLEE7MEJBQVEsQUFDVSxBQUNkO3FCQUZJLEFBRUssQTtBQUZMLEFBQ0osaUIsQUFJSjtpR0FBVyxpQkFBQSxBQUFPLE9BQVA7OENBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7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QSxBQUNJO0FBREo7K0JBQ0ssY0FBRCx5QkFBQSxBQUFVOzs4QkFBVjtnQ0FBQSxBQUNJO0FBREo7QUFBQSxzREFDUyxPQUFMLEFBQVksQUFDUjsyQkFESixBQUNjLEFBQ1Y7cUJBRkosQUFFUSxBQUNKO3FCQUhKLEFBR1E7OzhCQUhSO2dDQUZSLEFBQ0ksQUFDSSxBQU9KO0FBUEk7aUNBT0gsY0FBRCx5QkFBQSxBQUFVOzs4QkFBVjtnQ0FBQSxBQUNJO0FBREo7QUFBQSxzREFDUyxPQUFMLEFBQVksQUFDUjsyQkFESixBQUNjLEFBQ1Y7cUJBRkosQUFFUSxBQUNKO3FCQUhKLEFBR1E7OzhCQUhSO2dDQVZSLEFBU0ksQUFDSSxBQU9KO0FBUEk7aUNBT0gsY0FBRCx5QkFBQSxBQUFVOzs4QkFBVjtnQ0FBQSxBQUNJO0FBREo7QUFBQSxzREFDUyxPQUFMLEFBQVksQUFDUjsyQkFESixBQUNjLEFBQ1Y7cUJBRkosQUFFUSxBQUNKO3FCQUhKLEFBR1E7OzhCQUhSO2dDQWxEaEMsQUFDSSxBQUNJLEFBQ0ksQUEyQkksQUFDSSxBQUNJLEFBaUJJLEFBQ0ksQUFhbkM7QUFibUM7Ozs7OztBQXBGZCxBLEFBb0cxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9pbml0aXNoL1BpY3R1cmVzL0dpdGh1YiBUZW1wIGZpbGUvRXRoZXJWb3RlIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/initish/Pictures/Github Temp file/EtherVote/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/initish/Pictures/Github Temp file/EtherVote/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lMzA1NzE4NWU3MGQ0M2Q5NGIwZi5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/Yjc3MmZmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCwgTWVzc2FnZSwgRGltbWVyLCBMb2FkZXIgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBmYWN0b3J5IGZyb20gJy4uL2V0aGVyZXVtL2ZhY3RvcnknO1xuaW1wb3J0IHdlYjMgZnJvbSAnLi4vZXRoZXJldW0vd2ViMyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9yb3V0ZXMnO1xuaW1wb3J0IHsgQ2Fyb3VzZWwsIENvbnRhaW5lciwgUm93LCBDb2x9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNvbnN0IGRpdlN0eWxlID0ge1xuICAgIHdpZHRoOiBgNjAwcHhgLFxufVxuXG5jb25zdCBpbWdTdHlsZSA9IHtcbiAgICBoZWlnaHQ6IGA0MDBweGBcbn1cblxuY2xhc3MgQ2FtcGFpZ25OZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGVycm9yTWVzc2FnZTogJycsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfTtcblxuICAgIG9uU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsb2FkaW5nOiB0cnVlLCBlcnJvck1lc3NhZ2U6ICcnIH0pO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhZGQgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHNcbiAgICAgICAgICAgICAgICAuY3JlYXRlQ2FtcGFpZ24oKVxuICAgICAgICAgICAgICAgIC5zZW5kKHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogYWNjb3VudHNbMF1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xuXG4gICAgICAgICAgICBjb25zdCBhZGRyZXNzID0gY2FtcGFpZ25zW2NhbXBhaWducy5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZShgL2NhbXBhaWducy8ke2FkZHJlc3N9L2Rhc2hib2FyZGApO1xuXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGVycm9yTWVzc2FnZTogZXJyLm1lc3NhZ2UgfSk7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2UgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPENvbCB4cz17Nn0gbWQ9ezZ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyB0ZXh0QWxpZ249J2NlbnRlcic+Q3JlYXRlIGEgQ2FtcGFpZ24uPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9ID5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgd2lkdGhzPXsyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybS5JbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD0nRWxlY3Rpb24gVGl0bGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdFbGVjdGlvbiBUaXRsZScgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIHdpZHRocz17Mn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0uSW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J0NvbnN0aXR1ZW5jeSBOYW1lJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQ29uc3RpdHVlbmN5IE5hbWUnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm0uR3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJTb21ldGhpbmcgV2VudCBXcm9uZy5cIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0gLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBzdHlsZT17eyBtYXJnaW5Ub3A6ICcxMHB4JyB9fSBwcmltYXJ5PiBEZXBsb3kgdG8gQmxvY2tjaGFpbi4gPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGltbWVyIGFjdGl2ZT17dGhpcy5zdGF0ZS5sb2FkaW5nfSBpbnZlcnRlZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXIgc2l6ZT0nbGFyZ2UnPkRlcGxveWluZyB0aGUgZWxlY3Rpb24gb24gQmxvY2tjaGFpbi48L0xvYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9EaW1tZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDb2wgeHM9ezEyfSBtZD17Nn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17ZGl2U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwgaW50ZXJ2YWw9ezMwMDB9IGZhZGU9e3RydWV9IGNvbnRyb2xzPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWwuSXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXtpbWdTdHlsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1ibG9jayB3LTEwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZGMtY2RuLnMzLWFwLXNvdXRoZWFzdC0xLmFtYXpvbmF3cy5jb20vZGMtQ292ZXItcHY1MG80aGVwdG1laW0xMDQ0MW5wdDdxNTQtMjAxNjA5MDEwNjU5MzkuTWVkaS5qcGVnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiRmlyc3Qgc2xpZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9jLm5kdHZpbWcuY29tLzIwMTktMDMvNWY3czloZzhfdm90ZS1nZW5lcmljXzYyNXgzMDBfMTJfTWFyY2hfMTkuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiVGhpcmQgc2xpZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkLWJsb2NrIHctMTAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly93d3cuYWJjLm5ldC5hdS9uZXdzL2ltYWdlLzU0MTQ2NDAtM3gyLTcwMHg0NjcuanBnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiVGhpcmQgc2xpZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbXBhaWduTmV3O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7O0FBREE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFHQTtBQUNBO0FBREE7QUFIQTtBQUNBO0FBSUE7QUFDQTtBQU5BO0FBQUE7QUFRQTtBQUdBO0FBQUE7QUFDQTtBQUpBO0FBUkE7QUFBQTtBQWNBO0FBQ0E7QUFEQTtBQWRBO0FBQUE7QUFDQTtBQWlCQTtBQUNBO0FBbkJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFxQkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQXZCQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUEyQkE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFBQTtBQUZBO0FBSUE7QUFKQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBRkE7QUFJQTtBQUpBO0FBQ0E7QUFHQTtBQUVBO0FBRkE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFIQTtBQU9BO0FBUEE7QUFPQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFIQTtBQU9BO0FBUEE7QUFPQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFBQTs7QUFIQTtBQWFBO0FBYkE7Ozs7Ozs7O0FBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=