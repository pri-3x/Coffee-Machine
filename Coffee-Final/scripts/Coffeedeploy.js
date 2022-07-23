const hre = require("hardhat");
async function main() {
    const Coffee = await ethers.getContractFactory("Coffee")
    const coffee = await Coffee.deploy()
    await coffee.deployed()
    console.log("Contract deployed to: ", coffee.address)
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
