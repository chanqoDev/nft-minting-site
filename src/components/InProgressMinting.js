import React from 'react';
import ReactLoading from 'react-loading';

const InProgressMinting = () => {
  return (
    <div>
      <div>Your NFT is Being Minted. Please Wait...</div>

      <ReactLoading type="bubbles" color="#fff" />
    </div>
  );
};

export default InProgressMinting;
