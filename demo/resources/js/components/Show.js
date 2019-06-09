import React, { Component } from 'react';
// import { Container, Card, InputGroup, Form, Button, Modal } from 'react-bootstrap';
// import ipfs from './IPFS';
import abi from './ABI.js';
import web3 from './web3.js';
import abijson from '../../abi/abi.json';
import ReactDOM from 'react-dom';
import LOVEContract from './ABI';

class Show1 extends Component{
  constructor(props) {
    super(props);
    this.state ={
      cupplelist: [],
      MemorialDay: [],
    }
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
      let List = [];
      const result = await LOVEContract.methods.getListHistory().call();
      await Promise.all(result.map(number => {
        List.unshift(number);
        this.setState({cupplelist: List});
        this.setState({MemorialDay: new Date(parseInt(number.timestamp._hex)*1000)});
      }));
    }
  }
  render(){
    return (
      <div>
      つきあって{this.state.MemorialDay[0]? this.state.MemorialDay[0]: 30}日だよ
      </div>
    );
  }
}


class Show2 extends Component{
  constructor(props) {
    super(props);
    this.state ={
      cupplelist: [],
      MemorialDay: [],
    }
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
      let List = [];
      const result = await LOVEContract.methods.getListHistory().call();
      await Promise.all(result.map(number => {
        List.unshift(number);
        this.setState({cupplelist: List});
        this.setState({MemorialDay: new Date(parseInt(number.timestamp._hex)*1000)});
      }));
    }
  }
  render(){
    return (
          <div id="show2" class="mb-5">二人が初めてつきあった日は<br>{this.state.MemorialDay[0]? this.state.MemorialDay[0]: 30}日</div>
    );
  }
}



if (document.getElementById('show1')) {
  ReactDOM.render(<Show1 />, document.getElementById('show1'));
}

if (document.getElementById('show2')) {
  ReactDOM.render(<Show2 />, document.getElementById('show2'));
}
