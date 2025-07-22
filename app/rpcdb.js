const blockchains = [
  {
    "name": "Algorand",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://mainnet-api.algonode.cloud",
          "https://mainnet-algorand.api.purestake.io/ps2"
        ],
        "chainId": "",
        "nativeCurrency": "ALGO",
        "blockExplorer": "https://allo.info/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://testnet-api.algonode.cloud"
        ],
        "chainId": "",
        "nativeCurrency": "ALGO",
        "blockExplorer": "https://explorer.bitquery.io/algorand_testnet"
      },
      {
        "network": "Testnet Indexer",
        "rpcUrls": [
          "https://testnet-idx.algonode.cloud"
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
          "https://arb-blueberry-testnet.drpc.org/",
          "https://blueberry-rpc.arbitrum.io/rpc"
        ],
        "chainId": "0x14865d0f05",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://arb-blueberry.gelatoscout.com"
      },
      {
        "network": "Nova",
        "rpcUrls": [
          "https://arbitrum-nova.drpc.org",
          "https://nova.arbitrum.io/rpc"
        ],
        "chainId": "0xa4ba",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://nova.arbiscan.io/"
      },
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://arbitrum.drpc.org",
          "https://arbitrum.blockpi.network/v1/rpc/public",
          "https://rpc.ankr.com/arbitrum",
          "https://arb1.arbitrum.io/rpc"
        ],
        "chainId": "0xa4b1",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://arbiscan.io/"
      },
      {
        "network": "Sepolia",
        "rpcUrls": [
          "https://arbitrum-sepolia.drpc.org",
          "https://sepolia-rollup.arbitrum.io/rpc"
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
          "https://evm.astar.network",
          "https://astar.public.blastapi.io"
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
          "https://mainnet.aurora.dev"
        ],
        "chainId": "0x4e454152",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://explorer.aurora.dev/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://aurora-testnet.drpc.org",
          "https://testnet.aurora.dev"
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
          "https://mainnet.base.org"
        ],
        "chainId": "0x2105",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://basescan.org/"
      },
      {
        "network": "Sepolia Testnet",
        "rpcUrls": [
          "https://base-sepolia.drpc.org",
          "https://sepolia.base.org"
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
          "https://bartio.drpc.org",
          "https://artio.rpc.berachain.com"
        ],
        "chainId": "0x138d4",
        "nativeCurrency": "BERA",
        "blockExplorer": "https://bartio.beratrail.io/"
      },
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://berachain.drpc.org",
          "https://rpc.berachain.com"
        ],
        "chainId": "0x138de",
        "nativeCurrency": "BERA",
        "blockExplorer": "https://berascan.com/"
      },
      {
        "network": "Bepolia",
        "rpcUrls": [
          "https://berachain-bepolia.drpc.org",
          "https://bepolia.rpc.berachain.com"
        ],
        "chainId": "80069",
        "nativeCurrency": "BERA",
        "blockExplorer": "https://bepolia.beratrail.io/"
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
          "https://bsc.meowrpc.com",
          "https://1rpc.io/bnb",
          "https://binance.nodereal.io",
          "https://bsc-dataseed.binance.org",
          "https://bsc-dataseed1.binance.org",
          "https://bsc-dataseed2.binance.org"
        ],
        "chainId": "0x38",
        "nativeCurrency": "BNB",
        "blockExplorer": "https://bscscan.com/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://bsc-testnet.drpc.org",
          "https://data-seed-prebsc-1-s1.binance.org:8545",
          "https://data-seed-prebsc-2-s1.binance.org:8545"
        ],
        "chainId": "0x61",
        "nativeCurrency": "tBNB",
        "blockExplorer": "https://testnet.bscscan.com/"
      },
      {
        "network": "opBNB Mainnet",
        "rpcUrls": [
          "https://opbnb.drpc.org/",
          "https://opbnb-mainnet-rpc.bnbchain.org"
        ],
        "chainId": "0xcc",
        "nativeCurrency": "BNB",
        "blockExplorer": "https://mainnet.opbnbscan.com"
      },
      {
        "network": "opBNB Testnet",
        "rpcUrls": [
          "https://opbnb-testnet.drpc.org/",
          "https://opbnb-testnet-rpc.bnbchain.org"
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
          "https://bitcoin.drpc.org/"
        ],
        "chainId": "",
        "nativeCurrency": "BTC",
        "blockExplorer": "https://btcscan.org/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
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
          "https://rest.bitcoin.com/v2/"
        ],
        "chainId": "",
        "nativeCurrency": "BCH",
        "blockExplorer": "https://blockchair.com/bitcoin-cash"
      }
    ]
  },
  {
    "name": "BitTorrent",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://rpc.bittorrentchain.io"
        ],
        "chainId": "0xc7",
        "nativeCurrency": "BTT",
        "blockExplorer": ""
      }
    ]
  },
  {
    "name": "Blast",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://blast.drpc.org/",
          "https://rpc.blast.io"
        ],
        "chainId": "0x13e31",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://blastscan.io"
      },
      {
        "network": "Sepolia",
        "rpcUrls": [
          "https://blast-sepolia.drpc.org/",
          "https://sepolia.blast.io"
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
          "https://boba-bnb.drpc.org/",
          "https://bnb.boba.network"
        ],
        "chainId": "0xdbe0",
        "nativeCurrency": "BOBA",
        "blockExplorer": "https://bobascan.com"
      },
      {
        "network": "Ethereum Mainnet",
        "rpcUrls": [
          "https://boba-eth.drpc.org/",
          "https://mainnet.boba.network"
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
          "https://celo-alfajores.drpc.org",
          "https://alfajores-forno.celo-testnet.org"
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
          "https://rpc.ankr.com/chiliz"
        ],
        "chainId": "88888",
        "nativeCurrency": "CHZ",
        "blockExplorer": "https://chiliscan.com/"
      },
      {
        "network": "Spicy Testnet",
        "rpcUrls": [
          "https://spicy-rpc.chiliz.com"
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
          "https://core.drpc.org/",
          "https://rpc.coredao.org"
        ],
        "chainId": "0x45c",
        "nativeCurrency": "CORE",
        "blockExplorer": "https://scan.coredao.org"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://core-testnet.drpc.org/",
          "https://rpc.test.btcs.network"
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
          "https://evm-cronos.crypto.org",
          "https://cronos.org/rpc"
        ],
        "chainId": "0x19",
        "nativeCurrency": "CRO",
        "blockExplorer": "https://explorer.cronos.org"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://cronos-testnet.drpc.org/",
          "https://evm-t3.cronos.org"
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
          "https://dymension.drpc.org/",
          "https://dym.rpc.silknodes.io"
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
          "https://api.elastos.io/eth",
          "https://rpc.elastos.io/api"
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
          "https://eos.greymass.com"
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
          "https://eth.meowrpc.com",
          "https://ethereum.publicnode.com",
          "https://cloudflare-eth.com"
        ],
        "chainId": "0x1",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://etherscan.io/"
      },
      {
        "network": "Holesky Testnet",
        "rpcUrls": [
          "https://holesky.drpc.org",
          "https://ethereum-holesky.publicnode.com"
        ],
        "chainId": "0x4268",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://holesky.etherscan.io/"
      },
      {
        "network": "Sepolia Testnet",
        "rpcUrls": [
          "https://sepolia.drpc.org",
          "https://rpc2.sepolia.org",
          "https://eth-sepolia.g.alchemy.com/v2/demo",
          "https://ethereum-sepolia.publicnode.com"
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
          "https://etc.rivet.link"
        ],
        "chainId": "61",
        "nativeCurrency": "ETC",
        "blockExplorer": "https://etc.blockscout.com/"
      },
      {
        "network": "Mordor Testnet",
        "rpcUrls": [
          "https://mordor.etccooperative.org"
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
          "https://evmos.drpc.org/",
          "https://evmos-evm.publicnode.com"
        ],
        "chainId": "0x2329",
        "nativeCurrency": "EVMOS",
        "blockExplorer": "https://escan.live"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://evmos-testnet.drpc.org/",
          "https://evmos-testnet.lava.build"
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
          "https://rpc.ftm.tools",
          "https://fantom.api.onfinality.io/public",
          "https://rpc.fantom.network"
        ],
        "chainId": "0xfa",
        "nativeCurrency": "FTM",
        "blockExplorer": "https://ftmscan.com"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://fantom-testnet.drpc.org",
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
          "https://filecoin.drpc.org/",
          "https://api.node.glif.io/rpc/v1"
        ],
        "chainId": "0x13a",
        "nativeCurrency": "tFIL",
        "blockExplorer": "https://filfox.info/en"
      },
      {
        "network": "Calibration Testnet",
        "rpcUrls": [
          "https://filecoin-calibration.drpc.org/",
          "https://api.calibration.node.glif.io/rpc/v1"
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
          "https://flare-api.flare.network/ext/C/rpc"
        ],
        "chainId": "14",
        "nativeCurrency": "FLR",
        "blockExplorer": "https://flare-explorer.flare.network/"
      },
      {
        "network": "Coston Testnet",
        "rpcUrls": [
          "https://coston-api.flare.network/ext/C/rpc"
        ],
        "chainId": "16",
        "nativeCurrency": "CFLR",
        "blockExplorer": "https://coston-explorer.flare.network/"
      },
      {
        "network": "Coston2 Testnet",
        "rpcUrls": [
          "https://coston2-api.flare.network/ext/C/rpc"
        ],
        "chainId": "114",
        "nativeCurrency": "C2FLR",
        "blockExplorer": "https://coston2-explorer.flare.network/"
      },
      {
        "network": "Songbird Mainnet",
        "rpcUrls": [
          "https://songbird-api.flare.network/ext/C/rpc"
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
          "https://rest-mainnet.onflow.org"
        ],
        "chainId": "FLOW",
        "nativeCurrency": "FLOW",
        "blockExplorer": "https://www.flowdiver.io/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://rest-testnet.onflow.org"
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
          "https://rpc.fuse.io",
          "https://fuse-mainnet.chainstacklabs.com"
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
          "https://rpc.gnosischain.com",
          "https://gnosis.api.onfinality.io/public",
          "https://rpc.ankr.com/gnosis"
        ],
        "chainId": "0x64",
        "nativeCurrency": "XDAI",
        "blockExplorer": "https://gnosisscan.io/"
      },
      {
        "network": "Chiado Testnet",
        "rpcUrls": [
          "https://gnosis-chiado.drpc.org",
          "https://rpc.chiadochain.net"
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
          "https://haqq.drpc.org/",
          "https://rpc.eth.haqq.network"
        ],
        "chainId": "0x2be3",
        "nativeCurrency": "ISLM",
        "blockExplorer": "https://explorer.haqq.network/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://haqq-testnet.drpc.org",
          "https://rpc.eth.testedge2.haqq.network"
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
          "https://harmony-1.drpc.org/",
          "https://api.s1.t.hmny.io"
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
          "https://eon-rpc.horizenlabs.io/ethv1"
        ],
        "chainId": "7332",
        "nativeCurrency": "ZEN",
        "blockExplorer": "https://eon-explorer.horizenlabs.io/"
      },
      {
        "network": "EON Gobi Testnet",
        "rpcUrls": [
          "https://gobi-rpc.horizenlabs.io/ethv1"
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
          "https://immutable-zkevm.drpc.org/",
          "https://rpc.immutable.com"
        ],
        "chainId": "0x343b",
        "nativeCurrency": "IMX",
        "blockExplorer": "https://explorer.immutable.com"
      },
      {
        "network": "zkEVM Testnet",
        "rpcUrls": [
          "https://immutable-zkevm-testnet.drpc.org/",
          "https://rpc.testnet.immutable.com"
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
          "https://babel-api.mainnet.iotex.io",
          "https://iotex-mainnet.drpc.org"
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
          "https://api.chainweb.com/chainweb/0.0/mainnet01/chain/0/pact"
        ],
        "chainId": "KDA",
        "nativeCurrency": "KDA",
        "blockExplorer": "https://explorer.chainweb.com/mainnet"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://api.testnet.chainweb.com/chainweb/0.0/testnet04/chain/0/pact"
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
          "https://kava.drpc.org/",
          "https://evm.kava.io"
        ],
        "chainId": "0x8ae",
        "nativeCurrency": "KAVA",
        "blockExplorer": "https://kavascan.com/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://kava-testnet.drpc.org/",
          "https://evm.testnet.kava.io"
        ],
        "chainId": "0x8ad",
        "nativeCurrency": "KAVA",
        "blockExplorer": "https://testnet.kavascan.com"
      }
    ]
  },
  {
    "name": "Kucoin",
    "networks": [
      {
        "network": "KCC Mainnet",
        "rpcUrls": [
          "https://rpc-mainnet.kcc.network",
          "https://kcc-rpc.com"
        ],
        "chainId": "321",
        "nativeCurrency": "KCS",
        "blockExplorer": "https://explorer.kcc.io/"
      },
      {
        "network": "KCC Testnet",
        "rpcUrls": [
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
          "wss://kusama-rpc.polkadot.io"
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
          "https://linea.drpc.org",
          "https://rpc.linea.build"
        ],
        "chainId": "0xe708",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://lineascan.build/"
      },
      {
        "network": "Sepolia Testnet",
        "rpcUrls": [
          "https://linea-sepolia.drpc.org",
          "https://rpc.sepolia.linea.build"
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
          "https://rpc.lisk.com"
        ],
        "chainId": "0x46f",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://blockscout.lisk.com"
      },
      {
        "network": "Lisk Sepolia Testnet",
        "rpcUrls": [
          "https://lisk-sepolia.drpc.org/",
          "https://rpc.sepolia.lisk.com"
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
          "https://ltc.getblock.io/mainnet/"
        ],
        "chainId": "",
        "nativeCurrency": "LTC",
        "blockExplorer": "https://live.blockcypher.com/ltc/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
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
          "https://manta-pacific.drpc.org",
          "https://pacific-rpc.manta.network/http"
        ],
        "chainId": "0xa9",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://pacific-explorer.manta.network"
      },
      {
        "network": "Pacific Sepolia Testnet",
        "rpcUrls": [
          "https://manta-pacific-sepolia.drpc.org",
          "https://pacific-rpc.sepolia-testnet.manta.network/http"
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
          "https://mantle.drpc.org",
          "https://rpc.mantle.xyz"
        ],
        "chainId": "0x1388",
        "nativeCurrency": "MNT",
        "blockExplorer": "https://explorer.mantle.xyz/"
      },
      {
        "network": "Sepolia Testnet",
        "rpcUrls": [
          "https://mantle-sepolia.drpc.org",
          "https://rpc.sepolia.mantle.xyz"
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
          "https://metis.drpc.org/",
          "https://andromeda.metis.io/?owner=1088"
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
          "https://mode.drpc.org/",
          "https://mainnet.mode.network"
        ],
        "chainId": "0x868b",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://explorer.mode.network"
      },
      {
        "network": "Sepolia Testnet",
        "rpcUrls": [
          "https://mode-testnet.drpc.org/",
          "https://sepolia.mode.network"
        ],
        "chainId": "0x397",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://sepolia.explorer.mode.network"
      }
    ]
  },
  {
    "name": "Monad",
    "networks": [
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://monad-testnet.drpc.org",
        ],
        "chainId": "0x279f",
        "nativeCurrency": "",
        "blockExplorer": ""
      },
    ]
  },
  {
    "name": "Moonbeam",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://moonbeam.drpc.org/",
          "https://rpc.api.moonbeam.network"
        ],
        "chainId": "0x504",
        "nativeCurrency": "GLMR",
        "blockExplorer": "https://moonbeam.moonscan.io"
      },
      {
        "network": "Moonbase Alpha",
        "rpcUrls": [
          "https://moonbase-alpha.drpc.org",
          "https://rpc.api.moonbase.moonbeam.network"
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
          "https://moonriver.api.onfinality.io/public",
          "https://rpc.api.moonriver.moonbeam.network"
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
          "https://gateway.multiversx.com"
        ],
        "chainId": "EGLD",
        "nativeCurrency": "EGLD",
        "blockExplorer": "https://explorer.multiversx.com/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://testnet-gateway.multiversx.com"
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
          "https://l2.nahmii.io",
          "https://rpc.nahmii.io"
        ],
        "chainId": "5551",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://explorer.nahmii.io/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://l2.testnet.nahmii.io",
          "https://rpc.testnet.nahmii.io"
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
          "https://near.drpc.org/",
          "https://rpc.ankr.com/near",
          "https://rpc.mainnet.near.org"
        ],
        "chainId": "",
        "nativeCurrency": "NEAR",
        "blockExplorer": "https://nearblocks.io/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://near-testnet.drpc.org/",
          "https://rpc.testnet.near.org"
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
          "https://neon-evm.drpc.org/",
          "https://neon-proxy-mainnet.solana.p2p.org"
        ],
        "chainId": "0xe9ac0d6",
        "nativeCurrency": "NEON",
        "blockExplorer": "https://neonscan.org"
      },
      {
        "network": "Devnet",
        "rpcUrls": [
          "https://neon-evm-devnet.drpc.org/",
          "https://devnet.neonevm.org"
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
          "https://emerald.oasis.dev"
        ],
        "chainId": "42262",
        "nativeCurrency": "ROSE",
        "blockExplorer": "https://explorer.oasis.io/mainnet/emerald/"
      },
      {
        "network": "Emerald Testnet",
        "rpcUrls": [
          "https://testnet.emerald.oasis.dev"
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
          "https://oktc.drpc.org/",
          "https://exchainrpc.okex.org"
        ],
        "chainId": "0x42",
        "nativeCurrency": "OKT",
        "blockExplorer": "https://www.okx.com/explorer/oktc/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://oktc-testnet.drpc.org/",
          "https://exchaintestrpc.okex.org"
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
          "https://mainnet.optimism.io"
        ],
        "chainId": "0xa",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://optimistic.etherscan.io/"
      },
      {
        "network": "Sepolia Testnet",
        "rpcUrls": [
          "https://optimism-sepolia.drpc.org",
          "https://sepolia.optimism.io"
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
          "https://palm-mainnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b"
        ],
        "chainId": "11297108109",
        "nativeCurrency": "PALM",
        "blockExplorer": "https://palm.chainlens.com"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://palm-testnet.infura.io/v3/3a961d6501e54add9a41aa53f15de99b"
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
          "https://eth-rpc-api.pandoproject.org/rpc",
          "https://rpc.pandoproject.org/rpc"
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
          "https://playnance.drpc.org/",
          "https://rpc.playnance.io"
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
          "wss://rpc.polkadot.io"
        ],
        "chainId": "",
        "nativeCurrency": "DOT",
        "blockExplorer": "https://explorer.polkascan.io/"
      },
      {
        "network": "Westend Testnet",
        "rpcUrls": [
          "wss://westend-rpc.polkadot.io"
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
          "https://matic-mainnet.chainstacklabs.com",
          "https://polygon-rpc.com",
          "https://polygon.api.onfinality.io/public",
          "https://polygon-bor.publicnode.com"
        ],
        "chainId": "0x89",
        "nativeCurrency": "POL",
        "blockExplorer": "https://polygonscan.com/"
      },
      {
        "network": "Amoy Testnet",
        "rpcUrls": [
          "https://polygon-amoy.drpc.org",
          "https://rpc-amoy.polygon.technology"
        ],
        "chainId": "0x13882",
        "nativeCurrency": "POL",
        "blockExplorer": "https://www.oklink.com/amoy"
      },
      {
        "network": "Blackberry Testnet",
        "rpcUrls": [
          "https://polygon-blackberry-testnet.drpc.org/",
          "https://rpc.polygon-blackberry.gelato.digital"
        ],
        "chainId": "0x59d7131",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://polygon-blackberry.gelatoscout.com/"
      },
      {
        "network": "zkEVM Mainnet",
        "rpcUrls": [
          "https://polygon-zkevm.drpc.org",
          "https://zkevm-rpc.com"
        ],
        "chainId": "0x44d",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://zkevm.polygonscan.com/"
      },
      {
        "network": "zkEVM Cardona",
        "rpcUrls": [
          "https://polygon-zkevm-cardona.drpc.org",
          "https://rpc.cardona.zkevm-rpc.com"
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
          "https://real.drpc.org/",
          "https://real-evm.api.onfinality.io/public"
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
          "https://s1.ripple.com:51234",
          "https://ripple.drpc.org"
        ],
        "chainId": "XRP",
        "nativeCurrency": "XRP",
        "blockExplorer": "https://xrpscan.com/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://s.altnet.rippletest.net:51234",
          "https://ripple-testnet.drpc.org"
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
          "https://ronin.drpc.org/",
          "https://api.roninchain.com/rpc"
        ],
        "chainId": "0x7e4",
        "nativeCurrency": "RON",
        "blockExplorer": "https://app.roninchain.com/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://saigon-testnet.roninchain.com/rpc"
        ],
        "chainId": "0x7e5",
        "nativeCurrency": "RON",
        "blockExplorer": "https://saigon-app.roninchain.com/"
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
          "https://public-node.rsk.co"
        ],
        "chainId": "0x1e",
        "nativeCurrency": "RBTC",
        "blockExplorer": "https://explorer.rsk.co"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://rootstock-testnet.drpc.org",
          "https://public-node.testnet.rsk.co"
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
          "https://scroll.drpc.org",
          "https://rpc.scroll.io"
        ],
        "chainId": "0x82750",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://scrollscan.com/"
      },
      {
        "network": "Sepolia Testnet",
        "rpcUrls": [
          "https://scroll-sepolia.drpc.org",
          "https://sepolia-rpc.scroll.io"
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
          "https://www.shibrpc.com",
          "https://rpc.shibrpc.com"
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
          "https://smartbch.fountainhead.cash/mainnet",
          "https://smartbch.greyh.at"
        ],
        "chainId": "10000",
        "nativeCurrency": "SBCH",
        "blockExplorer": "https://smartscout.cash/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://rpc-testnet.smartbch.org"
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
          "https://rpc.ankr.com/solana",
          "https://api.mainnet-beta.solana.com"
        ],
        "chainId": "900",
        "nativeCurrency": "SOL",
        "blockExplorer": "https://explorer.solana.com/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://solana-testnet.drpc.org",
          "https://api.testnet.solana.com"
        ],
        "chainId": "",
        "nativeCurrency": "SOL",
        "blockExplorer": "https://explorer.solana.com/?cluster=testnet"
      },
      {
        "network": "Devnet",
        "rpcUrls": [
          "https://solana-devnet.drpc.org",
          "https://api.devnet.solana.com"
        ],
        "chainId": "901",
        "nativeCurrency": "SOL",
        "blockExplorer": "https://explorer.solana.com/?cluster=devnet"
      }
    ]
  },
  {
    "name": "Sonic",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://sonic.drpc.org",
          "https://mainnet.sonic.org/rpc"
        ],
        "chainId": "0x92",
        "nativeCurrency": "S",
        "blockExplorer": "https://sonicscan.org"
      },
      {
        "network": "Blaze Testnet",
        "rpcUrls": [
          "https://sonic-testnet.drpc.org",
          "https://blaze-testnet.sonic.org/rpc"
        ],
        "chainId": "0xdede",
        "nativeCurrency": "S",
        "blockExplorer": "https://testnet.sonicscan.org"
      }
    ]
  },
  {
    "name": "Stellar",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://horizon.stellar.org"
        ],
        "chainId": "",
        "nativeCurrency": "XLM",
        "blockExplorer": "https://stellarchain.io/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://horizon-testnet.stellar.org"
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
          "https://taiko.drpc.org/",
          "https://rpc.mainnet.taiko.xyz"
        ],
        "chainId": "0x28c58",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://taikoscan.io"
      },
      {
        "network": "Hekla",
        "rpcUrls": [
          "https://taiko-hekla.drpc.org",
          "https://rpc.hekla.taiko.xyz"
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
          "https://mainnet.telos.net/evm",
          "https://rpc1.eu.telos.net/evm"
        ],
        "chainId": "0x28",
        "nativeCurrency": "TLOS",
        "blockExplorer": "https://teloscan.io"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://telos-testnet.drpc.org/",
          "https://testnet.telos.net/evm"
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
        "network": "Mainnet",
        "rpcUrls": [
          "https://mainnet.tezos.marigold.dev"
        ],
        "chainId": "",
        "nativeCurrency": "XTZ",
        "blockExplorer": "https://tzkt.io/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://ghostnet.tezos.marigold.dev"
        ],
        "chainId": "",
        "nativeCurrency": "XTZ",
        "blockExplorer": "https://ghostnet.tzkt.io/"
      }
    ]
  },
  {
    "name": "Thundercore",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://thundercore.drpc.org/",
          "https://mainnet-rpc.thundercore.com"
        ],
        "chainId": "0x6c",
        "nativeCurrency": "TT",
        "blockExplorer": "https://viewblock.io/thundercore"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://thundercore-testnet.drpc.org/",
          "https://testnet-rpc.thundercore.com"
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
          "https://tron.drpc.org",
          "https://api.trongrid.io"
        ],
        "chainId": "0x2b6653dc",
        "nativeCurrency": "TRX",
        "blockExplorer": "https://tronscan.org/"
      },
      {
        "network": "Shasta Testnet",
        "rpcUrls": [
          "https://tron-shasta.drpc.org",
          "https://api.shasta.trongrid.io"
        ],
        "chainId": "0x94a9059e",
        "nativeCurrency": "TRX",
        "blockExplorer": "https://shasta.tronscan.org/"
      },
      {
        "network": "Nile Testnet",
        "rpcUrls": [
          "https://nile.trongrid.io"
        ],
        "chainId": "",
        "nativeCurrency": "TRX",
        "blockExplorer": "https://nile.tronscan.org/"
      }
    ]
  },
  {
    "name": "Ubiq",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://rpc.octano.dev",
          "https://pyrus2.ubiqscan.io"
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
        "network": "Mainnet",
        "rpcUrls": [
          "https://vara.drpc.org",
          "wss://rpc.vara.network"
        ],
        "chainId": "",
        "nativeCurrency": "VARA",
        "blockExplorer": "https://vara.subscan.io/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://vara-testnet.drpc.org",
          "wss://rpc.testnet.vara.network"
        ],
        "chainId": "",
        "nativeCurrency": "VARA",
        "blockExplorer": "https://explorer.vara-network.io/"
      }
    ]
  },
  {
    "name": "Vechain",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://sync-mainnet.vechain.org"
        ],
        "chainId": "100009",
        "nativeCurrency": "VET",
        "blockExplorer": "https://explore.vechain.org/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://sync-testnet.vechain.org"
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
          "https://rpc.xinfin.network"
        ],
        "chainId": "50",
        "nativeCurrency": "XDC",
        "blockExplorer": "https://xdcscan.io"
      },
      {
        "network": "Apothem Testnet",
        "rpcUrls": [
          "https://rpc.apothem.network"
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
          "https://mainnet.lightwalletd.com:9067"
        ],
        "chainId": "ZEC",
        "nativeCurrency": "ZEC",
        "blockExplorer": "https://zcashblockexplorer.com/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://testnet.lightwalletd.com:9067"
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
          "https://zeta-chain.drpc.org/",
          "https://zetachain-evm.blockpi.network/v1/rpc/public"
        ],
        "chainId": "0x1b58",
        "nativeCurrency": "ZETA",
        "blockExplorer": "https://explorer.zetachain.com/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://zeta-chain-testnet.drpc.org",
          "https://zetachain-athens-evm.blockpi.network/v1/rpc/public"
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
          "https://api.zilliqa.com"
        ],
        "chainId": "",
        "nativeCurrency": "ZIL",
        "blockExplorer": "https://viewblock.io/zilliqa"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://dev-api.zilliqa.com"
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
          "https://zksync.drpc.org",
          "https://mainnet.era.zksync.io"
        ],
        "chainId": "0x144",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://explorer.zksync.io/"
      },
      {
        "network": "Sepolia",
        "rpcUrls": [
          "https://zksync-sepolia.drpc.org",
          "https://sepolia.era.zksync.dev"
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
          "https://zora.drpc.org/",
          "https://rpc.zora.co"
        ],
        "chainId": "0x76adf1",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://explorer.zora.energy"
      },
      {
        "network": "Sepolia",
        "rpcUrls": [
          "https://zora-sepolia.drpc.org/",
          "https://sepolia.rpc.zora.co"
        ],
        "chainId": "0x3b9ac9ff",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://sepolia.explorer.zora.energy"
      }
    ]
  },
  {
    "name": "Zircuit",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://zircuit-mainnet.drpc.org",
          "https://rpc.zircuit.com"
        ],
        "chainId": "0x1a46",
        "nativeCurrency": "ZIR",
        "blockExplorer": "https://explorer.zircuit.com"
      },
      {
        "network": "Garfield",
        "rpcUrls": [
          "https://zircuit-garfield-testnet.drpc.org",
          "https://garfield-testnet.zircuit.com"
        ],
        "chainId": "0xbf02",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://explorer.zircuit.com"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://zircuit-testnet.drpc.org",
          "https://testnet.zircuit.com"
        ],
        "chainId": "0xbf03",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://explorer.zircuit.com"
      }
    ]
  },
  {
    "name": "Sophon",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://rpc.sophon.xyz"
        ],
        "chainId": "50104",
        "nativeCurrency": "SOPH",
        "blockExplorer": "https://explorer.sophon.xyz/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://rpc.testnet.sophon.xyz"
        ],
        "chainId": "531050104",
        "nativeCurrency": "SOPH",
        "blockExplorer": "https://explorer.sophon.xyz/"
      }
    ]
  },
  {
    "name": "GOAT Network",
    "networks": [
      {
        "network": "Alpha Mainnet",
        "rpcUrls": [
          "https://goat-mainnet-alpha.drpc.org"
        ],
        "chainId": "0x929",
        "nativeCurrency": "BTC",
        "blockExplorer": "https://explorer.goat.network"
      },
      {
        "network": "Testnet3",
        "rpcUrls": [
          "https://goat-testnet3.drpc.org"
        ],
        "chainId": "0xbeb0",
        "nativeCurrency": "BTC",
        "blockExplorer": ""
      }
    ]
  },
  {
    "name": "Ethereum Beacon",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://eth-beacon-chain.drpc.org/rest/"
        ],
        "chainId": "",
        "nativeCurrency": "ETH",
        "blockExplorer": ""
      },
      {
        "network": "Sepolia",
        "rpcUrls": [
          "https://eth-beacon-chain-sepolia.drpc.org/rest/"
        ],
        "chainId": "",
        "nativeCurrency": "ETH",
        "blockExplorer": ""
      },
      {
        "network": "Holesky",
        "rpcUrls": [
          "https://eth-beacon-chain-holesky.drpc.org/rest/"
        ],
        "chainId": "",
        "nativeCurrency": "ETH",
        "blockExplorer": ""
      }
    ]
  },
  {
    "name": "Mezo",
    "networks": [
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://mezo-testnet.drpc.org",
          "https://rpc.test.mezo.org"
        ],
        "chainId": "0x7b7b",
        "nativeCurrency": "BTC",
        "blockExplorer": "https://explorer.test.mezo.org"
      }
    ]
  },
  {
    "name": "Swell",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://swell.drpc.org",
          "https://rpc.ankr.com/swell",
          "https://rpc.ankr.com/swell"
        ],
        "chainId": "0x783",
        "nativeCurrency": "ETH",
        "blockExplorer": ""
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://swell-testnet.drpc.org"
        ],
        "chainId": "0x784",
        "nativeCurrency": "ETH",
        "blockExplorer": ""
      }
    ]
  },
  {
    "name": "Soneium",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://soneium.drpc.org"
        ],
        "chainId": "0x74c",
        "nativeCurrency": "ETH",
        "blockExplorer": ""
      },
      {
        "network": "Minato Testnet",
        "rpcUrls": [
          "https://soneium-minato.drpc.org"
        ],
        "chainId": "0x79a",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://soneium-minato.blockscout.com"
      }
    ]
  },
  {
    "name": "Lens Network",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://rpc.lens.xyz",
          "https://lens.drpc.org"
        ],
        "chainId": "232",
        "nativeCurrency": "GHO",
        "blockExplorer": "https://explorer.lens.xyz/"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://rpc.testnet.lens.dev",
          "https://lens-testnet.drpc.org"
        ],
        "chainId": "37111",
        "nativeCurrency": "GRASS",
        "blockExplorer": "https://block-explorer.testnet.lens.dev"
      }
    ]
  },
  {
    "name": "Merlin",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://merlin.drpc.org"
        ],
        "chainId": "0x1068",
        "nativeCurrency": "BTC",
        "blockExplorer": ""
      }
    ]
  },
  {
    "name": "SEI",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://sei.drpc.org",
          "https://evm-rpc.sei-apis.com",
          "https://node.histori.xyz/sei-mainnet/8ry9f6t9dct1se2hlagxnd9n2a"
        ],
        "chainId": "1329",
        "nativeCurrency": "SEI",
        "blockExplorer": "https://seitrace.com"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://sei-testnet.drpc.org",
          "https://evm-rpc-testnet.sei-apis.com",
          "https://node.histori.xyz/sei-testnet/8ry9f6t9dct1se2hlagxnd9n2a"
        ],
        "chainId": "1328",
        "nativeCurrency": "SEI",
        "blockExplorer": "https://seitrace.com"
      },
      {
        "network": "Devnet",
        "rpcUrls": [
          "https://sei-devnet.drpc.org",
          "https://evm-rpc.arctic-1.seinetwork.io"
        ],
        "chainId": "713715",
        "nativeCurrency": "SEI",
        "blockExplorer": "https://seistream.app"
      }
    ]
  },
  {
    "name": "Hyperliquid",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://rpc.hyperliquid.xyz/evm",
          "https://hyperliquid.drpc.org"
        ],
        "chainId": "999",
        "nativeCurrency": "HYPE",
        "blockExplorer": "https://app.hyperliquid.xyz/explorer"
      },
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://rpc.hyperliquid-testnet.xyz/evm"
        ],
        "chainId": "998",
        "nativeCurrency": "HYPE",
        "blockExplorer": "https://app.hyperliquid-testnet.xyz/explorer"
      },
    ]
  },
  {
    "name": "0G",
    "networks": [
      {
        "network": "Newton Testnet",
        "rpcUrls": [
          "https://0g-newton-testnet.drpc.org",
          "https://lightnode-json-rpc-0g.grandvalleys.com"
        ],
        "chainId": "16600",
        "nativeCurrency": "A0GI",
        "blockExplorer": "https://chainscan-newton.0g.ai"
      },
      {
        "network": "Galileo Testnet",
        "rpcUrls": [
          "https://0g-galileo-testnet.drpc.org",
          "https://evmrpc-testnet.0g.ai"
        ],
        "chainId": "80087",
        "nativeCurrency": "OG",
        "blockExplorer": "https://chainscan-galileo.0g.ai"
      },
    ]
  },
  {
    "name": "Ozean",
    "networks": [
      {
        "network": "Poseidon Testnet",
        "rpcUrls": [
          "https://ozean-poseidon-testnet.drpc.org",
        ],
        "chainId": "7849306",
        "nativeCurrency": "USDX",
        "blockExplorer": ""
      }
    ]
  },
  {
    "name": "Ink",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://rpc-qnd.inkonchain.com",
          "https://ink.drpc.org"
        ],
        "chainId": "57073",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://explorer.inkonchain.com"
      },
      {
        "network": "Sepolia Testnet",
        "rpcUrls": [
          "https://ink-sepolia.drpc.org",
          "https://rpc-gel-sepolia.inkonchain.com"
        ],
        "chainId": "763373",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://explorer-sepolia.inkonchain.com"
      }
    ]
  },
  {
    "name": "Gravity Alpha",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://rpc.gravity.xyz",
          "https://rpc.ankr.com/gravity"
        ],
        "chainId": "1625",
        "nativeCurrency": "G",
        "blockExplorer": "https://explorer.gravity.xyz/"
      },
      {
        "network": "Sepolia",
        "rpcUrls": [
          "https://rpc-sepolia.gravity.xyz",
          "https://gravity-alpha-sepolia.drpc.org"
        ],
        "chainId": "13505",
        "nativeCurrency": "G",
        "blockExplorer": "https://explorer-sepolia.gravity.xyz"
      }
    ]
  },
  {
    "name": "KUB",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://rpc.bitkubchain.io"
        ],
        "chainId": "96",
        "nativeCurrency": "KUB",
        "blockExplorer": "https://www.kubscan.com/"
      },
      {
        "network": "Sepolia",
        "rpcUrls": [
          "https://rpc-testnet.bitkubchain.io"
        ],
        "chainId": "25925",
        "nativeCurrency": "tKUB",
        "blockExplorer": "https://testnet.kubscan.com/"
      }
    ]
  },
  {
    "name": "Superseed",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://mainnet.superseed.xyz",
          "https://superseed.drpc.org"
        ],
        "chainId": "5330",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://explorer.superseed.xyz/"
      },
      {
        "network": "Sepolia Testnet",
        "rpcUrls": [
          "https://sepolia.superseed.xyz",
          "https://superseed-sepolia.drpc.org"
        ],
        "chainId": "53302",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://sepolia-explorer.superseed.xyz/"
      }
    ]
  },
  {
    "name": "Hemi",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://rpc.hemi.network/rpc",
          "https://hemi.drpc.org"
        ],
        "chainId": "43111",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://explorer.hemi.xyz/"
      },
      {
        "network": "Sepolia Testnet",
        "rpcUrls": [
          "https://testnet.rpc.hemi.network/rpc",
          "https://hemi-testnet.drpc.org"
        ],
        "chainId": "743111",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://testnet.explorer.hemi.xyz/"
      }
    ]
  },
  {
    "name": "MegaETH",
    "networks": [
      {
        "network": "Testnet",
        "rpcUrls": [
          "https://megaeth-testnet.drpc.org"
        ],
        "chainId": "6342",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://megaexplorer.xyz"
      }
    ]
  },
  {
    "name": "Morph",
    "networks": [
      {
        "network": "Mainnet",
        "rpcUrls": [
          "https://rpc.morphl2.io",
          "https://rpc-quicknode.morphl2.io"
        ],
        "chainId": "2818",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://explorer.morphl2.io/"
      },
      {
        "network": "Holesky Testnet",
        "rpcUrls": [
          "https://rpc-holesky.morphl2.io",
          "https://rpc-quicknode-holesky.morphl2.io"
        ],
        "chainId": "2810",
        "nativeCurrency": "ETH",
        "blockExplorer": "https://explorer-holesky.morphl2.io/"
      }
    ]
  },
];module.exports = blockchains;

  
