

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    recordskeeper:{
      host: "35.172.1.247",
      port: 7895,
      network_id: '1234',
      from:'121TA9XY5U5RfLrfdaMHe8d7es7MmmktBasjCH'
    },
    
  }
};
