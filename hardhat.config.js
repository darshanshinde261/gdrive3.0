require("@nomicfoundation/hardhat-toolbox");
<<<<<<< HEAD
require("dotenv").config();

=======

/** @type import('hardhat/config').HardhatUserConfig */
>>>>>>> 80a7fc1ef9f6b400edecba1443d8b69f970b772c
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
<<<<<<< HEAD
      chainId: 31337,
      
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
=======
      chainId: 1337,
>>>>>>> 80a7fc1ef9f6b400edecba1443d8b69f970b772c
    },
  },
  paths: {
    artifacts: "./client/src/artifacts",
  },
};
