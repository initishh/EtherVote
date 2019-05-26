import React, { Component } from 'react'
import {Bar, Pie } from 'react-chartjs-2';


const chartStyle = {
    position: `absolute`,
    width: `700px`,
    right: `40px`,
}

class VoteChart extends Component {
    constructor(props){
        super(props);

        const votes = props.votes;
        const names = [],votecount=[];
        votes.forEach((vote) => {
            names.push(vote.name);
            votecount.push(vote.voteCount);
        });

        this.state = {
            chartData: {
                labels: names,
                datasets:[
                    {
                        label:'TOP',
                        data:votecount,
                        backgroundColor: [
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)',
                            'rgba(255, 99, 132, 0.6)'
                        ]
                    }
                ]
            }
        }
    }
  render() {

    return (
        <div>
            <div style = {chartStyle}>
                <Bar
                        data={this.state.chartData}
                        width={100}
                        height={40}
                        options={{
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
                        }}
                    />
                    <Pie
                        data={this.state.chartData}
                        options={{
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
                        }}
                    />
            </div>
        </div>
          
    )
  }
}

export default VoteChart;