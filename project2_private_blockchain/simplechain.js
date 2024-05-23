/* ===== SHA256 with Crypto-js ===================================
|  Learn more: Crypto-js: https://github.com/brix/crypto-js      |
|  =============================================================*/

const SHA256 = require("crypto-js/sha256");

/* ===== Block Class ===================================
|  Class with a constructor for block data model       |
|  ====================================================*/
class Block {
  constructor(data) {
    (this.hash = ""),
      (this.height = 0),
      (this.body = data),
      (this.time = 0),
      (this.previousBlockHash = "");
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
    this.addBlock(new Block("First block in the chain -Genesis Block "));
  }

  // createGenesisBlock() {
  //   return new Block("First block in the chain - Genesis block");
  // }

  // addBlock method
  addBlock(newBlock) {
    //to check if the chain contain data
    if (this.chain.length > 0) {
      // previous block hash
      newBlock.previousBlockHash = this.chain[this.chain.length - 1].hash;

      // SHA256 requires a string of data to generate block hash
      newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
      this.chain.push(newBlock);
    }
  }
}
