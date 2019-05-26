import React , {Component} from 'react';
import Layout from '../../../components/Layout';
import Campaign from '../../../ethereum/campaign';
import RequestRow from '../../../components/RequestRow';

class RequestIndex extends Component {

    static async getInitialProps(props) {
        const { address, title, place } = props.query;

        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call();

        const requests = await Promise.all(
            Array(parseInt(requestCount))
              .fill()
              .map((element, index) => {
                return campaign.methods.requests(index).call();
              })
          );

        return { requests, address};
    }

    renderRows() {
        return this.props.requests.map((request, index) => {
            return (
                <RequestRow 
                key = {index}
                id = {index}
                request = {request}
                address = {this.props.address}
            />);
        })
    }

    render() {
        return (
            <Layout>
                { this.renderRows() }
            </Layout>
        );
    }
}

export default RequestIndex;
