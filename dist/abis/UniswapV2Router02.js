"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swapTokensForExactTokens = exports.swapTokensForExactETH = exports.swapExactTokensForTokensSupportingFeeOnTransferTokens = exports.swapExactTokensForTokens = exports.swapExactTokensForETHSupportingFeeOnTransferTokens = exports.swapExactTokensForETH = exports.swapExactETHForTokensSupportingFeeOnTransferTokens = exports.swapExactETHForTokens = exports.swapETHForExactTokens = exports.removeLiquidityWithPermit = exports.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens = exports.removeLiquidityETHWithPermit = exports.removeLiquidityETHSupportingFeeOnTransferTokens = exports.removeLiquidityETH = exports.removeLiquidity = exports.quote = exports.getAmountsOut = exports.getAmountsIn = exports.getAmountOut = exports.getAmountIn = exports.factory = exports.addLiquidityETH = exports.addLiquidity = exports.WETH = void 0;
exports.WETH = {
    "inputs": [],
    "name": "WETH",
    "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "stateMutability": "pure",
    "type": "function"
};
exports.addLiquidity = {
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
        },
        {
            "internalType": "uint256",
            "name": "amountADesired",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountBDesired",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountAMin",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountBMin",
            "type": "uint256"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }
    ],
    "name": "addLiquidity",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "amountA",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountB",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.addLiquidityETH = {
    "inputs": [
        {
            "internalType": "address",
            "name": "token",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "amountTokenDesired",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountTokenMin",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountETHMin",
            "type": "uint256"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }
    ],
    "name": "addLiquidityETH",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "amountToken",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountETH",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        }
    ],
    "stateMutability": "payable",
    "type": "function"
};
exports.factory = {
    "inputs": [],
    "name": "factory",
    "outputs": [
        {
            "internalType": "address",
            "name": "",
            "type": "address"
        }
    ],
    "stateMutability": "pure",
    "type": "function"
};
exports.getAmountIn = {
    "inputs": [
        {
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "reserveIn",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "reserveOut",
            "type": "uint256"
        }
    ],
    "name": "getAmountIn",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
        }
    ],
    "stateMutability": "pure",
    "type": "function"
};
exports.getAmountOut = {
    "inputs": [
        {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "reserveIn",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "reserveOut",
            "type": "uint256"
        }
    ],
    "name": "getAmountOut",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
        }
    ],
    "stateMutability": "pure",
    "type": "function"
};
exports.getAmountsIn = {
    "inputs": [
        {
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
        },
        {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        }
    ],
    "name": "getAmountsIn",
    "outputs": [
        {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
        }
    ],
    "stateMutability": "view",
    "type": "function"
};
exports.getAmountsOut = {
    "inputs": [
        {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
        },
        {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        }
    ],
    "name": "getAmountsOut",
    "outputs": [
        {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
        }
    ],
    "stateMutability": "view",
    "type": "function"
};
exports.quote = {
    "inputs": [
        {
            "internalType": "uint256",
            "name": "amountA",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "reserveA",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "reserveB",
            "type": "uint256"
        }
    ],
    "name": "quote",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "amountB",
            "type": "uint256"
        }
    ],
    "stateMutability": "pure",
    "type": "function"
};
exports.removeLiquidity = {
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
        },
        {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountAMin",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountBMin",
            "type": "uint256"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }
    ],
    "name": "removeLiquidity",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "amountA",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountB",
            "type": "uint256"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.removeLiquidityETH = {
    "inputs": [
        {
            "internalType": "address",
            "name": "token",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountTokenMin",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountETHMin",
            "type": "uint256"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }
    ],
    "name": "removeLiquidityETH",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "amountToken",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountETH",
            "type": "uint256"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.removeLiquidityETHSupportingFeeOnTransferTokens = {
    "inputs": [
        {
            "internalType": "address",
            "name": "token",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountTokenMin",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountETHMin",
            "type": "uint256"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }
    ],
    "name": "removeLiquidityETHSupportingFeeOnTransferTokens",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "amountETH",
            "type": "uint256"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.removeLiquidityETHWithPermit = {
    "inputs": [
        {
            "internalType": "address",
            "name": "token",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountTokenMin",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountETHMin",
            "type": "uint256"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        },
        {
            "internalType": "bool",
            "name": "approveMax",
            "type": "bool"
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
    "name": "removeLiquidityETHWithPermit",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "amountToken",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountETH",
            "type": "uint256"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.removeLiquidityETHWithPermitSupportingFeeOnTransferTokens = {
    "inputs": [
        {
            "internalType": "address",
            "name": "token",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountTokenMin",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountETHMin",
            "type": "uint256"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        },
        {
            "internalType": "bool",
            "name": "approveMax",
            "type": "bool"
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
    "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "amountETH",
            "type": "uint256"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.removeLiquidityWithPermit = {
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
        },
        {
            "internalType": "uint256",
            "name": "liquidity",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountAMin",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountBMin",
            "type": "uint256"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        },
        {
            "internalType": "bool",
            "name": "approveMax",
            "type": "bool"
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
    "name": "removeLiquidityWithPermit",
    "outputs": [
        {
            "internalType": "uint256",
            "name": "amountA",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountB",
            "type": "uint256"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.swapETHForExactTokens = {
    "inputs": [
        {
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
        },
        {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }
    ],
    "name": "swapETHForExactTokens",
    "outputs": [
        {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
        }
    ],
    "stateMutability": "payable",
    "type": "function"
};
exports.swapExactETHForTokens = {
    "inputs": [
        {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
        },
        {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }
    ],
    "name": "swapExactETHForTokens",
    "outputs": [
        {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
        }
    ],
    "stateMutability": "payable",
    "type": "function"
};
exports.swapExactETHForTokensSupportingFeeOnTransferTokens = {
    "inputs": [
        {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
        },
        {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }
    ],
    "name": "swapExactETHForTokensSupportingFeeOnTransferTokens",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
};
exports.swapExactTokensForETH = {
    "inputs": [
        {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
        },
        {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }
    ],
    "name": "swapExactTokensForETH",
    "outputs": [
        {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.swapExactTokensForETHSupportingFeeOnTransferTokens = {
    "inputs": [
        {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
        },
        {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }
    ],
    "name": "swapExactTokensForETHSupportingFeeOnTransferTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.swapExactTokensForTokens = {
    "inputs": [
        {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
        },
        {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }
    ],
    "name": "swapExactTokensForTokens",
    "outputs": [
        {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.swapExactTokensForTokensSupportingFeeOnTransferTokens = {
    "inputs": [
        {
            "internalType": "uint256",
            "name": "amountIn",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountOutMin",
            "type": "uint256"
        },
        {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }
    ],
    "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.swapTokensForExactETH = {
    "inputs": [
        {
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountInMax",
            "type": "uint256"
        },
        {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }
    ],
    "name": "swapTokensForExactETH",
    "outputs": [
        {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
};
exports.swapTokensForExactTokens = {
    "inputs": [
        {
            "internalType": "uint256",
            "name": "amountOut",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "amountInMax",
            "type": "uint256"
        },
        {
            "internalType": "address[]",
            "name": "path",
            "type": "address[]"
        },
        {
            "internalType": "address",
            "name": "to",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        }
    ],
    "name": "swapTokensForExactTokens",
    "outputs": [
        {
            "internalType": "uint256[]",
            "name": "amounts",
            "type": "uint256[]"
        }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
};
