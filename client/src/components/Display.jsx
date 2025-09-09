import { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");

  const getdata = async () => {
    if (!contract) {
      console.error("Contract not ready");
      alert("Contract not connected yet.");
      return;
    }

    
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    console.log("Otheraddress", Otheraddress);

    try {
      if (Otheraddress) {
        
        dataArray = await contract.display(Otheraddress);
        
      } else {
        
        try {
          
          dataArray = await contract.callStatic.display(account);
          
        } catch (e) {
          
          console.log("error", e);
        }
      }
    } catch (e) {
      alert("You don't have access");
      console.log(e);
    }

    if (!dataArray || dataArray.length === 0) {
      alert("No image to display");
      return;
    } else {
      const str_array = dataArray.toString().split(",");

      const images = str_array.map((item, i) => {
        // Replace Pinata gateway with ipfs.io if needed
        const fixedUrl = item.replace(
          "https://gateway.pinata.cloud/ipfs/",
          "https://ipfs.io/ipfs/"
        );

        return (
          <a href={fixedUrl} key={i} target="_blank" rel="noopener noreferrer">
            <img
              src={fixedUrl}
              alt={`image-${i}`}
              loading="lazy"
              className="image-list"
            />
          </a>
        );
      });

      setData(images);
    }
  };

  return (
    <>
      <div className="image-list">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      />
      <button
        className="center button"
        onClick={getdata}
        disabled={!contract}
      >
        {contract ? "Get Data" : "Connecting..."}
      </button>
    </>
  );
};

export default Display;
