const hre = require("hardhat");

async function main() {
  const Upload = await hre.ethers.getContractFactory("Upload");
  const upload = await Upload.deploy();

  await upload.waitForDeployment();

  const address = await upload.getAddress();
  console.log("Library deployed to:",address);
}

<<<<<<< HEAD
main().catch((error) =>  {
=======
main().catch((error) => {
>>>>>>> 80a7fc1ef9f6b400edecba1443d8b69f970b772c
  console.error(error);
  process.exitCode = 1;
});
