import React, { Component } from 'react';
import { Container, Card, InputGroup, Form, Button, Modal } from 'react-bootstrap';
import ipfs from './IPFS';
import ReactDOM from 'react-dom';

// import web3 from './contracts/web3';
// import NFT from './contracts/abi';

class Uploader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            TokenURI_image: '',
            TokenURI_name: '',
            ipfsHash_image: '',
            ipfsHash: '',
            showFlag: true,
            showModal: false,
        }
    }

  // ローカルファイルの読み込み
  async captureFile(event) {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    event.target.nextElementSibling.textContent = file.name;
    let reader = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => this.setState({TokenURI_image: reader.result});
  };

  // Bufferオブジェクトに変換し、IPFSに送信
  async convertToBuffer(value) {
    const buffer = await Buffer.from(value);
    const results = await ipfs.add(buffer);
    return results
  };

  // ERC721 Token に名前をつける
  onChangeName(event) {
    this.setState({TokenURI_name: event.target.value});
  }

  async onSendIPFS(event) {
    event.preventDefault();

    const { TokenURI_image, TokenURI_name } = this.state;

    const TokenURI = {
      image: '',
      name: ''
    };

    if (TokenURI_image === '') {
      alert('select the image')
    } else if (TokenURI_name === '') {
      alert('Enter the name')
    } else {

      this.OpenModal();
      
      // まず画像をIPFSにuploadする
      const results = await this.convertToBuffer(TokenURI_image);
      TokenURI.image = "https://ipfs.io/ipfs/"+results[0].hash;
      TokenURI.name = TokenURI_name;

      // 次に画像とテキストをJSON化して、もう一度IPFSにuploadする
      const TokenURI_All = JSON.stringify(TokenURI);
      const results_All = await this.convertToBuffer(TokenURI_All);
      const send_tokenURI = "https://ipfs.io/ipfs/"+results_All[0].hash
      
      this.setState({ipfsHash_image: TokenURI.image});
      this.setState({ipfsHash: send_tokenURI});
      this.setState({showFlag: false});

      console.log(this.state.ipfsHash_image);
      console.log(this.state.ipfsHash);

    //   try {
    //     const account = await web3.eth.getAccounts()
    //     await NFT.methods.mintAsset(
    //       this.state.ipfsHash
    //     ).send({ from: account[0] })
    //     .then( this.props.history.push('/') );

    //   } catch (err) {
    //     console.log(err);
    //   }
    }
  }

  OpenModal() {
    this.setState({ showModal: true });
  }

  CloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <Container>
          <Form onSubmit={this.onSendIPFS.bind(this)}>

          <Card className="mb-3">
              <Card.Header className="text-white bg-success">名前</Card.Header>
              <Card.Body>
                <Card.Text>
                  名前を入力して下さい
                </Card.Text>
                <Form.Control type="text" placeholder="Enter Token Name" value={this.state.TokenURI_name} onChange={this.onChangeName.bind(this)}/>
               </Card.Body>
             </Card>

            <Card className="mb-3">
              <Card.Header className="text-white bg-success">画像</Card.Header>
              <Card.Body>
                 <Card.Text>
                  画像を選択して下さい
                </Card.Text>
                <InputGroup className="mb-3">
                  <input type="file" className="custom-file-input" id="FileUploader" onChange={this.captureFile.bind(this)} />
                  <label className="custom-file-label" htmlFor="FileUploader">Choose file</label>
                </InputGroup>
              </Card.Body>
            </Card>
            
            <Button className="btn-block mb-3" variant="primary" type="submit">
              Ulopad
            </Button>
          </Form>

          </Container>

          <Modal show={this.state.showModal} onHide={this.CloseModal.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>Please wait</Modal.Title>
              </Modal.Header>
              <Modal.Body>pending...</Modal.Body>
          </Modal>

        </div>
      );
    }
  }
  
export default Uploader;

if (document.getElementById('example')) {
    ReactDOM.render(<Uploader />, document.getElementById('example'));
}

