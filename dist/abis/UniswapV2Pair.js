"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transferFrom = exports.transfer = exports.totalSupply = exports.token1 = exports.token0 = exports.sync = exports.symbol = exports.swap = exports.skim = exports.price1CumulativeLast = exports.price0CumulativeLast = exports.permit = exports.nonces = exports.name = exports.mint = exports.kLast = exports.initialize = exports.getReserves = exports.factory = exports.decimals = exports.burn = exports.balanceOf = exports.approve = exports.allowance = exports.PERMIT_TYPEHASH = exports.MINIMUM_LIQUIDITY = exports.DOMAIN_SEPARATOR = exports.Transfer = exports.Sync = exports.Swap = exports.Mint = exports.Burn = exports.Approval = void 0;
exports.Approval = {
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "spender",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }
    ],
    "name": "Approval",
    "type": "event"
};
exports.Burn = {
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount0",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount1",
            "type": "uint256"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        }
    ],
    "name": "Burn",
    "type": "event"
};
exports.Mint = {
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount0",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount1",
            "type": "uint256"
        }
    ],
    "name": "Mint",
    "type": "event"
};
exports.Swap = {
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "sender",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount0In",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount1In",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount0Out",
            "type": "uint256"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "amount1Out",
            "type": "uint256"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        }
    ],
    "name": "Swap",
    "type": "event"
};
exports.Sync = {
    "anonymous": false,
    "inputs": [
        {
            "indexed": false,
            "internalType": "uint112",
            "name": "reserve0",
            "type": "uint112"
        },
        {
            "indexed": false,
            "internalType": "uint112",
            "name": "reserve1",
            "type": "uint112"
        }
    ],
    "name": "Sync",
    "type": "event"
};
exports.Transfer = {
    "anonymous": false,
    "inputs": [
        {
            "indexed": true,
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "indexed": true,
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "indexed": false,
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }
    ],
    "name": "Transfer",
    "type": "event"
};
exports.DOMAIN_SEPARATOR = {
    "constant": true,
    "inputs": [],
    "name": "DOMAIN_SEPARATOR",
    "outputs": [
        {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
};
exports.MINIMUM_LIQUIDITY = {
    "constant": true,
    "inputs": [],
    "name": "MINIMUM_LIQUIDITY",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
};
exports.PERMIT_TYPEHASH = {
    "constant": true,
    "inputs": [],
    "name": "PERMIT_TYPEHASH",
    "outputs": [
        {
            "internalType": "bytes32",
            "name": "",
            "type": "bytes32"
        }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
};
exports.allowance = {
    "constant": true,
    "inputs": [
        {
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        }
    ],
    "name": "allowance",
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
exports.approve = {
    "constant": false,
    "inputs": [
        {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }
    ],
    "name": "approve",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.balanceOf = {
    "constant": true,
    "inputs": [
        {
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }
    ],
    "name": "balanceOf",
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
exports.burn = {
    "constant": false,
    "inputs": [
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }
    ],
    "name": "burn",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "amount0",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amount1",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.decimals = {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [
        {
            "internalType": "uint8",
            "name": "",
            "type": "uint8"
        }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
};
exports.factory = {
    "constant": true,
    "inputs": [],
    "name": "factory",
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
exports.getReserves = {
    "constant": true,
    "inputs": [],
    "name": "getReserves",
    "outputs": [
        {
            "internalType": "uint112",
            "name": "reserve0",
            "type": "uint112"
        },
        {
            "internalType": "uint112",
            "name": "reserve1",
            "type": "uint112"
        },
        {
            "internalType": "uint32",
            "name": "blockTimestampLast",
            "type": "uint32"
        }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
};
exports.initialize = {
    "constant": false,
    "inputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "name": "initialize",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.kLast = {
    "constant": true,
    "inputs": [],
    "name": "kLast",
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
exports.mint = {
    "constant": false,
    "inputs": [
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }
    ],
    "name": "mint",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.name = {
    "constant": true,
    "inputs": [],
    "name": "name",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
};
exports.nonces = {
    "constant": true,
    "inputs": [
        {
            "internalType": "address",
            "name": "owner",
            "type": "address"
        }
    ],
    "name": "nonces",
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
exports.permit = {
    "constant": false,
    "inputs": [
        {
            "internalType": "address",
            "name": "owner",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "spender",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        },
        {
            "internalType": "uint8",
            "name": "v",
            "type": "uint8"
        },
        {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
        },
        {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
        }
    ],
    "name": "permit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.price0CumulativeLast = {
    "constant": true,
    "inputs": [],
    "name": "price0CumulativeLast",
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
exports.price1CumulativeLast = {
    "constant": true,
    "inputs": [],
    "name": "price1CumulativeLast",
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
exports.skim = {
    "constant": false,
    "inputs": [
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        }
    ],
    "name": "skim",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.swap = {
    "constant": false,
    "inputs": [
        {
            "internalType": "uint256",
            "name": "amount0Out",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amount1Out",
            "type": "uint256"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "bytes",
            "name": "data",
            "type": "bytes"
        }
    ],
    "name": "swap",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.symbol = {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [
        {
            "internalType": "string",
            "name": "",
            "type": "string"
        }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
};
exports.sync = {
    "constant": false,
    "inputs": [],
    "name": "sync",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.token0 = {
    "constant": true,
    "inputs": [],
    "name": "token0",
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
exports.token1 = {
    "constant": true,
    "inputs": [],
    "name": "token1",
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
exports.totalSupply = {
    "constant": true,
    "inputs": [],
    "name": "totalSupply",
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
exports.transfer = {
    "constant": false,
    "inputs": [
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }
    ],
    "name": "transfer",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.transferFrom = {
    "constant": false,
    "inputs": [
        {
            "internalType": "address",
            "name": "from",
            "type": "address"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "value",
            "type": "uint256"
        }
    ],
    "name": "transferFrom",
    "outputs": [
        {
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
};
