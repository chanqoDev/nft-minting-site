import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="mintingSection">
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
            <h2> ADDIDAS: INTO THE METAVERSE </h2>
            <div>12 minted / 200</div>
            <div>CONNECT WALLET</div>
          </div>
        </div>
        <div className="footer">MINTING NOW!</div>
      </div>
    </div>
  );
}

export default App;
