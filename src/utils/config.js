// Configuración del contrato SonetyoNFT desplegado en Tanenbaum
export const CONTRACT_ADDRESS = "0x136aC7D8D981f013524718B46AbB83d99c265f3f";

// ABI mínima de SonetyoNFT (solo funciones que usamos)
export const CONTRACT_ABI = [
  "function mint(bytes32 audioHash, string uri) external returns (uint256)",
  "function verify(uint256 tokenId) external",
  "function getProof(uint256 tokenId) external view returns (bytes32 audioHash,uint256 timestamp,address creator,uint256 verificationCount)",
  "function isHashRegistered(bytes32 audioHash) external view returns (bool)",
  "function totalSupply() external view returns (uint256)",
  "event SonetyoMinted(uint256 indexed tokenId, address indexed creator, bytes32 audioHash, uint256 timestamp)",
  "event SonetyoVerified(uint256 indexed tokenId, address indexed verifier, uint256 newVerificationCount)"
];

// Configuración de red Syscoin Tanenbaum
export const TANENBAUM_CONFIG = {
  chainId: "0x1644", // 5700 en hex
  chainName: "Syscoin Tanenbaum Testnet",
  rpcUrls: ["https://rpc.tanenbaum.io"],
  nativeCurrency: {
    name: "tSYS",
    symbol: "tSYS",
    decimals: 18
  },
  blockExplorerUrls: ["https://explorer.tanenbaum.io"]
};

export const EXPLORER_BASE_URL = "https://explorer.tanenbaum.io";
