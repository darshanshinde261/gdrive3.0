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
  return (
    <>
      <div className="image-list">{data}</div>
      <input
        type="text"
        placeholder="Enter Address"
        className="address"
      ></input>
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
