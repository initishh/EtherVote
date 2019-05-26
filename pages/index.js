import React, { Component } from 'react';
import { Form, Button, Input, Message, Dimmer, Loader } from 'semantic-ui-react';
import Layout from '../components/Layout';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';
import { Router } from '../routes'

class CampaignNew extends Component {

    state = {
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {
        event.preventDefault();

        const accounts = await web3.eth.getAccounts();

        this.setState({ loading: true, errorMessage: '' });

        try {
            const add = await factory.methods
                .createCampaign()
                .send({
                    from: accounts[0]
                });

            const campaigns = await factory.methods.getDeployedCampaigns().call();

            const address = campaigns[campaigns.length - 1];

            Router.pushRoute(`/campaigns/${address}/dashboard`);

        } catch (err) {
            this.setState({ errorMessage: err.message });
            this.setState({ loading: false });
        }
    };

    render() {
        return (
            <Layout>
                <h3 textAlign='center'>Create a Campaign.</h3>

                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} >

                    <Form.Group widths={2}>
                        <Form.Input
                            label='Election Title'
                            placeholder='Election Title' />
                    </Form.Group>
                    <Form.Group widths={2}>
                        <Form.Input
                            label='Constituency Name'
                            placeholder='Constituency Name' />
                    </Form.Group>
                    <Message error header="Something Went Wrong." content={this.state.errorMessage} />

                    <Button style={{ marginTop: '10px' }} primary> Deploy to Blockchain. </Button>
                </Form>

                <Dimmer active={this.state.loading} inverted>
                    <Loader size='large'>Deploying the election on Blockchain.</Loader>
                </Dimmer>
            </Layout>
        );
    }
}

export default CampaignNew;
