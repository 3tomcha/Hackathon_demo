import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Image, Container, Card, InputGroup, Form, Button, Modal } from 'react-bootstrap';

import web3 from './web3';
import LOVEContract from './ABI';

class SetHistory extends Component {

    constructor(props) {
        super(props);
        this.state ={
            useraddress: '',
            receiveSig: ''
        }
    }

    async _SetHistory() {
        const accounts = await web3.eth.getAccounts();
        this.setState({useraddress: accounts[0]});
        const address = web3.utils.keccak256(accounts[0]);
        var search = location.search;
        alert(search);
        console.log(address);
        await LOVEContract.methods.setHistory(address, search).send({
            from: accounts[0]
        });
    }

    render() {
        return (
            <div>
                <Container>
                    <h3>交際を認める！！！！</h3>
                    <Button className="mb-3 submit-btn" variant="primary" onClick={this._SetHistory.bind(this)}></Button>
                </Container>
            </div>
        );
    }
}

export default SetHistory;