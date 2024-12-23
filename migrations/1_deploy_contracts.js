const RealEstateNFT = artifacts.require("RealEstateNFT");

module.exports = function (deployer) {
  deployer.deploy(RealEstateNFT);
};
