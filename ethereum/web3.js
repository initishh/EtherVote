import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    //  We are in the window and metamask is running
    web3 = new Web3(window.web3.currentProvider);

} else {
    // We are in the server or metamask is not enabled
    const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
    );
    web3 = new Web3(provider);
}

export default web3;