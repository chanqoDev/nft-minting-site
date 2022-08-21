import React from 'react';
import ReactLoading from 'react-loading';

const InProgressMinting = (props) => {
  return (
    <div>
      <div>Your NFT is Being Minted. Please Wait...</div>

      <ReactLoading type="bubbles" color="#fff" />
      <div onClick={props.checkEtherscan} className="wallet-btn">
        CHECK ETHERSCAN
      </div>
    </div>
  );
};

export default InProgressMinting;
