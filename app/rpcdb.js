const blockchains = [
      {
        "name": "Algorand",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/algorand-mainnet-algod",
              "https://api.tatum.io/v3/blockchain/node/algorand-mainnet-indexer",
              "https://mainnet-api.algonode.cloud"
            ],
            "chainId": "",
            "nativeCurrency": "ALGO",
            "blockExplorer": "https://allo.info/"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/algorand-testnet-algod"
            ],
            "chainId": "",
            "nativeCurrency": "ALGO",
            "blockExplorer": "https://explorer.bitquery.io/algorand_testnet"
          },
          {
            "network": "Testnet Indexer",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/algorand-testnet-indexer"
            ],
            "chainId": "",
            "nativeCurrency": "ALGO",
          }
        ]
      },
      {
        "name": "Arbitrum",
        "networks": [
          {
            "network": "Blueberry Testnet",
            "rpcUrls": [
              "https://arb-blueberry-testnet.drpc.org/"
            ],
            "chainId": "0x14865d0f05",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://arb-blueberry.gelatoscout.com"
          },
          {
            "network": "Nova",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/arb-nova-mainnet",
              "https://arbitrum-nova.drpc.org"
            ],
            "chainId": "0xa4ba",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://nova.arbiscan.io/"
          },
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://arbitrum.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/arb-one-mainnet",
              "https://arbitrum.blockpi.network/v1/rpc/public",
              "https://rpc.ankr.com/arbitrum",
            ],
            "chainId": "0xa4b1",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://arbiscan.io/"
          },
          {
            "network": "Sepolia",
            "rpcUrls": [
              "https://arbitrum-sepolia.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/arb-testnet"
            ],
            "chainId": "0x66eee",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://sepolia.arbiscan.io/"
          }
        ]
      },
      {
        "name": "Astar",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://evm.astar.network"
            ],
            "chainId": "0x250",
            "nativeCurrency": "ASTR",
            "blockExplorer": "https://astar-zkevm.explorer.startale.com"
          },
          {
            "network": "zkEVM",
            "rpcUrls": [
              "https://rpc.startale.com/astar-zkevm"
            ],
            "chainId": "0xec0",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://astar.subscan.io/"
          }
        ]
      },
      {
        "name": "Aurora",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://aurora.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/aurora-mainnet"
            ],
            "chainId": "0x4e454152",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://explorer.aurora.dev/"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://aurora-testnet.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/aurora-testnet"
            ],
            "chainId": "0x4e454153",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://explorer.testnet.aurora.dev/"
          }
        ]
      },
      {
        "name": "Avalanche",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://avalanche.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/avax-mainnet",
              "https://api.avax.network/ext/bc/C/rpc",
              "https://rpc.ankr.com/avalanche",
              "https://avalanche.api.onfinality.io/public/ext/bc/P"
            ],
            "chainId": "0xa86a",
            "nativeCurrency": "AVAX",
            "blockExplorer": "https://snowtrace.io/"
          },
          {
            "network": "Fuji",
            "rpcUrls": [
              "https://avalanche-fuji.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/avax-testnet",
              "https://api.avax-test.network/ext/bc/C/rpc"
            ],
            "chainId": "0xa869",
            "nativeCurrency": "AVAX",
            "blockExplorer": "https://testnet.snowtrace.io/"
          }
        ]
      },
      {
        "name": "Base",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://base.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/base-mainnet"
            ],
            "chainId": "0x2105",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://basescan.org/"
          },
          {
            "network": "Sepolia Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/base-sepolia",
              "https://base-sepolia.drpc.org"
            ],
            "chainId": "0x14a34",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://sepolia.basescan.org/"
          }
        ]
      },
      {
        "name": "Berachain",
        "networks": [
          {
            "network": "bArtio",
            "rpcUrls": [
              "https://bartio.drpc.org"
            ],
            "chainId": "0x138d4",
            "nativeCurrency": "BERA",
            "blockExplorer": "https://bartio.beratrail.io/"
          }
        ]
      },
      {
        "name": "BNB Smart Chain",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://bsc.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/bsc-mainnet",
              "https://bsc.meowrpc.com",
              "https://1rpc.io/bnb",
              "https://binance.nodereal.io"
            ],
            "chainId": "0x38",
            "nativeCurrency": "BNB",
            "blockExplorer": "https://bscscan.com/"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://bsc-testnet.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/bnb-testnet",
              "https://api.tatum.io/v3/blockchain/node/bsc-testnet",
              "https://data-seed-prebsc-1-s1.binance.org:8545"
            ],
            "chainId": "0x61",
            "nativeCurrency": "tBNB",
            "blockExplorer": "https://testnet.bscscan.com/"
          },
          {
            "network": "opBNB Mainnet",
            "rpcUrls": [
              "https://opbnb.drpc.org/",
            ],
            "chainId": "0xcc",
            "nativeCurrency": "BNB",
            "blockExplorer": "https://mainnet.opbnbscan.com"
          },
          {
            "network": "opBNB Testnet",
            "rpcUrls": [
              "https://opbnb-testnet.drpc.org/"
            ],
            "chainId": "0x15eb",
            "nativeCurrency": "tBNB",
            "blockExplorer": "https://opbnb-testnet.bscscan.com"
          }
        ]
      },
      {
        "name": "Bitcoin",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/bitcoin-mainnet",
              "https://bitcoin.drpc.org/"
            ],
            "chainId": "",
            "nativeCurrency": "BTC",
            "blockExplorer": "https://btcscan.org/"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/bitcoin-testnet",
              "https://bitcoin-testnet.drpc.org/"
            ],
            "chainId": "",
            "nativeCurrency": "BTC",
            "blockExplorer": "https://blockstream.info/testnet/"
          }
        ]
      },
      {
        "name": "Bitcoin Cash",
        "networks": [
          {
            "network": "Rostrum Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/rostrum-mainnet"
            ],
            "chainId": "",
            "nativeCurrency": "BCH",
            "blockExplorer": ""
          }
        ]
      },
      {
        "name": "BitTorrent",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://bittorrent.drpc.org/"
            ],
            "chainId": "0xc7",
            "nativeCurrency": "BTT",
            "blockExplorer": "https://artio.beratrail.io"
          }
        ]
      },
      {
        "name": "Blast",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://blast.drpc.org/"
            ],
            "chainId": "0x13e31",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://blastscan.io"
          },
          {
            "network": "Sepolia",
            "rpcUrls": [
              "https://blast-sepolia.drpc.org/"
            ],
            "chainId": "0xa0c71fd",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://testnet.blastscan.io"
          }
        ]
      },
      {
        "name": "Boba",
        "networks": [
          {
            "network": "BNB Mainnet",
            "rpcUrls": [
              "https://boba-bnb.drpc.org/"
            ],
            "chainId": "0xdbe0",
            "nativeCurrency": "BOBA",
            "blockExplorer": "https://bobascan.com"
          },
          {
            "network": "Ethereum Mainnet",
            "rpcUrls": [
              "https://boba-eth.drpc.org/"
            ],
            "chainId": "0x120",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://bobascan.com"
          }
        ]
      },
      {
        "name": "Celo",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://celo.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/celo-mainnet",
              "https://rpc.ankr.com/celo",
              "https://forno.celo.org"
            ],
            "chainId": "0xa4ec",
            "nativeCurrency": "CELO",
            "blockExplorer": "https://celoscan.io/"
          },
          {
            "network": "Alfajores Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/celo-testnet",
              "https://celo-alfajores.drpc.org"
            ],
            "chainId": "0xaef3",
            "nativeCurrency": "CELO",
            "blockExplorer": "https://alfajores.celoscan.io/"
          }
        ]
      },
      {
        "name": "Chiliz",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/chiliz-mainnet"
            ],
            "chainId": "88888",
            "nativeCurrency": "CHZ",
            "blockExplorer": "https://chiliscan.com/"
          },
          {
            "network": "Spicy Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/chiliz-testnet"
            ],
            "chainId": "88882",
            "nativeCurrency": "CHZ",
            "blockExplorer": "https://testnet.chiliscan.com/"
          }
        ]
      },
      {
        "name": "Core",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://core.drpc.org/"
            ],
            "chainId": "0x45c",
            "nativeCurrency": "CORE",
            "blockExplorer": "https://scan.coredao.org"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://core-testnet.drpc.org/"
            ],
            "chainId": "0x45b",
            "nativeCurrency": "tCORE",
            "blockExplorer": "https://scan.test.btcs.network"
          }
        ]
      },
      {
        "name": "Cronos",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://cronos.drpc.org/",
              "https://evm-cronos.crypto.org"
            ],
            "chainId": "0x19",
            "nativeCurrency": "CRO",
            "blockExplorer": "https://explorer.cronos.org"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/cro-testnet",
              "https://cronos-testnet.drpc.org/"
            ],
            "chainId": "0x152",
            "nativeCurrency": "TCRO",
            "blockExplorer": "https://explorer.cronos.org/testnet"
          }
        ]
      },
      {
        "name": "Dymension",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://dymension.drpc.org/"
            ],
            "chainId": "0x44c",
            "nativeCurrency": "DYM",
            "blockExplorer": "https://dym.fyi"
          }
        ]
      },
      {
        "name": "Elastos",
        "networks": [
          {
            "network": "Smart Chain Mainnet",
            "rpcUrls": [
              "https://api.elastos.io/eth"
            ],
            "chainId": "20",
            "nativeCurrency": "ELA",
            "blockExplorer": "https://eth.elastos.io/"
          }
        ]
      },
      {
        "name": "EOS",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/eos-mainnet"
            ],
            "chainId": "EOS",
            "nativeCurrency": "EOS",
            "blockExplorer": "https://bloks.io/"
          }
        ]
      },
      {
        "name": "Ethereum",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://go.getblock.io/aefd01aa907c4805ba3c00a9e5b48c6b",
              "https://eth.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/ethereum-mainnet",
              "https://eth.meowrpc.com"
            ],
            "chainId": "0x1",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://etherscan.io/"
          },
          {
            "network": "Holesky Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/ethereum-holesky",
              "https://holesky.drpc.org"
            ],
            "chainId": "0x4268",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://holesky.etherscan.io/"
          },
          {
            "network": "Sepolia Testnet",
            "rpcUrls": [
              "https://sepolia.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/ethereum-sepolia",
              "https://rpc2.sepolia.org",
              "https://eth-sepolia.g.alchemy.com/v2/demo"
            ],
            "chainId": "0xaa36a7",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://sepolia.etherscan.io/"
          }
        ]
      },
      {
        "name": "Ethereum Classic",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/ethereum-classic-mainnet"
            ],
            "chainId": "61",
            "nativeCurrency": "ETC",
            "blockExplorer": "https://etc.blockscout.com/"
          },
          {
            "network": "Mordor Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/ethereum-classic-testnet"
            ],
            "chainId": "63",
            "nativeCurrency": "ETC",
            "blockExplorer": "https://etc-mordor.blockscout.com/"
          }
        ]
      },
      {
        "name": "Evmos",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://evmos.drpc.org/"
            ],
            "chainId": "0x2329",
            "nativeCurrency": "EVMOS",
            "blockExplorer": "https://escan.live"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://evmos-testnet.drpc.org/"
            ],
            "chainId": "0x2328",
            "nativeCurrency": "tEVMOS",
            "blockExplorer": "https://testnet.escan.live"
          }
        ]
      },
      {
        "name": "Fantom",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://fantom.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/fantom-mainnet",
              "https://rpc.ftm.tools",
              "https://fantom.api.onfinality.io/public"
            ],
            "chainId": "0xfa",
            "nativeCurrency": "FTM",
            "blockExplorer": "https://ftmscan.com"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://fantom-testnet.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/fantom-testnet",
              "https://rpc.testnet.fantom.network"
            ],
            "chainId": "0xfa2",
            "nativeCurrency": "FTM",
            "blockExplorer": "https://testnet.ftmscan.com/"
          }
        ]
      },
      {
        "name": "Filecoin",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://filecoin.drpc.org/"
            ],
            "chainId": "0x13a",
            "nativeCurrency": "tFIL",
            "blockExplorer": "https://filfox.info/en"
          },
          {
            "network": "Calibration Testnet",
            "rpcUrls": [
              "https://filecoin-calibration.drpc.org/"
            ],
            "chainId": "0x4cb2f",
            "nativeCurrency": "FIL",
            "blockExplorer": "https://calibration.filscan.io"
          }
        ]
      },
      {
        "name": "Flare",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/flare-mainnet"
            ],
            "chainId": "14",
            "nativeCurrency": "FLR",
            "blockExplorer": "https://flare-explorer.flare.network/"
          },
          {
            "network": "Coston Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/flare-coston"
            ],
            "chainId": "16",
            "nativeCurrency": "CFLR",
            "blockExplorer": "https://coston-explorer.flare.network/"
          },
          {
            "network": "Coston2 Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/flare-coston2"
            ],
            "chainId": "114",
            "nativeCurrency": "C2FLR",
            "blockExplorer": "https://coston2-explorer.flare.network/"
          },
          {
            "network": "Songbird Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/flare-songbird"
            ],
            "chainId": "19",
            "nativeCurrency": "SGB",
            "blockExplorer": "https://songbird-explorer.flare.network/"
          }
        ]
      },
      {
        "name": "Flow",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/flow-mainnet"
            ],
            "chainId": "FLOW",
            "nativeCurrency": "FLOW",
            "blockExplorer": "https://www.flowdiver.io/"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/flow-testnet"
            ],
            "chainId": "FLOW",
            "nativeCurrency": "FLOW",
            "blockExplorer": "https://testnet.flowdiver.io/"
          }
        ]
      },
      {
        "name": "Fuse",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://fuse.drpc.org/",
              "https://rpc.fuse.io"
            ],
            "chainId": "0x7a",
            "nativeCurrency": "FUSE",
            "blockExplorer": "https://explorer.fuse.io/"
          }
        ]
      },
      {
        "name": "Gnosis",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://gnosis.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/gno-mainnet",
              "https://rpc.gnosischain.com",
              "https://gnosis.api.onfinality.io/public"
            ],
            "chainId": "0x64",
            "nativeCurrency": "XDAI",
            "blockExplorer": "https://gnosisscan.io/"
          },
          {
            "network": "Chiado Testnet",
            "rpcUrls": [
              "https://gnosis-chiado.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/gno-testnet"
            ],
            "chainId": "0x27d8",
            "nativeCurrency": "XDAI",
            "blockExplorer": "https://blockscout.chiadochain.net"
          }
        ]
      },
      {
        "name": "Haqq",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/haqq-mainnet",
              "https://haqq.drpc.org/"
            ],
            "chainId": "0x2be3",
            "nativeCurrency": "ISLM",
            "blockExplorer": "https://explorer.haqq.network/"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/haqq-testnet",
              "https://haqq-testnet.drpc.org"
            ],
            "chainId": "0xd3c3",
            "nativeCurrency": "ISLMT",
            "blockExplorer": "https://explorer.testedge2.haqq.network/"
          }
        ]
      },
      {
        "name": "Harmony",
        "networks": [
          {
            "network": "One Shard 0 Mainnet",
            "rpcUrls": [
              "https://harmony-0.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/one-mainnet-s0",
              "https://api.harmony.one",
              "https://api.s0.b.hmny.io",
              "https://harmony-mainnet.chainstacklabs.com"
            ],
            "chainId": "0x63564c40",
            "nativeCurrency": "ONE",
            "blockExplorer": "https://explorer.harmony.one/"
          },
          {
            "network": "One Shard 1 Mainnet",
            "rpcUrls": [
              "https://harmony-1.drpc.org/"
            ],
            "chainId": "0x63564c41",
            "nativeCurrency": "ONE",
            "blockExplorer": "https://explorer.harmony.one/blocks/shard/1"
          }
        ]
      },
      {
        "name": "Horizen",
        "networks": [
          {
            "network": "EON Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/eon-mainnet"
            ],
            "chainId": "7332",
            "nativeCurrency": "ZEN",
            "blockExplorer": "https://eon-explorer.horizenlabs.io/"
          },
          {
            "network": "EON Gobi Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/eon-testnet"
            ],
            "chainId": "1663",
            "nativeCurrency": "tZEN",
            "blockExplorer": "https://gobi-explorer.horizenlabs.io/"
          }
        ]
      },
      {
        "name": "Immutable zkEVM",
        "networks": [
          {
            "network": "zkEVM Mainnet",
            "rpcUrls": [
              "https://immutable-zkevm.drpc.org/"
            ],
            "chainId": "0x343b",
            "nativeCurrency": "IMX",
            "blockExplorer": "https://explorer.immutable.com"
          },
          {
            "network": "zkEVM Testnet",
            "rpcUrls": [
              "https://immutable-zkevm-testnet.drpc.org/"
            ],
            "chainId": "0x34a1",
            "nativeCurrency": "tIMX",
            "blockExplorer": "https://explorer.testnet.immutable.com"
          }
        ]
      },
      {
        "name": "IoTeX",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://babel-api.mainnet.iotex.io"
            ],
            "chainId": "4689",
            "nativeCurrency": "IOTX",
            "blockExplorer": "https://iotexscout.io/"
          }
        ]
      },
      {
        "name": "Kadena",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/kadena-mainnet"
            ],
            "chainId": "KDA",
            "nativeCurrency": "KDA",
            "blockExplorer": "https://explorer.chainweb.com/mainnet"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/kadena-testnet"
            ],
            "chainId": "KDA",
            "nativeCurrency": "KDA",
            "blockExplorer": "https://explorer.chainweb.com/testnet"
          }
        ]
      },
      {
        "name": "Kava",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://kava.drpc.org/"
            ],
            "chainId": "0x8ae",
            "nativeCurrency": "KAVA",
            "blockExplorer": "https://kavascan.com/"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://kava-testnet.drpc.org/"
            ],
            "chainId": "0x8ad",
            "nativeCurrency": "KAVA",
            "blockExplorer": "https://testnet.kavascan.com"
          }
        ]
      },
      {
        "name": "Klaytn",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://klaytn.drpc.org",
              "https://klaytn-baobab.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/klaytn-cypress"
            ],
            "chainId": "0x2019",
            "nativeCurrency": "KLAY",
            "blockExplorer": "https://scope.klaytn.com"
          },
          {
            "network": "Baobab Testnet",
            "rpcUrls": [
              "https://klaytn-baobab.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/klaytn-baobab"
            ],
            "chainId": "0x3e9",
            "nativeCurrency": "KLAY",
            "blockExplorer": "https://baobab.klaytnscope.com/"
          }
        ]
      },
      {
        "name": "Kucoin",
        "networks": [
          {
            "network": "KCC Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/kcs-mainnet",
              "https://rpc-mainnet.kcc.network"
            ],
            "chainId": "321",
            "nativeCurrency": "KCS",
            "blockExplorer": "https://explorer.kcc.io/"
          },
          {
            "network": "KCC Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/kcs-testnet",
              "https://rpc-testnet.kcc.network"
            ],
            "chainId": "321",
            "nativeCurrency": "KCS",
            "blockExplorer": "https://scan-testnet.kcc.network/"
          }
        ]
      },
      {
        "name": "Kusama",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://kusama.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/ksm-mainnet"
            ],
            "chainId": "",
            "nativeCurrency": "KSM",
            "blockExplorer": "https://kusama.subscan.io/"
          }
        ]
      },
      {
        "name": "Linea",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://linea.drpc.org"
            ],
            "chainId": "0xe708",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://lineascan.build/"
          },
          {
            "network": "Sepolia Testnet",
            "rpcUrls": [
              "https://linea-sepolia.drpc.org"
            ],
            "chainId": "0xe705",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://goerli.lineascan.build/"
          }
        ]
      },
      {
        "name": "Lisk",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://lisk.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/lisk-mainnet"
            ],
            "chainId": "0x46f",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://blockscout.lisk.com"
          },
          {
            "network": "Lisk Sepolia Testnet",
            "rpcUrls": [
              "https://lisk-sepolia.drpc.org/"
            ],
            "chainId": "0x106a",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://sepolia-blockscout.lisk.com"
          }
        ]
      },
      {
        "name": "Litecoin",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/litecoin-core-mainnet",
              "https://api.tatum.io/v3/blockchain/node/litecoin-mainnet"
            ],
            "chainId": "",
            "nativeCurrency": "LTC",
            "blockExplorer": "https://live.blockcypher.com/ltc/"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/litecoin-core-testnet",
              "https://api.tatum.io/v3/blockchain/node/litecoin-testnet"
            ],
            "chainId": "",
            "nativeCurrency": "LTC",
            "blockExplorer": "https://litecoinspace.org/testnet"
          }
        ]
      },
      {
        "name": "Manta",
        "networks": [
          {
            "network": "Pacfic Mainnet",
            "rpcUrls": [
              "https://manta-pacific.drpc.org"
            ],
            "chainId": "0xa9",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://pacific-explorer.manta.network"
          },
          {
            "network": "Pacific Sepolia Testnet",
            "rpcUrls": [
              "https://manta-pacific-sepolia.drpc.org"
            ],
            "chainId": "0x34816e",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://pacific-explorer.sepolia-testnet.manta.network"
          }
        ]
      },
      {
        "name": "Mantle",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://mantle.drpc.org"
            ],
            "chainId": "0x1388",
            "nativeCurrency": "MNT",
            "blockExplorer": "https://explorer.mantle.xyz/"
          },
          {
            "network": "Sepolia Testnet",
            "rpcUrls": [
              "https://mantle-sepolia.drpc.org"
            ],
            "chainId": "0x138b",
            "nativeCurrency": "MNT",
            "blockExplorer": "https://explorer.sepolia.mantle.xyz"
          }
        ]
      },
      {
        "name": "Metis",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://metis.drpc.org/"
            ],
            "chainId": "0x440",
            "nativeCurrency": "METIS",
            "blockExplorer": "https://andromeda-explorer.metis.io"
          }
        ]
      },
      {
        "name": "Mode",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://mode.drpc.org/"
            ],
            "chainId": "0x868b",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://explorer.mode.network"
          },
          {
            "network": "Sepolia Testnet",
            "rpcUrls": [
              "https://mode-testnet.drpc.org/"
            ],
            "chainId": "0x397",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://sepolia.explorer.mode.network"
          }
        ]
      },
      {
        "name": "Moonbeam",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://moonbeam.drpc.org/"
            ],
            "chainId": "0x504",
            "nativeCurrency": "GLMR",
            "blockExplorer": "https://moonbeam.moonscan.io"
          },
          {
            "network": "Moonbase Alpha",
            "rpcUrls": [
              "https://moonbase-alpha.drpc.org"
            ],
            "chainId": "0x507",
            "nativeCurrency": "DEV",
            "blockExplorer": "https://moonbase.moonscan.io"
          }
        ]
      },
      {
        "name": "Moonriver",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://moonriver.drpc.org/",
              "https://rpc.moonriver.moonbeam.network",
              "https://moonriver.api.onfinality.io/public"
            ],
            "chainId": "0x505",
            "nativeCurrency": "MOVR",
            "blockExplorer": "https://moonriver.moonscan.io/"
          }
        ]
      },
      {
        "name": "MultiversX",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/egld-mainnet"
            ],
            "chainId": "EGLD",
            "nativeCurrency": "EGLD",
            "blockExplorer": "https://explorer.multiversx.com/"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/egld-testnet"
            ],
            "chainId": "EGLD",
            "nativeCurrency": "EGLD",
            "blockExplorer": "https://testnet-explorer.multiversx.com/"
          }
        ]
      },
      {
        "name": "Nahmii",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://l2.nahmii.io"
            ],
            "chainId": "5551",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://explorer.nahmii.io/"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://l2.testnet.nahmii.io"
            ],
            "chainId": "5553",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://explorer.testnet.nahmii.io/"
          }
        ]
      },
      {
        "name": "Near",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/near-mainnet",
              "https://near.drpc.org/",
              "https://rpc.ankr.com/near"
            ],
            "chainId": "",
            "nativeCurrency": "NEAR",
            "blockExplorer": "https://nearblocks.io/"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/near-testnet",
              "https://near-testnet.drpc.org/"
            ],
            "chainId": "",
            "nativeCurrency": "NEAR",
            "blockExplorer": "https://testnet.nearblocks.io/"
          }
        ]
      },
      {
        "name": "Neon EVM",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://neon-evm.drpc.org/"
            ],
            "chainId": "0xe9ac0d6",
            "nativeCurrency": "NEON",
            "blockExplorer": "https://neonscan.org"
          },
          {
            "network": "Devnet",
            "rpcUrls": [
              "https://neon-evm-devnet.drpc.org/"
            ],
            "chainId": "0xe9ac0ce",
            "nativeCurrency": "NEON",
            "blockExplorer": "https://devnet.neonscan.org"
          }
        ]
      },
      {
        "name": "Oasis",
        "networks": [
          {
            "network": "Emerald Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/oasis-mainnet"
            ],
            "chainId": "42262",
            "nativeCurrency": "ROSE",
            "blockExplorer": "https://explorer.oasis.io/mainnet/emerald/"
          },
          {
            "network": "Emerald Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/oasis-testnet"
            ],
            "chainId": "42261",
            "nativeCurrency": "ROSE",
            "blockExplorer": "https://explorer.oasis.io/testnet/emerald"
          }
        ]
      },
      {
        "name": "OKT Chain",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://oktc.drpc.org/"
            ],
            "chainId": "0x42",
            "nativeCurrency": "OKT",
            "blockExplorer": "https://www.okx.com/explorer/oktc/"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://oktc-testnet.drpc.org/"
            ],
            "chainId": "0x41",
            "nativeCurrency": "OKT",
            "blockExplorer": "https://www.oklink.com/okexchain-test"
          }
        ]
      },
      {
        "name": "Optimism",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://optimism.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/optimism-mainnet"
            ],
            "chainId": "0xa",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://optimistic.etherscan.io/"
          },
          {
            "network": "Sepolia Testnet",
            "rpcUrls": [
              "https://optimism-sepolia.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/optimism-testnet"
            ],
            "chainId": "0xaa37dc",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://sepolia-optimism.etherscan.io"
          }
        ]
      },
      {
        "name": "Palm",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/palm-mainnet"
            ],
            "chainId": "11297108109",
            "nativeCurrency": "PALM",
            "blockExplorer": "https://palm.chainlens.com"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/palm-testnet"
            ],
            "chainId": "11297108099",
            "nativeCurrency": "PALM",
            "blockExplorer": "https://testnet.palm.chainlens.com"
          }
        ]
      },
      {
        "name": "Pando",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://eth-rpc-api.pandoproject.org/rpc"
            ],
            "chainId": "3601",
            "nativeCurrency": "PTX",
            "blockExplorer": "https://explorer.pandoproject.org/"
          }
        ]
      },
      {
        "name": "Playnance",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://playnance.drpc.org/"
            ],
            "chainId": "0x725",
            "nativeCurrency": "PBG",
            "blockExplorer": "https://explorer.playblock.io"
          }
        ]
      },
      {
        "name": "Polkadot",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://polkadot.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/dot-mainnet"
            ],
            "chainId": "",
            "nativeCurrency": "DOT",
            "blockExplorer": "https://explorer.polkascan.io/"
          },
          {
            "network": "Westend Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/dot-testnet"
            ],
            "chainId": "",
            "nativeCurrency": "DOT",
            "blockExplorer": "https://westend.subscan.io/"
          }
        ]
      },
      {
        "name": "Polygon",
        "networks": [
          {
            "network": "POS Mainnet",
            "rpcUrls": [
              "https://polygon.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/polygon-mainnet",
              "https://matic-mainnet.chainstacklabs.com",
              "https://polygon-rpc.com",
              "https://polygon.api.onfinality.io/public"
            ],
            "chainId": "0x89",
            "nativeCurrency": "MATIC",
            "blockExplorer": "https://polygonscan.com/"
          },
          {
            "network": "Amoy Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/polygon-amoy",
              "https://polygon-amoy.drpc.org"
            ],
            "chainId": "0x13882",
            "nativeCurrency": "MATIC",
            "blockExplorer": "https://www.oklink.com/amoy"
          },
          {
            "network": "Blackberry Testnet",
            "rpcUrls": [
              "https://polygon-blackberry-testnet.drpc.org/"
            ],
            "chainId": "0x59d7131",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://polygon-blackberry.gelatoscout.com/"
          },
          {
            "network": "zkEVM Mainnet",
            "rpcUrls": [
              "https://polygon-zkevm.drpc.org"
            ],
            "chainId": "0x44d",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://zkevm.polygonscan.com/"
          },
          {
            "network": "zkEVM Cardona",
            "rpcUrls": [
              "https://polygon-zkevm-cardona.drpc.org"
            ],
            "chainId": "0x98a",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://cardona-zkevm.polygonscan.com"
          }
        ]
      },
      {
        "name": "re.al",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://real.drpc.org/"
            ],
            "chainId": "0x1b254",
            "nativeCurrency": "reETH",
            "blockExplorer": "https://explorer.re.al"
          }
        ]
      },
      {
        "name": "Ripple",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/ripple-mainnet"
            ],
            "chainId": "XRP",
            "nativeCurrency": "XRP",
            "blockExplorer": "https://xrpscan.com/"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/ripple-testnet"
            ],
            "chainId": "",
            "nativeCurrency": "XRP",
            "blockExplorer": "https://testnet.xrpl.org/"
          }
        ]
      },
      {
        "name": "Ronin",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://ronin.drpc.org/"
            ],
            "chainId": "0x7e4",
            "nativeCurrency": "RON",
            "blockExplorer": "https://app.roninchain.com/"
          }
        ]
      },
      {
        "name": "Rootstock",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://rootstock.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/rsk-mainnet"
            ],
            "chainId": "0x1e",
            "nativeCurrency": "RBTC",
            "blockExplorer": "https://explorer.rsk.co"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://rootstock-testnet.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/rsk-testnet"
            ],
            "chainId": "0x1f",
            "nativeCurrency": "tRBTC",
            "blockExplorer": "https://explorer.testnet.rsk.co"
          }
        ]
      },
      {
        "name": "Scroll",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://scroll.drpc.org"
            ],
            "chainId": "0x82750",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://scrollscan.com/"
          },
          {
            "network": "Sepolia Testnet",
            "rpcUrls": [
              "https://scroll-sepolia.drpc.org"
            ],
            "chainId": "0x8274f",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://sepolia.scrollscan.com/"
          }
        ]
      },
      {
        "name": "Shibarium",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://www.shibrpc.com"
            ],
            "chainId": "109",
            "nativeCurrency": "BONE",
            "blockExplorer": "https://www.shibariumscan.io/"
          }
        ]
      },
      {
        "name": "SmartBCH",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/bch-mainnet",
              "https://smartbch.fountainhead.cash/mainnet"
            ],
            "chainId": "10000",
            "nativeCurrency": "SBCH",
            "blockExplorer": "https://smartscout.cash/"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/bch-testnet"
            ],
            "chainId": "10001",
            "nativeCurrency": "BCHT",
            "blockExplorer": "https://blockhead.info/explorer/smartbch-testnet/"
          }
        ]
      },
      {
        "name": "Solana",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://solana.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/solana-mainnet",
              "https://rpc.ankr.com/solana"
            ],
            "chainId": "900",
            "nativeCurrency": "SOL",
            "blockExplorer": "https://explorer.solana.com/"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://solana-testnet.drpc.org"
            ],
            "chainId": "",
            "nativeCurrency": "SOL",
            "blockExplorer": "https://explorer.solana.com/?cluster=testnet"
          },
          {
            "network": "Devnet",
            "rpcUrls": [
              "https://solana-devnet.drpc.org",
              "https://api.tatum.io/v3/blockchain/node/solana-devnet"
            ],
            "chainId": "901",
            "nativeCurrency": "SOL",
            "blockExplorer": "https://explorer.solana.com/?cluster=devnet"
          }
        ]
      },
      {
        "name": "Stellar",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/stellar-mainnet"
            ],
            "chainId": "",
            "nativeCurrency": "XLM",
            "blockExplorer": "https://stellarchain.io/"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/stellar-testnet"
            ],
            "chainId": "",
            "nativeCurrency": "XLM",
            "blockExplorer": "https://testnet.stellarchain.io/"
          }
        ]
      },
      {
        "name": "Taiko",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://taiko.drpc.org/"
            ],
            "chainId": "0x28c58",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://taikoscan.io"
          },
          {
            "network": "Hekla",
            "rpcUrls": [
              "https://taiko-hekla.drpc.org"
            ],
            "chainId": "0x28c61",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://taikoscan.io"
          }
        ]
      },
      {
        "name": "Telos",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://evm.telos.detroitledger.tech/evm",
              "https://telos.drpc.org/",
              "https://mainnet.telos.net/evm"
            ],
            "chainId": "0x28",
            "nativeCurrency": "TLOS",
            "blockExplorer": "https://teloscan.io"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://telos-testnet.drpc.org/"
            ],
            "chainId": "0x29",
            "nativeCurrency": "TLOS",
            "blockExplorer": "https://testnet.teloscan.io"
          }
        ]
      },
      {
        "name": "Tezos",
        "networks": [
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/tezos-mainnet"
            ],
            "chainId": "",
            "nativeCurrency": "XTZ",
            "blockExplorer": "https://tzkt.io/"
          }
        ]
      },
      {
        "name": "Thundercore",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://thundercore.drpc.org/"
            ],
            "chainId": "0x6c",
            "nativeCurrency": "TT",
            "blockExplorer": "https://viewblock.io/thundercore"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://thundercore-testnet.drpc.org/"
            ],
            "chainId": "0x12",
            "nativeCurrency": "TST",
            "blockExplorer": "https://explorer-testnet.thundercore.com"
          }
        ]
      },
      {
        "name": "Tron",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/tron-mainnet",
              "https://tron.drpc.org"
            ],
            "chainId": "0x2b6653dc",
            "nativeCurrency": "TRX",
            "blockExplorer": "https://tronscan.org/"
          },
          {
            "network": "Shasta Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/tron-testnet",
              "https://tron-shasta.drpc.org"
            ],
            "chainId": "0x94a9059e",
            "nativeCurrency": "TRX",
            "blockExplorer": "https://tronscan.org/"
          }
        ]
      },
      {
        "name": "Ubiq",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://rpc.octano.dev"
            ],
            "chainId": "8",
            "nativeCurrency": "UBQ",
            "blockExplorer": "https://ubqblockexplorer.com/"
          }
        ]
      },
      {
        "name": "Vara",
        "networks": [
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://vara-testnet.drpc.org"
            ],
            "chainId": "",
            "nativeCurrency": "",
            "blockExplorer": "https://vara.subscan.io/"
          }
        ]
      },
      {
        "name": "Vechain",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/vechain-mainnet"
            ],
            "chainId": "100009",
            "nativeCurrency": "VET",
            "blockExplorer": "https://explore.vechain.org/"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/vechain-testnet"
            ],
            "chainId": "100010",
            "nativeCurrency": "VET",
            "blockExplorer": "https://explore-testnet.vechain.org/"
          }
        ]
      },
      {
        "name": "XDC",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/xdc-mainnet"
            ],
            "chainId": "50",
            "nativeCurrency": "XDC",
            "blockExplorer": "https://xdcscan.io"
          },
          {
            "network": "Apothem Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/xdc-testnet"
            ],
            "chainId": "51",
            "nativeCurrency": "TXDC",
            "blockExplorer": "https://apothem.xinfinscan.com"
          }
        ]
      },
      {
        "name": "Zcash",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/zcash-mainnet"
            ],
            "chainId": "ZEC",
            "nativeCurrency": "ZEC",
            "blockExplorer": "https://zcashblockexplorer.com/"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/zcash-testnet"
            ],
            "chainId": "ZEC",
            "nativeCurrency": "ZEC",
            "blockExplorer": "https://testnet.zcashblockexplorer.com/"
          }
        ]
      },
      {
        "name": "ZetaChain",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://zeta-chain.drpc.org/"
            ],
            "chainId": "0x1b58",
            "nativeCurrency": "ZETA",
            "blockExplorer": "https://explorer.zetachain.com/"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://zeta-chain-testnet.drpc.org"
            ],
            "chainId": "0x1b58",
            "nativeCurrency": "ZETA",
            "blockExplorer": "https://athens3.explorer.zetachain.com"
          }
        ]
      },
      {
        "name": "Zilliqa",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/zilliqa-mainnet"
            ],
            "chainId": "",
            "nativeCurrency": "ZIL",
            "blockExplorer": "https://viewblock.io/zilliqa"
          },
          {
            "network": "Testnet",
            "rpcUrls": [
              "https://api.tatum.io/v3/blockchain/node/zilliqa-testnet"
            ],
            "chainId": "",
            "nativeCurrency": "ZIL",
            "blockExplorer": "https://viewblock.io/zilliqa?network=testnet"
          }
        ]
      },
      {
        "name": "zkSync Era",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://zksync.drpc.org"
            ],
            "chainId": "0x144",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://explorer.zksync.io/"
          },
          {
            "network": "Sepolia",
            "rpcUrls": [
              "https://zksync-sepolia.drpc.org"
            ],
            "chainId": "0x12c",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://sepolia.explorer.zksync.io/"
          }
        ]
      },
      {
        "name": "Zora",
        "networks": [
          {
            "network": "Mainnet",
            "rpcUrls": [
              "https://zora.drpc.org/"
            ],
            "chainId": "0x76adf1",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://explorer.zora.energy"
          },
          {
            "network": "Sepolia",
            "rpcUrls": [
              "https://zora-sepolia.drpc.org/"
            ],
            "chainId": "0x3b9ac9ff",
            "nativeCurrency": "ETH",
            "blockExplorer": "https://sepolia.explorer.zora.energy"
          }
        ]
      }
    ];
    module.exports = blockchains;

  