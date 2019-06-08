import React, { Component } from 'react';
// import { Container, Card, InputGroup, Form, Button, Modal } from 'react-bootstrap';
// import ipfs from './IPFS';
import ReactDOM from 'react-dom';

class Show extends Component{
  constructor(props) {
    super(props);
    // console.log("show");
    // console.log("show");
    // this.state = {
    //   TokenURI_image: '',
    //   TokenURI_name: '',
    //   ipfsHash_image: '',
    //   ipfsHash: '',
    //   showFlag: true,
    //   showModal: false,
    // }
  }

  async componentDidMount() { //render後にコントラクトのstateをgetしてくる
    // if (window.ethereum) {
    //   try {
    //     // Request account access
    //     await window.ethereum.enable();
    //   } catch (error) {
    //     // User denied account access...
    //     console.error("User denied account access")
    //   }
    // }
    // const manager = await lottery.methods.manager().call();  //managar取得
    // const players = await lottery.methods.getPlayers().call();  //参加者取得
    // const balance = await web3.eth.getBalance(lottery.options.address);  //コントラクトの残高。
    // this.setState({ manager, players, balance }); //classのsatateをブロックチェーン上のものと同期させる
  }
}


export default Show;

if (document.getElementById('show')) {
  ReactDOM.render(<Show />, document.getElementById('show'));
}
