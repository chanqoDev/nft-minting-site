// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <video
        class="backgroundvideo"
        src="https://static.videezy.com/system/resources/previews/000/043/267/original/4K_14.mp4"
        width="500"
        height="300"
        autoPlay
        muted
        playsInline
        loop
      ></video>
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
            <h2> Addicted: Into the Metaworse </h2>
            <div className="info-text">21 minted / 420</div>
            <div className="actions">
              <div className="minting-Btn">CONNECT WALLET</div>
            </div>
          </div>
        </div>
        <div className="footer">MINTING NOW!</div>
      </div>
    </div>
  );
}

export default App;
