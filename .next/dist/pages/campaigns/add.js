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

var _jsxFileName = '/home/initish/Pictures/Github Temp file/EtherVote/pages/campaigns/add.js?entry';


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
            loading: false,
            flag2: false
        }, _this.onFinalize = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                _this.setState({ flag2: true });

                                window.open('/campaigns/' + _this.props.address + '/vote', "_blank");

                            case 3:
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
                    lineNumber: 82
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
                    lineNumber: 87
                }
            }, _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 11, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            }, this.renderRows()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 5, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, 'Add a Candidate.'), _react2.default.createElement(_semanticUiReact.Form, { disabled: this.state.flag2, onSubmit: this.onSubmit, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, 'Name of the Candidate.'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.name,
                onChange: function onChange(event) {
                    return _this3.setState({ name: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 98
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 104
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 105
                }
            }, 'Party Name of the Candidate.'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.partyName,
                onChange: function onChange(event) {
                    return _this3.setState({ partyName: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 106
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }, 'Image URL of the party.'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.imageLink,
                onChange: function onChange(event) {
                    return _this3.setState({ imageLink: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 114
                }
            })), _react2.default.createElement(_semanticUiReact.Button, { primary: true, disabled: this.state.flag2, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 120
                }
            }, 'Add Candidate.')), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onFinalize, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'blue', style: { marginTop: '25px' }, disabled: !this.state.flag, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            }, 'Start Election!')), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onShowResult, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 125
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { inverted: true, color: 'blue', style: { marginTop: '25px' }, disabled: !this.state.flag, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 126
                }
            }, 'Show Result')))), _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.loading, inverted: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 132
                }
            }, _react2.default.createElement(_semanticUiReact.Loader, { size: 'large', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            }, 'Adding the Candidate.')));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9hZGQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIkxhYmVsIiwiSW5wdXQiLCJHcmlkIiwiSW1hZ2UiLCJEaW1tZXIiLCJMb2FkZXIiLCJDYXJkIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsIm5hbWUiLCJpbWFnZUxpbmsiLCJwYXJ0eU5hbWUiLCJmbGFnIiwibG9hZGluZyIsImZsYWcyIiwib25GaW5hbGl6ZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsIndpbmRvdyIsIm9wZW4iLCJwcm9wcyIsImFkZHJlc3MiLCJvblNob3dSZXN1bHQiLCJvblN1Ym1pdCIsImNhbXBhaWduIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVSZXF1ZXN0Iiwic2VuZCIsImZyb20iLCJwdXNoUm91dGUiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIml0ZW1zIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJpbWFnZSIsImhlYWRlciIsIm1ldGEiLCJtYXJnaW5SaWdodCIsInJlbmRlclJvd3MiLCJ0YXJnZXQiLCJ2YWx1ZSIsIm1hcmdpblRvcCIsInF1ZXJ5IiwiZ2V0UmVxdWVzdHNDb3VudCIsImNhbGwiLCJyZXF1ZXN0Q291bnQiLCJhbGwiLCJBcnJheSIsInBhcnNlSW50IiwiZmlsbCIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTSxBQUFRLEFBQVMsQUFBTyxBQUFPLEFBQU0sQUFBTSxBQUFRLEFBQVE7O0FBQzFFLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUyxB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OzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsV0FBVyxNQUFBLEFBQU0sT0FBMUMsQUFBUyxBQUFjLEFBQTBCO0FBRi9EOzs4QkFBQTtnQ0FuQlIsQUFpQkksQUFFSSxBQU1KO0FBTkk7QUFDSSxpQ0FLUixBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsVUFBVSxLQUFBLEFBQUssTUFBL0IsQUFBcUM7OEJBQXJDO2dDQUFBO0FBQUE7ZUEzQlIsQUFFSSxBQXlCSSxBQUVKLG9DQUFBLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQjs4QkFBckI7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMseUNBQU8sVUFBUixNQUFpQixPQUFqQixBQUF1QixRQUFPLE9BQU8sRUFBRSxXQUF2QyxBQUFxQyxBQUFhLFVBQVUsVUFBVSxDQUFDLEtBQUEsQUFBSyxNQUE1RSxBQUFrRjs4QkFBbEY7Z0NBQUE7QUFBQTtlQTlCUixBQTZCSSxBQUNJLEFBRUoscUNBQUEsQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCOzhCQUFyQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyx5Q0FBTyxVQUFSLE1BQWlCLE9BQWpCLEFBQXVCLFFBQU8sT0FBTyxFQUFFLFdBQXZDLEFBQXFDLEFBQWEsVUFBVSxVQUFVLENBQUMsS0FBQSxBQUFLLE1BQTVFLEFBQWtGOzhCQUFsRjtnQ0FBQTtBQUFBO2VBdkNoQixBQUNJLEFBS0ksQUFnQ0ksQUFDSSxBQU1aLG1DQUFBLEFBQUMseUNBQU8sUUFBUSxLQUFBLEFBQUssTUFBckIsQUFBMkIsU0FBUyxVQUFwQzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyx5Q0FBTyxNQUFSLEFBQWE7OEJBQWI7Z0NBQUE7QUFBQTtlQS9DWixBQUNJLEFBNkNJLEFBQ0ksQUFJZjs7Ozs7bUgsQUEvSDRCOzs7OztpQ0FDakI7QSwwQ0FBWSxNQUFNLEEsTUFBbEIsQSxBQUVGO0EsMkNBQVcsd0JBQUEsQUFBUyxBOzt1Q0FDQyxTQUFBLEFBQVMsUUFBVCxBQUFpQixtQixBQUFqQixBQUFvQzs7aUNBQXpEO0E7O3lEQUVpQixBQUFRLFVBQ3JCLFNBQU4sQUFBTSxBQUFTLGVBQWYsQUFDSyxPQURMLEFBRUssSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDckI7MkNBQU8sU0FBQSxBQUFTLFFBQVQsQUFBaUIsU0FBakIsQUFBMEIsT0FBakMsQUFBTyxBQUFpQyxBQUMzQztBQUpMLEEsQUFEbUIsaUNBQ25CLENBRG1COztpQ0FBakI7QTtrRUFRQyxFQUFFLFVBQUYsVUFBWSxTLEFBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFoQlUsQSxBQW9JekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiYWRkLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2luaXRpc2gvUGljdHVyZXMvR2l0aHViIFRlbXAgZmlsZS9FdGhlclZvdGUifQ==