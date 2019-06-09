import React from "react";
import ReactDOM from 'react-dom';

import qrcode from "qrcode";
import web3 from './web3';

export default class QRcode extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      address: "",
    };
    this.canvasRef = React.createRef();
    this.handleChangeText = this.handleChangeText.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChangeText(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async onSubmit() {
    const sig = await this.getSignature(this.state.address);
    const url = `${window.location.protocol}//${window.location.host}/register/${sig}`;
    qrcode.toCanvas(this.canvasRef.current, url, function(error) {
        if (error) {
          console.error(error);
        }
    });
  }

  async getSignature(address) {
    const account = await web3.eth.getAccounts();
    var signal;
    console.log(web3.eth.accounts);
    await web3.eth.sign( 
            web3.utils.keccak256(account[0]),
            account[0],
            (err, signature) => {
        if (err) {
          console.log(err)
          return;
        }
        console.log(signature);
        signal = signature ;
      });
      console.log(signal);
      return signal;
  }

  render() {
    return (
      <div>
        <form>
          <canvas ref={this.canvasRef} />
          <br />

          <label>
            アドレス
            <input
              type="text"
              name="address"
              onChange={this.handleChangeText}
              value={this.state.address}
            />
          </label>

          <br />

          <button type="button" name="submit" onClick={this.onSubmit}>
            QR生成
          </button>
        </form>
        
      </div>
    );
  }
}

if (document.getElementById('example')) {
    ReactDOM.render(<QRcode />, document.getElementById('example'));
}