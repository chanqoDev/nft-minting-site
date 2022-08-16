// import logo from './logo.svg';
import './App.css';
import { useMoralis } from 'react-moralis';
import { useState, useEffect } from 'react';
import abi from './contract/contract.json';

function App() {
  const [totalSupply, setTotalSupply] = useState(0);
  const {
    Moralis,
    enableWeb3,
    authenticate,
    isAuthenticated,
    isAuthenticating,
    user,
    account,
    logout,
  } = useMoralis();

  const logOut = async () => {
    await logout();
  };

  useEffect(() => {
    const getSupply = async () => {
      if (isAuthenticated) {
        await enableWeb3();
        getTotalSupply();
      }
    };
    getSupply();
  }, [isAuthenticated]);

  const mint = async () => {
    const sendOptions = {
      contractAddress: '0xeB510b6a149d9e18094dc7bAD1714d27eCC3B17a',
      functionName: 'safeMint',
      abi: abi,
      msgValue: Moralis.Units.ETH('0.01'),
    };
    // add ether to in sendOption for MOralis
    const transaction = await Moralis.executeFunction(sendOptions);
  };

  // Create a function to get total Supply of our NFT
  // how many nft have been minted so far
  // use the totalSupply function to get totalSupply()
  const getTotalSupply = async () => {
    const sendOptions = {
      contractAddress: '0xeB510b6a149d9e18094dc7bAD1714d27eCC3B17a',
      functionName: 'totalSupply',
      abi: abi,
    };
    const message = await Moralis.executeFunction(sendOptions);
    setTotalSupply(message.toNumber());
  };

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: 'Log in using Moralis' })
        .then(function (user) {
          console.log('logged in user:', user);
          console.log(user.get('ethAddress'));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className="App">
      <video
        className="background-video"
        // src="https://static.videezy.com/system/resources/previews/000/043/267/original/4K_14.mp4"
        src="https://cdn-std.droplr.net/files/acc_990213/aIieHW"
        type="video/mp4"
        width="500"
        height="300"
        autoPlay
        muted
        playsInline
        loop
      ></video>
      <div className="main">
        <div className="minting-section">
          <div className="left">
            <video height="400" width="400" autoPlay muted playsInline loop>
              <source
                src="https://cdn-std.droplr.net/files/acc_990213/d9ucir"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="right">
            <h2> Addicted: Into the Metaworse </h2>
            <div className="info-text">{totalSupply} minted / 420</div>
            <div className="actions">
              {isAuthenticated ? (
                <div className="mintStart">
                  <div onClick={mint} className="wallet-btn">
                    MINT
                  </div>
                  <div onClick={logOut} className="wallet-btn">
                    START OVER
                  </div>
                </div>
              ) : (
                <div onClick={login} className="wallet-btn">
                  CONNECT WALLET
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="footer">MINTING NOW!</div>
      </div>
    </div>
  );
}

export default App;
