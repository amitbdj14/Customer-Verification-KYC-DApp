var Integers = artifacts.require("./Integers.sol");
var Verification = artifacts.require("./Verification.sol");


module.exports = function (deployer) {
  deployer.deploy(Integers).then(() => {
      deployer.deploy(Verification);
  });
  deployer.link(Integers, Verification);
};
