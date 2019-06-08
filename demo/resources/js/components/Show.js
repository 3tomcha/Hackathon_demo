import React, { Component } from 'react';
// import { Container, Card, InputGroup, Form, Button, Modal } from 'react-bootstrap';
// import ipfs from './IPFS';
import abi from './ABI.js';
import web3 from './web3.js';
import abijson from '../../abi/abi.json';
import ReactDOM from 'react-dom';

class Show extends Component{
  constructor(props) {
    super(props);
    console.log("show");
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
  render(){
    return (
      <div>aa
      </div>
    );
  }

  async componentDidMount() { //render後にコントラクトのstateをgetしてくる
    if (true) {
      console.log("true");
    }
    if (window.ethereum) {
      try {
        // Request account access
        await window.ethereum.enable();
      } catch (error) {
        // User denied account access...
        console.error("User denied account access")
      }

      const accounts = await web3.eth.getAccounts();

      // var ClientReceipt = web3.eth.contract(abijson);
      // var clientReceipt = ClientReceipt.at(accounts[0]);

      // var event = clientReceipt.SetUser();

      await abi.methods.registerUser("Tomoya","画像").call();
      const users = abi.methods.getUsers(accounts[0]).call();
      console.log(users);

      // console.log(abi.users[accounts[0]].name);
      //
      // event.watch(function(error, result){
      //   if (!error)
      //   console.log(result);
      // });

    }
    // const registerUser = await abi.methods.registerUser().call();



    // const history = await abi.methods.getListHistoryByAddress(accounts[0]).call();
    // console.log(history);

    // await console.log(abi.methods.getListHistoryByAddress(accounts[0]).call());

    // users[account[0]]
    // await abi.methods.getUses("Tomoya","画像").call();

    // await abi.methods.registerUser().send({
    //   from: accounts[0],
    //   value: web3.utils.toWei('0.01', 'ether')
    // });
    // const manager = await lottery.methods.manager().call();  //managar取得
    // const players = await lottery.methods.getPlayers().call();  //参加者取得
    // const balance = await web3.eth.getBalance(lottery.options.address);  //コントラクトの残高。
    // this.setState({ manager, players, balance }); //classのsatateをブロックチェーン上のものと同期させる
  }
}



if (document.getElementById('show')) {
  ReactDOM.render(<Show />, document.getElementById('show'));
}
