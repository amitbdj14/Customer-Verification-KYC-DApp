module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    recordskeeper: {
      host: "35.172.1.247",
      port: 7895,
      network_id: "*" // Match any network id
    }
  }
};
