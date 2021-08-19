require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clog swift suggest firm crater remind artwork half knee bone gift'; 
let testAccounts = [
"0x92aebdd941fdbc1cc048b450ae8f5070d230a0806aaa831704c39bcca05abc35",
"0xef4d918dd699bbb62207139512821f26d5ef0aada3dbc6f843238e5f08a63eaa",
"0x8acecaf4fb39ad4c5811e10842ef547f6e0c857fb25ef58008445fccc193011f",
"0x3a92590a2c314becbf25b6374a107f6f726a4bc50c9fdab23ac85a5ea31e04a7",
"0xbd3d29d9e721c62c56f57d5577dca26857b8ed53496d41d3524fd33f17584bf0",
"0x76884ebbcd954f33038ee405ba696a749f43a70b6a78da23550b317925e2087d",
"0x2f9ef45c7399731105730fc387d6f61c9f58e23e7e54ead37d4e75880afe5dc0",
"0x876b284db54e2e4de078855e228c4aa2edcbb781fed384f85aa80be74f810090",
"0xd27004d28af893262646b35fbf22c1b1f30b71976c3b9e414b3b313ba1bc10a0",
"0x25e7144d4a611518fb408e455ed03abc35ebbaca0744a4d67c7e0dd92ffcc6ad"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


