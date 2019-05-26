'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/initish/Pictures/VotingOnEthereum/pages/campaigns/add.js?entry';


var RequestNew = function (_Component) {
    (0, _inherits3.default)(RequestNew, _Component);

    function RequestNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            name: '',
            imageLink: '',
            partyName: '',
            flag: false,
            loading: false
        }, _this.onFinalize = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();
                                window.open('/campaigns/' + _this.props.address + '/vote', "_blank");

                            case 2:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _this.onShowResult = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(event) {
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                event.preventDefault();
                                window.open('/campaigns/' + _this.props.address + '/results', "_blank");

                            case 2:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }));

            return function (_x2) {
                return _ref3.apply(this, arguments);
            };
        }(), _this.onSubmit = function () {
            var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(event) {
                var campaign, _this$state, name, imageLink, partyName, accounts;

                return _regenerator2.default.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                event.preventDefault();

                                campaign = (0, _campaign2.default)(_this.props.address);
                                _this$state = _this.state, name = _this$state.name, imageLink = _this$state.imageLink, partyName = _this$state.partyName;

                                _this.setState({ loading: true });

                                _context3.prev = 4;
                                _context3.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context3.sent;
                                _context3.next = 10;
                                return campaign.methods.createRequest(name, partyName, imageLink).send({
                                    from: accounts[0]
                                });

                            case 10:

                                _this.setState({ name: '', imageLink: '', partyName: '' });

                                _routes.Router.pushRoute('/campaigns/' + _this.props.address + '/dashboard');
                                _context3.next = 17;
                                break;

                            case 14:
                                _context3.prev = 14;
                                _context3.t0 = _context3['catch'](4);

                                console.log(_context3.t0.message);

                            case 17:
                                _this.setState({ flag: true });
                                _this.setState({ loading: false });

                            case 19:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this2, [[4, 14]]);
            }));

            return function (_x3) {
                return _ref4.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestNew, [{
        key: 'renderRows',
        value: function renderRows() {

            var items = this.props.requests.map(function (request, index) {
                return {
                    image: request.imageLink,
                    header: request.partyName,
                    meta: request.name
                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 3, items: items, style: { marginRight: '30px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 11, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, this.renderRows()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                }
            }, 'Add a Candidate.'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, 'Name of the Candidate.'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.name,
                onChange: function onChange(event) {
                    return _this3.setState({ name: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 101
                }
            }, 'Party Name of the Candidate.'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.partyName,
                onChange: function onChange(event) {
                    return _this3.setState({ partyName: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 108
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            }, 'Image URL of the party.'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.imageLink,
                onChange: function onChange(event) {
                    return _this3.setState({ imageLink: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 110
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 116
                }
            }, 'Add Candidate.')), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 118
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'blue', style: { marginTop: '25px' }, disabled: !this.state.flag, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, 'Start Election!')), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onShowResult, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'blue', style: { marginTop: '25px' }, disabled: !this.state.flag, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, 'Show Result')))), _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.loading, inverted: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, _react2.default.createElement(_semanticUiReact.Loader, { size: 'large', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }, 'Adding the voter.')));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(props) {
                var address, campaign, requestCount, requests;
                return _regenerator2.default.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _campaign2.default)(address);
                                _context4.next = 4;
                                return campaign.methods.getRequestsCount().call();

                            case 4:
                                requestCount = _context4.sent;
                                _context4.next = 7;
                                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                                    return campaign.methods.requests(index).call();
                                }));

                            case 7:
                                requests = _context4.sent;
                                return _context4.abrupt('return', { requests: requests, address: address });

                            case 9:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getInitialProps(_x4) {
                return _ref5.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9hZGQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIkxhYmVsIiwiSW5wdXQiLCJHcmlkIiwiSW1hZ2UiLCJEaW1tZXIiLCJMb2FkZXIiLCJDYXJkIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsIm5hbWUiLCJpbWFnZUxpbmsiLCJwYXJ0eU5hbWUiLCJmbGFnIiwibG9hZGluZyIsIm9uRmluYWxpemUiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93Iiwib3BlbiIsInByb3BzIiwiYWRkcmVzcyIsIm9uU2hvd1Jlc3VsdCIsIm9uU3VibWl0IiwiY2FtcGFpZ24iLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInNlbmQiLCJmcm9tIiwicHVzaFJvdXRlIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJpdGVtcyIsInJlcXVlc3RzIiwibWFwIiwicmVxdWVzdCIsImluZGV4IiwiaW1hZ2UiLCJoZWFkZXIiLCJtZXRhIiwibWFyZ2luUmlnaHQiLCJyZW5kZXJSb3dzIiwidGFyZ2V0IiwidmFsdWUiLCJtYXJnaW5Ub3AiLCJxdWVyeSIsImdldFJlcXVlc3RzQ291bnQiLCJjYWxsIiwicmVxdWVzdENvdW50IiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFTLEFBQU8sQUFBTyxBQUFNLEFBQU0sQUFBUSxBQUFROztBQUMxRSxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFj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QUFOSTtBQUNJLGlDQUtSLEFBQUMseUNBQU8sU0FBUjs4QkFBQTtnQ0FBQTtBQUFBO2VBM0JSLEFBRUksQUF5QkksQUFFSixvQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUI7OEJBQXJCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLHlDQUFPLFVBQVIsTUFBaUIsT0FBakIsQUFBdUIsUUFBTyxPQUFPLEVBQUUsV0FBdkMsQUFBcUMsQUFBYSxVQUFVLFVBQVUsQ0FBQyxLQUFBLEFBQUssTUFBNUUsQUFBa0Y7OEJBQWxGO2dDQUFBO0FBQUE7ZUE5QlIsQUE2QkksQUFDSSxBQUVKLHFDQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQjs4QkFBckI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMseUNBQU8sVUFBUixNQUFpQixPQUFqQixBQUF1QixRQUFPLE9BQU8sRUFBRSxXQUF2QyxBQUFxQyxBQUFhLFVBQVUsVUFBVSxDQUFDLEtBQUEsQUFBSyxNQUE1RSxBQUFrRjs4QkFBbEY7Z0NBQUE7QUFBQTtlQXZDaEIsQUFDSSxBQUtJLEFBZ0NJLEFBQ0ksQUFNWixtQ0FBQSxBQUFDLHlDQUFPLFFBQVEsS0FBQSxBQUFLLE1BQXJCLEFBQTJCLFNBQVMsVUFBcEM7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMseUNBQU8sTUFBUixBQUFhOzhCQUFiO2dDQUFBO0FBQUE7ZUEvQ1osQUFDSSxBQTZDSSxBQUNJLEFBSWY7Ozs7O21IQTNINEIsQTs7Ozs7aUNBQ2pCO0EsMENBQVksTSxBQUFNLE1BQWxCLEEsQUFFRjtBLDJDQUFXLHdCQUFBLEFBQVMsQTs7dUNBQ0MsU0FBQSxBQUFTLFFBQVQsQUFBaUIsbUJBQWpCLEFBQW9DLEE7O2lDQUF6RDtBOzt5REFFaUIsQUFBUSxVQUNyQixTQUFOLEFBQU0sQUFBUyxlQUFmLEFBQ0ssT0FETCxBQUVLLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ3JCOzJDQUFPLFNBQUEsQUFBUyxRQUFULEFBQWlCLFNBQWpCLEFBQTBCLE9BQWpDLEFBQU8sQUFBaUMsQUFDM0M7QUFMYyxBQUNuQixBLGlDQUFBLENBRG1COztpQ0FBakI7QTtrRUFRQyxFQUFFLFVBQUYsVUFBWSxTQUFaLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFoQlUsQSxBQWdJekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiYWRkLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2luaXRpc2gvUGljdHVyZXMvVm90aW5nT25FdGhlcmV1bSJ9