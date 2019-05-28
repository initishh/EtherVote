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

var _reactChartjs = require('react-chartjs-2');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/initish/Pictures/Github Temp file/EtherVote/components/VoteChart.js';


var chartStyle = {
    position: 'absolute',
    width: '700px',
    right: '40px'
};

var VoteChart = function (_Component) {
    (0, _inherits3.default)(VoteChart, _Component);

    function VoteChart(props) {
        (0, _classCallCheck3.default)(this, VoteChart);

        var _this = (0, _possibleConstructorReturn3.default)(this, (VoteChart.__proto__ || (0, _getPrototypeOf2.default)(VoteChart)).call(this, props));

        var votes = props.votes;
        var names = props.names;
        var votecount = props.votecount;

        // const names = [],votecount=[];
        // votes.forEach((vote) => {
        //     names.push(vote.name);
        //     votecount.push(vote.voteCount);
        // });

        _this.state = {
            chartData: {
                labels: names,
                datasets: [{
                    label: 'TOP',
                    data: votecount,
                    backgroundColor: ['rgba(54, 162, 235, 0.6)', 'rgba(255, 206, 86, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(153, 102, 255, 0.6)', 'rgba(255, 159, 64, 0.6)', 'rgba(255, 99, 132, 0.6)']
                }]
            }
        };
        return _this;
    }

    (0, _createClass3.default)(VoteChart, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }, _react2.default.createElement('div', { style: chartStyle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(_reactChartjs.Bar, {
                data: this.state.chartData,
                width: 100,
                height: 40,
                options: {
                    title: {
                        display: false,
                        text: 'Lok Sabha Election',
                        fontSize: 50
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }, scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    },
                    layout: {
                        padding: {
                            left: 50,
                            right: 0,
                            bottom: 0,
                            top: 0
                        }
                    }
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }), _react2.default.createElement(_reactChartjs.Pie, {
                data: this.state.chartData,
                options: {
                    title: {
                        display: false,
                        text: 'Lok Sabha Election',
                        fontSize: 50
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    },
                    layout: {
                        padding: {
                            left: 50,
                            right: 0,
                            bottom: 0,
                            top: 0
                        }
                    }
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            })));
        }
    }]);

    return VoteChart;
}(_react.Component);

exports.default = VoteChart;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvVm90ZUNoYXJ0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQmFyIiwiUGllIiwiY2hhcnRTdHlsZSIsInBvc2l0aW9uIiwid2lkdGgiLCJyaWdodCIsIlZvdGVDaGFydCIsInByb3BzIiwidm90ZXMiLCJuYW1lcyIsInZvdGVjb3VudCIsInN0YXRlIiwiY2hhcnREYXRhIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImRhdGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aXRsZSIsImRpc3BsYXkiLCJ0ZXh0IiwiZm9udFNpemUiLCJsZWdlbmQiLCJzY2FsZXMiLCJ5QXhlcyIsInRpY2tzIiwiYmVnaW5BdFplcm8iLCJsYXlvdXQiLCJwYWRkaW5nIiwibGVmdCIsImJvdHRvbSIsInRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUSxBQUFLOzs7Ozs7O0FBRWIsSUFBTTtjQUFhLEFBRWY7V0FGZSxBQUdmO1dBSEosQUFBbUI7QUFBQSxBQUNmOztJLEFBS0U7dUNBQ0Y7O3VCQUFBLEFBQVksT0FBTTs0Q0FBQTs7Z0pBQUEsQUFDUixBQUVOOztZQUFNLFFBQVEsTUFBZCxBQUFvQixBQUNwQjtZQUFNLFFBQVEsTUFBZCxBQUFvQixBQUNwQjtZQUFNLFlBQVksTUFBbEIsQUFBd0IsQUFFeEI7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Y0FBQSxBQUFLOzt3QkFDVSxBQUNDLEFBQ1I7OzJCQUNJLEFBQ1UsQUFDTjswQkFGSixBQUVTLEFBQ0w7cUNBQWlCLENBQUEsQUFDYiwyQkFEYSxBQUViLDJCQUZhLEFBR2IsMkJBSGEsQUFJYiw0QkFKYSxBQUtiLDJCQXpCTixBQWFkLEFBQWEsQUFDRSxBQUVFLEFBQ0wsQUFHcUIsQUFNYjtBQVRSLEFBQ0ksaUJBRkM7QUFGRixBQUNQO0FBRkssQUFDVDtlQWtCUDs7Ozs7aUNBQ00sQUFFUDs7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBLFNBQUssT0FBTCxBQUFjOzhCQUFkO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDO3NCQUNhLEtBQUEsQUFBSyxNQURuQixBQUN5QixBQUNqQjt1QkFGUixBQUVlLEFBQ1A7d0JBSFIsQUFHZ0IsQUFDUjs7O2lDQUNXLEFBQ00sQUFDVDs4QkFGRyxBQUVHLEFBQ047a0NBSkMsQUFDRSxBQUdPLEFBRWQ7QUFMTyxBQUNIOztpQ0FJSSxBQUNLLEFBQ1Q7a0NBUkMsQUFNRyxBQUVNO0FBRk4sQUFDSix1QkFFRDs7OzZDQVRFLEFBU00sQUFDQSxBQUFDLEFBQ0csQUFDVSxBQUl6QjtBQUxlLEFBQ0g7QUFGQSxBQUNKLHlCQURHO0FBREEsQUFDUDs7O2tDQU9TLEFBQ0MsQUFDTjttQ0FGSyxBQUVFLEFBQ1A7b0NBSEssQUFHRyxBQUNSO2lDQXpCcEIsQUFJaUIsQUFnQkcsQUFDSyxBQUlBO0FBSkEsQUFDTDtBQUZBLEFBQ0o7QUFqQkMsQUFDTDs7OEJBTFo7Z0NBREosQUFDSSxBQThCSTtBQTlCSjtBQUNRLGdDQTZCSixBQUFDO3NCQUNTLEtBQUEsQUFBSyxNQURmLEFBQ3FCLEFBQ2pCOzs7aUNBQ1csQUFDTSxBQUNUOzhCQUZHLEFBRUcsQUFDTjtrQ0FKQyxBQUNFLEFBR08sQUFFZDtBQUxPLEFBQ0g7O2lDQUlJLEFBQ0ssQUFDVDtrQ0FSQyxBQU1HLEFBRU0sQUFFZDtBQUpRLEFBQ0o7OztrQ0FJUyxBQUNDLEFBQ047bUNBRkssQUFFRSxBQUNQO29DQUhLLEFBR0csQUFDUjtpQ0FqQmhCLEFBRWEsQUFVRyxBQUNLLEFBSUE7QUFKQSxBQUNMO0FBRkEsQUFDSjtBQVhDLEFBQ0w7OzhCQUhSO2dDQWpDaEIsQUFDSSxBQUNJLEFBK0JRLEFBMEJqQjtBQTFCaUI7QUFDSTs7Ozs7QUF0RUEsQSxBQWtHeEI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiVm90ZUNoYXJ0LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2luaXRpc2gvUGljdHVyZXMvR2l0aHViIFRlbXAgZmlsZS9FdGhlclZvdGUifQ==