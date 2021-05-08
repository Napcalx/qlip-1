import { initWeb3 } from "utils.js";
const PrivateTokenSale = require('../contracts/PrivateTokenSale.json');

export class PrivateTokenSaleContract {
    
    //web3 instance
    async web3() {
        const w3 = await initWeb3();
        return w3;
    }

    //connected wallet
    async account() {
        const acc = await web3.eth.getAccounts();
        return acc;
    }

    //contract instance
    async privateTokenSale() {
        const PTS = new web3.eth.Contract(
            PrivateTokenSale.abi,
            "0x..................." // insert smart contract address here
        );
        return PTS;
    }

    //data from getBalance() in smart contract
    async getBalance() {
        const balance = await privateTokenSale.methods.getBalance().call();
        return balance;
    }

    //data from totalRegistration() in smart contract
    async totalRegistration() {
        const total = await privateTokenSale.methods.totalRegistration().call();
        return total;
    }

    //api from depositFunds() in smart contract
    async depositFunds(amount) {
        try {
            const receipt = await privateTokenSale.methods.depositFunds().send({ from: account, value: amount });
            return receipt;
        } catch (e) {
            throw new Error(e);
        }
    }

    //api from withdrawFunds() in smart contract
    async withdrawFunds() {
        try {
            const receipt = await privateTokenSale.methods.withdrawFunds().send({ from: account });
            return receipt;
        } catch (e) {
            throw new Error(e);
        }
    }
}