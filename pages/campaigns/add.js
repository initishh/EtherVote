import React, { Component } from 'react';
import { Form, Button, Message, Label, Input, Grid, Image,Dimmer, Loader, Card } from 'semantic-ui-react';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import { Link, Router } from '../../routes';
import Layout from '../../components/Layout';

class RequestNew extends Component {

    static async getInitialProps(props) {
        const { address } = props.query;

        const campaign = Campaign(address);
        const requestCount = await campaign.methods.getRequestsCount().call();

        const requests = await Promise.all(
            Array(parseInt(requestCount))
                .fill()
                .map((element, index) => {
                    return campaign.methods.requests(index).call();
                })
        );

        return { requests, address };
    }
    
    state = {
        name: '',
        imageLink: '',
        partyName: '',
        flag: false,
        loading: false
    }

    onFinalize = async event => {
        event.preventDefault();
        window.open(`/campaigns/${this.props.address}/vote`,"_blank");
    }

    onShowResult = async event => {
        event.preventDefault();
        window.open(`/campaigns/${this.props.address}/results`,"_blank");
    }

    onSubmit = async event => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);
        const { name, imageLink, partyName } = this.state;

        this.setState({loading: true});

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(name, partyName, imageLink).send({
                from: accounts[0]
            });

            this.setState({ name: '', imageLink: '', partyName: '' });

            Router.pushRoute(`/campaigns/${this.props.address}/dashboard`);
        } catch (err) {
            console.log(err.message);
        }
        this.setState({flag: true});
        this.setState({loading: false});
    }

    renderRows() {

        const items = this.props.requests.map((request, index) => {
            return {
                image: request.imageLink,
                header: request.partyName,
                meta: request.name
            }
        });
        return <Card.Group itemsPerRow={3} items={items} style={{ marginRight: '30px' }} />;
    }

    render() {
        return (
            <Layout>
                <Grid>
                    <Grid.Column width={11}>
                        {this.renderRows()}
                    </Grid.Column>

                    <Grid.Column width={5}>
                        <h3>Add a Candidate.</h3>
                        <Form onSubmit={this.onSubmit} >
                            <Form.Field>
                                <label>Name of the Candidate.</label>
                                <Input
                                    value={this.state.name}
                                    onChange={event => this.setState({ name: event.target.value })}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label>Party Name of the Candidate.</label>
                                <Input
                                    value={this.state.partyName}
                                    onChange={event => this.setState({ partyName: event.target.value })}
                                />
                            </Form.Field>

                            <Form.Field>
                                <label>Image URL of the party.</label>
                                <Input
                                    value={this.state.imageLink}
                                    onChange={event => this.setState({ imageLink: event.target.value })}
                                />
                            </Form.Field>

                            <Button primary>Add Candidate.</Button>
                        </Form>
                        <Form onSubmit={this.onFinalize}>
                            <Button inverted color='blue' style={{ marginTop: '25px' }} disabled={!this.state.flag} >Start Election!</Button>
                        </Form>
                        <Form onSubmit={this.onShowResult}>
                            <Button inverted color='blue' style={{ marginTop: '25px' }} disabled={!this.state.flag} >Show Result</Button>
                        </Form>

                    </Grid.Column>
                </Grid>

                <Dimmer active={this.state.loading} inverted>
                    <Loader size='large'>Adding the candidate.</Loader>
                </Dimmer>
            </Layout>
        );
    }
}

export default RequestNew;
