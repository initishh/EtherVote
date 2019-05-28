'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/initish/Pictures/Github Temp file/EtherVote/components/ReactVotes.js';


var fontStyle = {
    fontSize: '20px'
};

var RequestVotes = function (_Component) {
    (0, _inherits3.default)(RequestVotes, _Component);

    function RequestVotes() {
        (0, _classCallCheck3.default)(this, RequestVotes);

        return (0, _possibleConstructorReturn3.default)(this, (RequestVotes.__proto__ || (0, _getPrototypeOf2.default)(RequestVotes)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestVotes, [{
        key: 'render',
        value: function render() {
            var request = this.props.request;

            return _react2.default.createElement(_semanticUiReact.Table.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, _react2.default.createElement(_semanticUiReact.Table.Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            }, _react2.default.createElement(_semanticUiReact.Image, { size: 'small', src: request.imageLink, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                }
            })), _react2.default.createElement(_semanticUiReact.Table.Cell, { style: fontStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                }
            }, request.name), _react2.default.createElement(_semanticUiReact.Table.Cell, { style: fontStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, request.partyName), _react2.default.createElement(_semanticUiReact.Table.Cell, { style: fontStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 19
                }
            }, request.voteCount));
        }
    }]);

    return RequestVotes;
}(_react.Component);

exports.default = RequestVotes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVhY3RWb3Rlcy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwiSW1hZ2UiLCJmb250U3R5bGUiLCJmb250U2l6ZSIsIlJlcXVlc3RWb3RlcyIsInJlcXVlc3QiLCJwcm9wcyIsImltYWdlTGluayIsIm5hbWUiLCJwYXJ0eU5hbWUiLCJ2b3RlQ291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBTzs7Ozs7OztBQUVoQixJQUFNO2NBQU4sQUFBa0I7QUFBQSxBQUNkOztJQUdFLEE7Ozs7Ozs7Ozs7O2lDQUVPO2dCQUFBLEFBRUUsVUFBVyxLQUZiLEFBRWtCLE1BRmxCLEFBRUUsQUFFUDs7bUNBQ2MsY0FBRCx1QkFBQSxBQUFPOzs4QkFBUDtnQ0FBQSxBQUNHO0FBREg7QUFBQSxhQUFBLGtCQUNJLGNBQUQsdUJBQUEsQUFBTzs7OEJBQVA7Z0NBQUEsQUFBWTtBQUFaO0FBQUEsK0JBQVksQUFBQyx3Q0FBTSxNQUFQLEFBQWMsU0FBUSxLQUFPLFFBQTdCLEFBQXFDOzhCQUFyQztnQ0FEZixBQUNHLEFBQVksQUFDWjtBQURZO2lDQUNYLGNBQUQsdUJBQUEsQUFBTyxRQUFLLE9BQVosQUFBb0I7OEJBQXBCO2dDQUFBLEFBQWdDO0FBQWhDO3VCQUZILEFBRUcsQUFBd0MsQUFDeEMsdUJBQUMsY0FBRCx1QkFBQSxBQUFPLFFBQUssT0FBWixBQUFvQjs4QkFBcEI7Z0NBQUEsQUFBZ0M7QUFBaEM7dUJBSEgsQUFHRyxBQUF3QyxBQUN4Qyw0QkFBQyxjQUFELHVCQUFBLEFBQU8sUUFBSyxPQUFaLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUFnQztBQUFoQzt1QkFMaEIsQUFDYSxBQUlHLEFBQXdDLEFBRzNEOzs7OztBQWRzQixBLEFBaUIzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZWFjdFZvdGVzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2luaXRpc2gvUGljdHVyZXMvR2l0aHViIFRlbXAgZmlsZS9FdGhlclZvdGUifQ==