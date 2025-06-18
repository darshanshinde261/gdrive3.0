import { useEffect } from "react";
import "./Modal.css";

const Modal = ({ setModalOpen, contract }) => {
  const sharing = async () => {
    const address = document.querySelector(".address").value;
    await contract.allow(address);
    setModalOpen(false);
  };

  useEffect(() => {
    const accessList = async () => {
      const addressList = await contract.shareAccess();
      const select = document.querySelector("#selectNumber");

      addressList.forEach((addr) => {
        const option = document.createElement("option");
        option.textContent = addr;
        option.value = addr;
        select.appendChild(option);
      });
    };

    contract && accessList();
  }, [contract]);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">Share with</div>

        <div className="body">
          <input
            type="text"
            className="address"
            placeholder="Enter Address"
          />
        </div>

        <form id="myForm">
          <select id="selectNumber">
            <option className="address">People With Access</option>
          </select>
        </form>

        <div className="footer">
          <button
            id="cancelBtn"
            onClick={() => setModalOpen(false)}
          >
            Cancel
          </button>
          <button onClick={sharing}>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
