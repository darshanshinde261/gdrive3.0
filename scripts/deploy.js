const hre = require("hardhat");

async function main() {
  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();

  await upload.waitForDeployment();

  const address = await upload.getAddress();
  console.log("Library deployed to:",address);
}

main().catch((error) =>  {
  console.error(error);
  process.exitCode = 1;
});
