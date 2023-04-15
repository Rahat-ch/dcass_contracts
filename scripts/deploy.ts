const hre = require("hardhat");

async function main() {

  const Dcas = await hre.ethers.getContractFactory("Dcass");
  const dcas = await Dcas.deploy();

  await dcas.deployed();

  console.log("DCASS deployed to:", dcas.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
