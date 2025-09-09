import Upload from "./artifacts/contracts/Upload.sol/Upload.json";
<<<<<<< HEAD
import { useState } from "react";
=======
import { useState, useEffect } from "react";
>>>>>>> 80a7fc1ef9f6b400edecba1443d8b69f970b772c
import { ethers } from "ethers";
import FileUpload from "./components/FileUpload";
import Display from "./components/Display";
import Modal from "./components/Modal";
import "./App.css";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
<<<<<<< HEAD
  const [modalOpen, setModalOpen] = useState(false);

  const connectWallet = async () => {
    if (!window.ethereum) {
      console.error("MetaMask is not installed");
      return;
    }

    try {
      // Request Sepolia network switch
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0xAA36A7" }], // Sepolia chainId in hex (11155111)
      });
    } catch (switchError) {
      // If the chain is not added, prompt to add it
      if (switchError.code === 4902) {
        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0xAA36A7",
              chainName: "Sepolia Test Network",
              rpcUrls: [import.meta.env.VITE_SEPOLIA_URL],
              nativeCurrency: { name: "SepoliaETH", symbol: "ETH", decimals: 18 },
              blockExplorerUrls: ["https://sepolia.etherscan.io"],
            },
          ],
        });
      } else {
        console.error("Network switch failed:", switchError);
        return;
      }
    }

    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const address = await signer.getAddress();
    setAccount(address);

    const contractAddress = "0x6CB26ec8039f7E8c793e353958AAD7a02Aa310E3"; // your deployed Sepolia contract
    const contract = new ethers.Contract(contractAddress, Upload.abi, signer);
    setContract(contract);
  };

=======
  const [provider, setProvider] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [connect,setConnect] = useState(false);

  useEffect(() => {
    let provider;
    if (window.ethereum) {
        provider = new ethers.BrowserProvider(window.ethereum);
    }

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        //console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, [connect]);
>>>>>>> 80a7fc1ef9f6b400edecba1443d8b69f970b772c
  return (
    <>
      {!modalOpen && (
        <button className="share" onClick={() => setModalOpen(true)}>
          Share
        </button>
<<<<<<< HEAD
      )}
      {modalOpen && <Modal setModalOpen={setModalOpen} contract={contract} />}
      <div className="App">
        <h1 style={{ color: "white" }}>Gdrive 3.0</h1>
        <button className="share" onClick={connectWallet}>
          Connect
        </button>
        <p style={{ color: "white" }}>
          Account: {account || "Not connected"}
        </p>
        <FileUpload account={account} contract={contract} />
        {contract && <Display contract={contract} account={account} />}
=======
        
      )}
      {modalOpen && (
        <Modal setModalOpen={setModalOpen} contract={contract}></Modal>
      )}

      <div className="App">
        <h1 style={{ color: "white" }}>Gdrive 3.0</h1>
        
        <button className="share" onClick={() => !connect && setConnect(true)}>
          Connect
        </button>
        <p style={{ color: "white" }}>
          Account : {account ? account : "Not connected"}
        </p>
        <FileUpload
          account={account}
          provider={provider}
          contract={contract}
        ></FileUpload>
        {contract && <Display contract={contract} account={account}></Display>}
>>>>>>> 80a7fc1ef9f6b400edecba1443d8b69f970b772c
      </div>
    </>
  );
}

export default App;
