require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

const dotenc=require("dotenv");
const { task } = require("hardhat/config");
dotenc.config(); 

task("accounts","Prints the list of accounts",async(taskArgs,hre)=>{
  const accounts=await hre.ethers.getSigners();
  for(const account of accounts) {
    console.log(account.address);
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks:{
    hardhat:{
      chainId:1337,
    },
    
  },
  etherscan:{
    apiKey:process.env.API_KEY
  }
};
