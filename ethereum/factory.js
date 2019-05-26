import web3 from './web3'
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x0cD813378EB194725D310520Dd32B01f9AC80fDd'
);

export default instance;