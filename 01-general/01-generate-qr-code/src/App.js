import QRCode from "qrcode.react";
import "./App.css";

function App() {
  const walletAddress = "0x5457d5BeeF671e99e4241970363FA5192015C23E";

  return (
    <div className="qr-code-wrapper">
      <QRCode value={walletAddress} size={300} />
    </div>
  );
}

export default App;
