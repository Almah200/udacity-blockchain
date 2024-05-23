const SHA256 = require("crypto-js/sha256");

/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/
class Block {
  constructor(data) {
    this.hash = "";
    this.height = 0;
    this.body = data;
    this.time = 0;
    this.previousBlockHash = "";
  }
}

/* ===== Blockchain Class ===================================
|  Class with a constructor for new blockchain      |
|  ====================================================*/
class Blockchain {
  constructor() {
    // new chain array
    this.chain = [];
    // add first genesis block
    this.createGenesisBlock();
  }

  createGenesisBlock() {
    let genesisBlock = new Block("First block in the chain - Genesis block");
    genesisBlock.height = 0;
    genesisBlock.time = new Date().toISOString();
    genesisBlock.hash = SHA256(JSON.stringify(genesisBlock)).toString();
    this.chain.push(genesisBlock);
  }

  // addBlock method
  addBlock(newBlock) {
    // set block height
    newBlock.height = this.chain.length;
    // set block timestamp
    newBlock.time = new Date().toISOString();
    // previous block hash
    newBlock.previousBlockHash = this.chain[this.chain.length - 1].hash;
    // SHA256 requires a string of data to generate block hash
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    // push the new block to the chain
    this.chain.push(newBlock);
  }
}
/*
let blockchain = new Blockchain();
blockchain.addBlock(new Block('new data'));
console.log(blockchain.chain);
*/
