import React from 'react';

const CompletedMinting = (props) => {
  const viewOpensea = () => {
    const url = `https://testnets.opensea.io/collection/bitmeeweb3-v2`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <div>All set! Your NFT has been minted! </div>
      <div onClick={viewOpensea} className="wallet-btn">
        VIEW ON OPENSEA
      </div>
    </div>
  );
};

export default CompletedMinting;
