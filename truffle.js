module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    recordskeeper:{
      provider: function() {
        return new HDWalletProvider(mnemonic, "http://35.170.155.89:8378/");
      },
      network_id: '*',
    }
  }
};
