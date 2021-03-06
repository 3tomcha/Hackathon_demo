import React, { Component } from 'react';
import { Image, Container, Card, InputGroup, Form, Button, Modal } from 'react-bootstrap';
import ipfs from './IPFS';
import ReactDOM from 'react-dom';

import web3 from './web3';
import LOVEContract from './ABI';

class Uploader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            TokenURI_image: '',
            TokenURI_name: '',
            ipfsHash_image: '',
            previewImage: '',
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

    let reader2 = new FileReader();
    reader2.readAsDataURL(file);
    reader2.onloadend = () => this.setState({previewImage: reader2.result});
  };

  // Bufferオブジェクトに変換し、IPFSに送信
  async convertToBuffer(value) {
    const buffer = await Buffer.from(value);
    const results = await ipfs.add(buffer);
    return results
  };

  // 名前を入力
  onChangeName(event) {
    this.setState({TokenURI_name: event.target.value});
  }

  async onSendIPFS(event) {
    event.preventDefault();

    const { TokenURI_image, TokenURI_name } = this.state;

    if (TokenURI_image === '') {
      alert('select the image')
    } else if (TokenURI_name === '') {
      alert('Enter the name')
    } else {

      this.OpenModal();

      // 画像をIPFSにuploadする
      const results = await this.convertToBuffer(TokenURI_image);
      const image = "https://ipfs.io/ipfs/"+results[0].hash;

      this.setState({ipfsHash_image: image});
      this.setState({showFlag: false});
      console.log(this.state.ipfsHash_image);

      try {
        const account = await web3.eth.getAccounts()
        await LOVEContract.methods.registerUser(TokenURI_name, this.state.ipfsHash_image).send({ from: account[0] });

      } catch (err) {
        console.log(err);
      }
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
              <Card.Header className="text-center text-header card-header">名前と画像の登録</Card.Header>
              <Card.Body>
                <Card.Text>
                  名前
                </Card.Text>
                <Card.Text>
                  <Form.Control type="text" placeholder="あなたの名前を入力してね" value={this.state.TokenURI_name} onChange={this.onChangeName.bind(this)}/>
                </Card.Text>
                <Card.Text>
                  画像
                </Card.Text>
                <InputGroup className="mb-3">
                  <input type="file" className="custom-file-input" id="FileUploader" onChange={this.captureFile.bind(this)} />
                  <label className="custom-file-label" htmlFor="FileUploader">Choose file</label>
                </InputGroup>
                <Card.Text>
                  <Image src={this.state.previewImage} />
                </Card.Text>
                <Card.Text className="text-center">
                  <Button className="mb-3 submit-btn" variant="primary" type="submit"></Button>
                </Card.Text>
              </Card.Body>
            </Card>
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

if (document.getElementById('uploader')) {
  ReactDOM.render(<Uploader />, document.getElementById('uploader'));
}
