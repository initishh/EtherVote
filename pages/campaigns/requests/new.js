import React , { Component } from 'react';
import { Form, Button, Message, Label,Table, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import Layout from '../../../components/Layout';
import ReactVotes from '../../../components/ReactVotes';
import VoteChart from '../../../components/VoteChart';

const tableStyle = {
    position: `absolute`,
    width: `700px`,
    left: `40px`
}

const fontStyle = {
    fontSize : `25px`
}

class RequestNew extends Component {

    static async getInitialProps(props) {
        const { address } = props.query;

        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call();
          
        const requests = await Promise.all (
            Array(parseInt(requestCount)).fill().map((element,index) => {
                return campaign.methods.requests(index).call();
            })
        );

        const votes = [];
        requests.forEach((request) => {
            let jsonData = {};
            jsonData['name'] = request['name'];
            jsonData['voteCount'] = request['voteCount'];
            jsonData['partyName'] = request['partyName'];
            jsonData['imageLink'] = request['imageLink'];
            votes.push(jsonData);      
        });

        votes.sort(function(a,b) { return (b['voteCount']-a['voteCount'])});  

        const names = [],votecount=[];
        votes.forEach((vote) => {
            names.push(vote.name);
            votecount.push(vote.voteCount);
        });
                
        return { address , requests, requestCount, names,votes, votecount };
    }

    renderVotes() {

        const voteArr = this.props.votes;

        return voteArr.map((request) => {
            return (<ReactVotes request={request} />);
        });
    }

    render() {
        
    const { Header, Row, HeaderCell, Body } = Table;

        return (
            <Layout>
                <Table style = {tableStyle}>
                  <Header>
                    <Row>
                        <HeaderCell style= {fontStyle}>Party Logo</HeaderCell>
                        <HeaderCell style= {fontStyle}>Name</HeaderCell>
                        <HeaderCell style= {fontStyle}>Party Name</HeaderCell>
                        <HeaderCell style= {fontStyle}>Votes Received</HeaderCell>
                    </Row>
                  </Header>
                <Body>{this.renderVotes()}</Body>
                </Table>
                
                <VoteChart names = {this.props.names} votecount = {this.props.votecount}/>
                
            </Layout>

        );
    }
}

export default RequestNew;
