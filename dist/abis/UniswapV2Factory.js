"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setFeeToSetter = exports.setFeeTo = exports.getPair = exports.feeToSetter = exports.feeTo = exports.createPair = exports.allPairsLength = exports.allPairs = exports.PairCreated = void 0;
exports.PairCreated = {
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
exports.allPairs = {
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
exports.allPairsLength = {
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
exports.createPair = {
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
exports.feeTo = {
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
exports.feeToSetter = {
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
exports.getPair = {
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
exports.setFeeTo = {
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
exports.setFeeToSetter = {
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
