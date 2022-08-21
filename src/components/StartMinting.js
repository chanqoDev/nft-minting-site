import React from 'react';

const StartMinting = (props) => {
  return (
    <div className="mintStart">
      <div onClick={props.mint} className="wallet-btn">
        MINT
      </div>
      <div onClick={props.logOut} className="wallet-btn">
        START OVER
      </div>
    </div>
  );
};

export default StartMinting;
