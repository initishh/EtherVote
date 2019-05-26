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

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/initish/Pictures/VotingOnEthereum/components/RequestRow.js';


var fontStyle = {
    fontSize: '20px',
    padding: '10px'
};

var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestRow);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            loading: false
        }, _this.onApprove = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
            var accounts, campaign;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return _web2.default.eth.getAccounts();

                        case 2:
                            accounts = _context.sent;
                            campaign = (0, _campaign2.default)(_this.props.address);

                            _this.setState({ loading: true });
                            _context.prev = 5;
                            _context.next = 8;
                            return campaign.methods.approveRequest(_this.props.id).send({
                                from: accounts[0]
                            });

                        case 8:
                            _context.next = 13;
                            break;

                        case 10:
                            _context.prev = 10;
                            _context.t0 = _context['catch'](5);

                            _this.setState({ loading: false });

                        case 13:

                            _this.setState({ loading: false });

                        case 14:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this2, [[5, 10]]);
        })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestRow, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                id = _props.id,
                request = _props.request;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onApprove, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }, _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement(_semanticUiReact.Image, { size: 'small', src: request.imageLink, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }), _react2.default.createElement('div', { style: fontStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, ' ', request.partyName, ' ')), _react2.default.createElement(_semanticUiReact.Table.Cell, { textAlign: 'center', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { size: 'large', fluid: true, inverted: true, color: 'green', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, 'VOTE'))))), _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.loading, inverted: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }, _react2.default.createElement(_semanticUiReact.Loader, { size: 'large', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                }
            }, 'Recording your vote.')));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiQnV0dG9uIiwiSW1hZ2UiLCJGb3JtIiwiSGVhZGVyIiwiRGltbWVyIiwiTG9hZGVyIiwid2ViMyIsIkNhbXBhaWduIiwiZm9udFN0eWxlIiwiZm9udFNpemUiLCJwYWRkaW5nIiwiUmVxdWVzdFJvdyIsInN0YXRlIiwibG9hZGluZyIsIm9uQXBwcm92ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwibWV0aG9kcyIsImFwcHJvdmVSZXF1ZXN0IiwiaWQiLCJzZW5kIiwiZnJvbSIsInJlcXVlc3QiLCJpbWFnZUxpbmsiLCJwYXJ0eU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFPLEFBQVEsQUFBTyxBQUFNLEFBQVEsQUFBUTs7QUFDckQsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7Ozs7Ozs7O0FBRXJCLElBQU07Y0FBWSxBQUVkO2FBRkosQUFBa0I7QUFBQSxBQUNkOztJLEFBSUU7Ozs7Ozs7Ozs7Ozs7Ozt3TixBQUVGO3FCQUFRLEFBQ0ssQTtBQURMLEFBQ0osaUIsQUFHSixxRkFBWSxtQkFBQTswQkFBQTswRUFBQTswQkFBQTtxREFBQTs2QkFBQTs0Q0FBQTttQ0FDZSxjQUFBLEFBQUssSUFEcEIsQUFDZSxBQUFTOzs2QkFBMUI7QUFERSxnREFFRjtBQUZFLHVDQUVTLHdCQUFTLE1BQUEsQUFBSyxNQUZ2QixBQUVTLEFBQW9CLEFBQ3JDOztrQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUhSLEFBR1IsQUFBYyxBQUFXOzRDQUhqQjs0Q0FBQTs0Q0FNRSxBQUFTLFFBQVQsQUFBaUIsZUFBZSxNQUFBLEFBQUssTUFBckMsQUFBMkMsSUFBM0MsQUFBK0M7c0NBQzNDLFNBUE4sQUFNRSxBQUFvRCxBQUNoRCxBQUFTO0FBRHVDLEFBQ3RELDZCQURFOzs2QkFORjs0Q0FBQTtBQUFBOzs2QkFBQTs0Q0FBQTs0REFVSjs7a0NBQUEsQUFBSyxTQUFTLEVBQUUsU0FWWixBQVVKLEFBQWMsQUFBVzs7NkJBRzdCOztrQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQWJSLEFBYVIsQUFBYyxBQUFXOzs2QkFiakI7NkJBQUE7NENBQUE7O0FBQUE7cUNBQUE7QTs7Ozs7aUNBZ0JIO3lCQUVtQixLQUZuQixBQUV3QjtnQkFGeEIsQUFFRyxZQUZILEFBRUc7Z0JBRkgsQUFFTyxpQkFGUCxBQUVPLEFBRVo7O21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQyx1Q0FBSyxVQUFVLEtBQWhCLEFBQXFCOzhCQUFyQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHVCQUFBLEFBQU87OzhCQUFQO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMsd0NBQU0sTUFBUCxBQUFZLFNBQVEsS0FBSyxRQUF6QixBQUFpQzs4QkFBakM7Z0NBREosQUFDSSxBQUNEO0FBREM7Z0NBQ0QsY0FBQSxTQUFLLE9BQUwsQUFBYzs4QkFBZDtnQ0FBQTtBQUFBO2VBQTJCLGFBQTNCLEFBQW1DLFdBSDFDLEFBQ0ksQUFFRyxBQUVILHVCQUFDLGNBQUQsdUJBQUEsQUFBTyxRQUFLLFdBQVosQUFBc0I7OEJBQXRCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLHlDQUFPLE1BQVIsQUFBYSxTQUFRLE9BQXJCLE1BQTJCLFVBQTNCLE1BQW9DLE9BQXBDLEFBQTBDOzhCQUExQztnQ0FBQTtBQUFBO2VBVHBCLEFBQ0ksQUFDSSxBQUNJLEFBS0ksQUFDSSxBQU1oQiw2QkFBQSxBQUFDLHlDQUFPLFFBQVEsS0FBQSxBQUFLLE1BQXJCLEFBQTJCLFNBQVMsVUFBcEM7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLEFBQUMseUNBQU8sTUFBUixBQUFhOzhCQUFiO2dDQUFBO0FBQUE7ZUFqQlosQUFDSSxBQWVJLEFBQ0ksQUFJZjs7Ozs7QUEvQ29CLEEsQUFrRHpCOztrQkFBQSxBQUFlIiwiZmlsZSI6IlJlcXVlc3RSb3cuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvaW5pdGlzaC9QaWN0dXJlcy9Wb3RpbmdPbkV0aGVyZXVtIn0=