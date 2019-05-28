'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _campaign = require('../../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _Layout = require('../../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _ReactVotes = require('../../../components/ReactVotes');

var _ReactVotes2 = _interopRequireDefault(_ReactVotes);

var _VoteChart = require('../../../components/VoteChart');

var _VoteChart2 = _interopRequireDefault(_VoteChart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/initish/Pictures/Github Temp file/EtherVote/pages/campaigns/requests/new.js?entry';


var tableStyle = {
    position: 'absolute',
    width: '700px',
    left: '40px'
};

var fontStyle = {
    fontSize: '25px'
};

var RequestNew = function (_Component) {
    (0, _inherits3.default)(RequestNew, _Component);

    function RequestNew() {
        (0, _classCallCheck3.default)(this, RequestNew);

        return (0, _possibleConstructorReturn3.default)(this, (RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestNew, [{
        key: 'renderVotes',
        value: function renderVotes() {

            var voteArr = this.props.votes;

            return voteArr.map(function (request) {
                return _react2.default.createElement(_ReactVotes2.default, { request: request, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement(_semanticUiReact.Table, { style: tableStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(HeaderCell, { style: fontStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, 'Party Logo'), _react2.default.createElement(HeaderCell, { style: fontStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, 'Name'), _react2.default.createElement(HeaderCell, { style: fontStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, 'Party Name'), _react2.default.createElement(HeaderCell, { style: fontStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'Votes Received'))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 78
                }
            }, this.renderVotes())), _react2.default.createElement(_VoteChart2.default, { names: this.props.names, votecount: this.props.votecount, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, requestCount, requests, votes, names, votecount;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _campaign2.default)(address);
                                _context.next = 4;
                                return campaign.methods.getRequestsCount().call();

                            case 4:
                                requestCount = _context.sent;
                                _context.next = 7;
                                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                                    return campaign.methods.requests(index).call();
                                }));

                            case 7:
                                requests = _context.sent;
                                votes = [];

                                requests.forEach(function (request) {
                                    var jsonData = {};
                                    jsonData['name'] = request['name'];
                                    jsonData['voteCount'] = request['voteCount'];
                                    jsonData['partyName'] = request['partyName'];
                                    jsonData['imageLink'] = request['imageLink'];
                                    votes.push(jsonData);
                                });

                                votes.sort(function (a, b) {
                                    return b['voteCount'] - a['voteCount'];
                                });

                                names = [], votecount = [];

                                votes.forEach(function (vote) {
                                    names.push(vote.name);
                                    votecount.push(vote.voteCount);
                                });

                                return _context.abrupt('return', { address: address, requests: requests, requestCount: requestCount, names: names, votes: votes, votecount: votecount });

                            case 14:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIkxhYmVsIiwiVGFibGUiLCJJbnB1dCIsIkNhbXBhaWduIiwid2ViMyIsIkxheW91dCIsIlJlYWN0Vm90ZXMiLCJWb3RlQ2hhcnQiLCJ0YWJsZVN0eWxlIiwicG9zaXRpb24iLCJ3aWR0aCIsImxlZnQiLCJmb250U3R5bGUiLCJmb250U2l6ZSIsIlJlcXVlc3ROZXciLCJ2b3RlQXJyIiwicHJvcHMiLCJ2b3RlcyIsIm1hcCIsInJlcXVlc3QiLCJIZWFkZXIiLCJSb3ciLCJIZWFkZXJDZWxsIiwiQm9keSIsInJlbmRlclZvdGVzIiwibmFtZXMiLCJ2b3RlY291bnQiLCJhZGRyZXNzIiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsInJlcXVlc3RDb3VudCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsImluZGV4IiwicmVxdWVzdHMiLCJmb3JFYWNoIiwianNvbkRhdGEiLCJwdXNoIiwic29ydCIsImEiLCJiIiwidm90ZSIsIm5hbWUiLCJ2b3RlQ291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFRLEFBQVMsQUFBTSxBQUFPOztBQUM3QyxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWdCOzs7O0FBQ3ZCLEFBQU8sQUFBZTs7Ozs7Ozs7O0FBRXRCLElBQU07Y0FBYSxBQUVmO1dBRmUsQUFHZjtVQUhKLEFBQW1CO0FBQUEsQUFDZjs7QUFLSixJQUFNO2NBQU4sQUFBa0I7QUFBQSxBQUNkOztJLEFBR0U7Ozs7Ozs7Ozs7O3NDQW1DWSxBQUVWOztnQkFBTSxVQUFVLEtBQUEsQUFBSyxNQUFyQixBQUEyQixBQUUzQjs7MkJBQU8sQUFBUSxJQUFJLFVBQUEsQUFBQyxTQUFZLEFBQzVCO3VDQUFRLEFBQUMsc0NBQVcsU0FBWixBQUFxQjtrQ0FBckI7b0NBQVIsQUFBUSxBQUNYO0FBRFc7aUJBQUE7QUFEWixBQUFPLEFBR1YsYUFIVTs7OztpQ0FLRjtnQkFBQSxBQUVELFNBRkMsQUFFaUMsdUJBRmpDLEFBRUQ7Z0JBRkMsQUFFTyxNQUZQLEFBRWlDLHVCQUZqQyxBQUVPO2dCQUZQLEFBRVksYUFGWixBQUVpQyx1QkFGakMsQUFFWTtnQkFGWixBQUV3QixPQUZ4QixBQUVpQyx1QkFGakMsQUFFd0IsQUFFN0I7O21DQUNJLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ksQUFBQyx3Q0FBTSxPQUFQLEFBQWdCOzhCQUFoQjtnQ0FBQSxBQUNFO0FBREY7K0JBQ0csY0FBRDs7OEJBQUE7Z0NBQUEsQUFDRTtBQURGO0FBQUEsK0JBQ0csY0FBRDs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxjQUFZLE9BQVosQUFBb0I7OEJBQXBCO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0EsK0JBQUMsY0FBRCxjQUFZLE9BQVosQUFBb0I7OEJBQXBCO2dDQUFBO0FBQUE7ZUFGSixBQUVJLEFBQ0EseUJBQUMsY0FBRCxjQUFZLE9BQVosQUFBb0I7OEJBQXBCO2dDQUFBO0FBQUE7ZUFISixBQUdJLEFBQ0EsK0JBQUMsY0FBRCxjQUFZLE9BQVosQUFBb0I7OEJBQXBCO2dDQUFBO0FBQUE7ZUFOUixBQUNFLEFBQ0UsQUFJSSxBQUdSLHFDQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQU87QUFBUDtBQUFBLG9CQVZKLEFBQ0ksQUFTQSxBQUFPLEFBQUssQUFHWixpQ0FBQSxBQUFDLHFDQUFVLE9BQVMsS0FBQSxBQUFLLE1BQXpCLEFBQStCLE9BQU8sV0FBYSxLQUFBLEFBQUssTUFBeEQsQUFBOEQ7OEJBQTlEO2dDQWRSLEFBQ0ksQUFhSSxBQUtYO0FBTFc7Ozs7OztpSCxBQTVEaUI7Ozs7O2lDQUNqQjtBLDBDQUFZLE1BQU0sQSxNQUVwQixBLEFBRkU7QSwyQ0FFUyx3QkFBQSxBQUFTLEE7O3VDQUNDLFNBQUEsQUFBUyxRQUFULEFBQWlCLG1CQUFqQixBLEFBQW9DOztpQ0FBekQ7QTs7eURBRWlCLEFBQVEsVUFDckIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUE4QixPQUE5QixBQUFxQyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVMsT0FBVSxBQUN4RDsyQ0FBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixPQUFqQyxBQUFPLEFBQWlDLEFBQzNDO0EsQUFIa0IsQUFDbkIsaUNBQUEsQ0FEbUI7O2lDQUFqQjtBLG9EQU1BO0Esd0NBQVEsQUFDZCxBOzt5Q0FBQSxBQUFTLFFBQVEsVUFBQSxBQUFDLFNBQVksQUFDMUI7d0NBQUksV0FBSixBQUFlLEFBQ2Y7NkNBQUEsQUFBUyxVQUFVLFFBQW5CLEFBQW1CLEFBQVEsQUFDM0I7NkNBQUEsQUFBUyxlQUFlLFFBQXhCLEFBQXdCLEFBQVEsQUFDaEM7NkNBQUEsQUFBUyxlQUFlLFFBQXhCLEFBQXdCLEFBQVEsQUFDaEM7NkNBQUEsQUFBUyxlQUFlLFFBQXhCLEFBQXdCLEFBQVEsQUFDaEM7MENBQUEsQUFBTSxLQUFOLEFBQVcsQUFDZDtBQVBELEFBU0E7O3NDQUFBLEFBQU0sS0FBSyxVQUFBLEFBQVMsR0FBVCxBQUFXLEdBQUcsQUFBRTsyQ0FBUSxFQUFBLEFBQUUsZUFBYSxFQUF2QixBQUF1QixBQUFFLEFBQWM7QUFBbEUsQUFFTTs7QSx3QyxBQUFRLElBQUcsQSxZQUFVLEEsQUFDM0I7O3NDQUFBLEFBQU0sUUFBUSxVQUFBLEFBQUMsTUFBUyxBQUNwQjswQ0FBQSxBQUFNLEtBQUssS0FBWCxBQUFnQixBQUNoQjs4Q0FBQSxBQUFVLEtBQUssS0FBZixBQUFvQixBQUN2QjtBQUhEOztpRUFLTyxFQUFFLFNBQUYsU0FBWSxVQUFaLFVBQXNCLGNBQXRCLGNBQW9DLE9BQXBDLE9BQTBDLE9BQTFDLE9BQWlELFdBQWpELEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFoQ1UsQSxBQXNFekI7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2luaXRpc2gvUGljdHVyZXMvR2l0aHViIFRlbXAgZmlsZS9FdGhlclZvdGUifQ==