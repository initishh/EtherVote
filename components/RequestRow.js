import React, { Component } from 'react';
import { Table, Button, Image, Form, Header, Dimmer, Loader} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

const fontStyle = {
    fontSize: `20px`,
    padding: `10px`
}

class RequestRow extends Component {

    state = {
        loading: false
    }

    onApprove = async () => {
        const accounts = await web3.eth.getAccounts();
        const campaign = Campaign(this.props.address);
        this.setState({ loading: true });
        try {

            await campaign.methods.approveRequest(this.props.id).send({
                from: accounts[0]
            });
        } catch (err) {
            this.setState({ loading: false });
        }

        this.setState({ loading: false });
    }

    render() {

        const { id, request } = this.props;

        return (
            <div>
                <Form onSubmit={this.onApprove}>
                    <Table>
                        <Table.Row>
                            <Table.Cell>
                                <Image size='small' src={request.imageLink} />
                               <div style = {fontStyle}> {request.partyName} </div>
                            </Table.Cell>
                            <Table.Cell textAlign='center'>
                                <Button size='large' fluid inverted color='green'>VOTE</Button>
                            </Table.Cell>
                        </Table.Row>
                    </Table>
                </Form>

                <Dimmer active={this.state.loading} inverted>
                    <Loader size='large'>Recording your vote.</Loader>
                </Dimmer>
            </div>
        );
    }
}

export default RequestRow;
