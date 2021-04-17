import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container, Card, InputGroup, Form, Button, Modal } from 'react-bootstrap';

// コントラクトの読み込み
import web3 from './web3';
import LOVEContract from './ABI';

// コンポーネントの読み込み
import Uploader from './Uploader';
import CuppleList from './CuppleList';

class Top extends Component {

    constructor(props) {
        super(props);
        this.state ={
          cupplelist: [],
          MemorialDay: [],
        }
      }

    async componentWillMount() {
        let List = [];
        const result = await LOVEContract.methods.getListHistory().call();
        await Promise.all(result.map(number => {
            List.unshift(number);
            this.setState({cupplelist: List});
            this.setState({MemorialDay: new Date(parseInt(number.timestamp._hex)*1000)});
        }));
    }

    render() {
        return (
            <div>
                <CuppleList cupplelist={this.state.cupplelist} />
            </div>
        );
    }
  }
  
export default Top;

if (document.getElementById('example')) {
    ReactDOM.render(<Top />, document.getElementById('example'));
}

