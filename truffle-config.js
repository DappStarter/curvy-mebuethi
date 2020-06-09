require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture strategy razor mean protect inner drive equal gate'; 
let testAccounts = [
"0xaf4fb69270023e7c93621ea0bff2e02ab9c1b7358fb9ed5140f1ea6dce8afc59",
"0x4a87bd3345136cf9778a89f9ec3dcf7094343ebd76570f1059c06348e8237b36",
"0x4462ad9177b9c1c7d4f817d064d0ecf6f2f1312def6c09b067c7611358fd2b17",
"0x8e674e3ea30d8b1397654024a3836926ad75e2e754cd95fe2d61c3b69297cd62",
"0xf9270b88cb4da6ca249ccc37af3c765f09e16972a431abe1a624f34d92a36564",
"0x6fa73d79a831ef25ff744d8c88ad21d27c001bb5309b46bd3c51f31134a6b019",
"0xc6e0d98d36f42e71a9abe6546bfd3f1aa723c5f27850e970d9f191dad7bcd960",
"0xecaf9ededf648a8ada617047e5636d95f25740a10d2921631716e7f7770c077e",
"0x72e32458d7d9bf443a9d98703ca579350b5acda9ed2a25a4d6e25752a4d86d18",
"0x2b32ca81a21249249910bd04ca893e8e0bdc31d18fb8c252a35307456f3825f8"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
