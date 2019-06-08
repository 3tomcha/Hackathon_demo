import web3 from './web3';

const address ='0x5F2D87A452eEf2151bD95Bb214F0833eE1b075A9';

const abi = [
    {
        "constant": false,
        "inputs": [
            {
                "name": "_name",
                "type": "string"
            },
            {
                "name": "_image",
                "type": "string"
            }
        ],
        "name": "registerUser",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_addr",
                "type": "address"
            }
        ],
        "name": "getListHistoryByAddress",
        "outputs": [
            {
                "components": [
                    {
                        "name": "timestamp",
                        "type": "uint256"
                    },
                    {
                        "components": [
                            {
                                "name": "addr",
                                "type": "address"
                            },
                            {
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "name": "image",
                                "type": "string"
                            }
                        ],
                        "name": "user1",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "name": "addr",
                                "type": "address"
                            },
                            {
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "name": "image",
                                "type": "string"
                            }
                        ],
                        "name": "user2",
                        "type": "tuple"
                    }
                ],
                "name": "",
                "type": "tuple[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "getListHistory",
        "outputs": [
            {
                "components": [
                    {
                        "name": "timestamp",
                        "type": "uint256"
                    },
                    {
                        "components": [
                            {
                                "name": "addr",
                                "type": "address"
                            },
                            {
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "name": "image",
                                "type": "string"
                            }
                        ],
                        "name": "user1",
                        "type": "tuple"
                    },
                    {
                        "components": [
                            {
                                "name": "addr",
                                "type": "address"
                            },
                            {
                                "name": "name",
                                "type": "string"
                            },
                            {
                                "name": "image",
                                "type": "string"
                            }
                        ],
                        "name": "user2",
                        "type": "tuple"
                    }
                ],
                "name": "",
                "type": "tuple[]"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "address"
            }
        ],
        "name": "users",
        "outputs": [
            {
                "name": "addr",
                "type": "address"
            },
            {
                "name": "name",
                "type": "string"
            },
            {
                "name": "image",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_hash",
                "type": "bytes32"
            },
            {
                "name": "_signature",
                "type": "bytes"
            }
        ],
        "name": "setHistory",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "listOfHistory",
        "outputs": [
            {
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "image",
                        "type": "string"
                    }
                ],
                "name": "user1",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "image",
                        "type": "string"
                    }
                ],
                "name": "user2",
                "type": "tuple"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "addr",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "name",
                "type": "string"
            },
            {
                "indexed": false,
                "name": "image",
                "type": "string"
            }
        ],
        "name": "SetUser",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "name": "timestamp",
                "type": "uint256"
            },
            {
                "components": [
                    {
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "image",
                        "type": "string"
                    }
                ],
                "indexed": false,
                "name": "user1",
                "type": "tuple"
            },
            {
                "components": [
                    {
                        "name": "addr",
                        "type": "address"
                    },
                    {
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "name": "image",
                        "type": "string"
                    }
                ],
                "indexed": false,
                "name": "user2",
                "type": "tuple"
            }
        ],
        "name": "SetHistory",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    }
];

export default new web3.eth.Contract(abi, address);
