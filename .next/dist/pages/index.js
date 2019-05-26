'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../routes');

var _reactBootstrap = require('react-bootstrap');

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