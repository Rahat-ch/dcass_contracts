import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.9",
  networks: {
    mumbai: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    matic: {
      url: "https://rpc.ankr.com/polygon",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    linea: {
      url: `https://rpc.goerli.linea.build/`,
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    },
    scrollTestnet: {
      url: "https://alpha-rpc.scroll.io/l2",
      accounts: process.env.SCROLL_PRIVATE_KEY ? [process.env.SCROLL_PRIVATE_KEY] : [],
    },
    taiko: {
      url:"https://rpc.a2.taiko.xyz",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
    }
  },
  etherscan: {
    apiKey: {
      polygonMumbai: process.env.POLYSCAN_API_KEY ?? "",
      polygon: process.env.POLYSCAN_API_KEY ?? "",
      linea: process.env.ETHERSCAN_API_KEY ?? "",
      scrollTestnet: 'abc',
      taik: '',
    },
    customChains: [
      {
        network: "linea",
        chainId: 59140,
        urls: {
          apiURL: "https://explorer.goerli.linea.build/api",
          browserURL: "https://explorer.goerli.linea.build/"
        }
      },
      {
        network: 'scrollTestnet',
        chainId: 534353,
        urls: {
          apiURL: 'https://blockscout.scroll.io/api',
          browserURL: 'https://blockscout.scroll.io/',
        },
      },
      {
        network: 'taiko',
        chainId: 167002,
        urls: {
          apiURL: '?',
          browserURL: 'https://l2explorer.hackathon.taiko.xyz',
        },
      }
    ]
  },
};

export default config;