import React, { Component } from 'react';
import { Form, Button, Input, Message, Dimmer, Loader } from 'semantic-ui-react';
import Layout from '../components/Layout';
import factory from '../ethereum/factory';
import web3 from '../ethereum/web3';
import { Router } from '../routes';
import { Carousel, Container, Row, Col} from 'react-bootstrap';

const divStyle = {
    width: `600px`,
}

const imgStyle = {
    height: `400px`
}

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
                <Container>
                    <Row>
                        <Col xs={6} md={6}>
                            <div>
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
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div style={divStyle}>
                                <Carousel interval={3000} fade={true} controls={false}>
                                    <Carousel.Item>
                                        <img style={imgStyle}
                                            className="d-block w-100"
                                            src="https://dc-cdn.s3-ap-southeast-1.amazonaws.com/dc-Cover-pv50o4heptmeim10441npt7q54-20160901065939.Medi.jpeg"
                                            alt="First slide"
                                        />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img style={imgStyle}
                                            className="d-block w-100"
                                            src="https://c.ndtvimg.com/2019-03/5f7s9hg8_vote-generic_625x300_12_March_19.jpg"
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>

                                    <Carousel.Item>
                                        <img style={imgStyle}
                                            className="d-block w-100"
                                            src="https://www.abc.net.au/news/image/5414640-3x2-700x467.jpg"
                                            alt="Third slide"
                                        />
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Layout>
        );
    }
}

export default CampaignNew;
