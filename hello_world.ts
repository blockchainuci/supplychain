import {
    Account, NetworkType
} from "nem2-sdk";
console.log("starting supply chain ...");


const account = Account.generateNewAccount(NetworkType.MIJIN_TEST);

console.log('Your new account address is:', account.address.pretty(), 'and its private key', account.privateKey);
