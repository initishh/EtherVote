import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';
const file = require('../index.js');

class CampaignNew extends Component {
    
    static getInitialProps(props) {
        const { title, place } = props.query;

        return { title, place };
    }


    // state = {
    //     minimumContribution: '',                       // This is used to set the state for the component
    //     errorMessage: '',
    //     loading: false
    // };

    // onSubmit = async (event) => {                    // This function syntax is used to set event handlers for the form to use the  this keyword
    //     event.preventDefault();                      // Prevent the browser to stop submitting the form
        
    //     const accounts = await web3.eth.getAccounts();

    //     this.setState({ loading: true, errorMessage: '' });

    //     try {
    //         await factory.methods
    //             .createCampaign()
    //             .send({
    //              from: accounts[0]
    //             });
    //         Router.pushRoute('/');    
        
    //     } catch(err) {
    //         this.setState({ errorMessage: err.message })
    //     }
        
    //     this.setState({ loading: false });
    // };  

    render() {

        return (
            <Layout>
                    <h3 style={{ textAlign: 'center'}} >{this.props.title} for {this.props.place}</h3>
                    
              </Layout>
        );
    }
}

export default CampaignNew;