const { Client, PrivateKey, AccountCreateTransaction, AccountBalanceQuery, Hbar, TransferTransaction } = require("@hashgraph/sdk");

async function main() {

    //Grab your Hedera testnet account ID and private key from your .env file
    const myAccountId = process.env.MY_ACCOUNT_ID;
    const myPrivateKey = process.env.MY_PRIVATE_KEY;

    // If we weren't able to grab it, we should throw a new error
    if (!myAccountId || !myPrivateKey) {
        throw new Error("Environment variables MY_ACCOUNT_ID and MY_PRIVATE_KEY must be present");
    }
}
main();

MY_ACCOUNT_ID=0.0.4010877
MY_PRIVATE_KEY=302e020100300506032b657004220420b59d20cfdd229603be1b61c8730acf748986a5123feab6cbf4adfa6adc1b3708

// Create our connection to the Hedera network
// The Hedera JS SDK makes this really easy!
const client = Client.forTestnet();

client.setOperator(myAccountId, myPrivateKey);

const { Client, PrivateKey, AccountCreateTransaction, AccountBalanceQuery, Hbar } = require("@hashgraph/sdk");
require("dotenv").config();

//const client = Client.forTestnet();
//client.setOperator(myAccountId, myPrivateKey);
//-----------------------<enter code below>--------------------------------------

//Create new keys
const newAccountPrivateKey = PrivateKey.generateED25519(); 
const newAccountPublicKey = newAccountPrivateKey.publicKey;

//Create a new account with 1,000 tinybar starting balance
const newAccount = await new AccountCreateTransaction()
    .setKey(newAccountPublicKey)
    .setInitialBalance(Hbar.fromTinybars(1000))
    .execute(client);