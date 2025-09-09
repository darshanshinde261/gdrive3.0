import { useState } from "react";
import "./Display.css";

const Display = ({ contract, account }) => {
  const [data, setData] = useState("");
<<<<<<< HEAD

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

=======
  const getdata = async () => {
    if (!contract) {
    console.error("Contract not ready");
    alert("Contract not connected yet.");
    return;
    }
    console.log('function called')
    let dataArray;
    const Otheraddress = document.querySelector(".address").value;
    console.log('Otheraddress',Otheraddress)
    try {
      if (Otheraddress) {
        dataArray = await contract.display(Otheraddress);
        console.log(dataArray);
      } else {
        console.log("contract:", contract)
        try{
          console.log('inside else')
          console.log("Contract display fn:", contract?.display);
          console.log("Contract in Display:", contract);
          dataArray = await contract.callStatic.display(account);
          console.log('dataArray',dataArray)
          console.log('ekdach zhal')
        }catch(e){
          console.log('error in contract call')
          console.log('error',e)
        }
        console.log('outside')
      }
    } catch (e) {
      alert("You don't have access");
      console.log(e)
    }
    if (!dataArray || dataArray.length === 0) {
      alert("No image to display");
      return;
    }
    else {
      const str = dataArray.toString();
      const str_array = str.split(",");
      
      // console.log(str);
      // console.log(str_array);
      const images = str_array.map((item, i) => {
        return (
          <a href={item} key={i} target="_blank">
            <img
              key={i}
              src={`https://gateway.pinata.cloud/ipfs/${item.substring(6)}`}
              alt="new"
              className="image-list"
            ></img>
          </a>
        );
      });
      setData(images);
    }
  };
>>>>>>> 80a7fc1ef9f6b400edecba1443d8b69f970b772c
  return (
    <>
      <div className="image-list">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
<<<<<<< HEAD
      />
=======
      ></input>
>>>>>>> 80a7fc1ef9f6b400edecba1443d8b69f970b772c
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
<<<<<<< HEAD

=======
>>>>>>> 80a7fc1ef9f6b400edecba1443d8b69f970b772c
export default Display;
