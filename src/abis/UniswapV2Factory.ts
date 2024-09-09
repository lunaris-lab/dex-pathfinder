export const PairCreated = {
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "token0",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "token1",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "address",
            "name": "pair",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "name": "PairCreated",
    "type": "event"
};

export const allPairs = {
    "constant": true,
    "inputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "name": "allPairs",
    "outputs": [
        {
            "internalType": "address",
            "name": "pair",
            "type": "address"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
};

export const allPairsLength = {
    "constant": true,
    "inputs": [],
    "name": "allPairsLength",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
};

export const createPair = {
    "constant": false,
    "inputs": [
        {
            "internalType": "address",
            "name": "tokenA",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "tokenB",
            "type": "address"
        }
    ],
    "name": "createPair",
    "outputs": [
        {
            "internalType": "address",
            "name": "pair",
            "type": "address"
        }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
};

export const feeTo = {
    "constant": true,
    "inputs": [],
    "name": "feeTo",
    "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
};

export const feeToSetter = {
    "constant": true,
    "inputs": [],
    "name": "feeToSetter",
    "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
};

export const getPair = {
    "constant": true,
    "inputs": [
        {
            "internalType": "address",
            "name": "tokenA",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "tokenB",
            "type": "address"
        }
    ],
    "name": "getPair",
    "outputs": [
        {
            "internalType": "address",
            "name": "pair",
            "type": "address"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
};

export const setFeeTo = {
    "constant": false,
    "inputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "name": "setFeeTo",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
};

export const setFeeToSetter = {
    "constant": false,
    "inputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "name": "setFeeToSetter",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
};

