const RealEstateNFT = artifacts.require("RealEstateNFT");

contract("RealEstateNFT", (accounts) => {
  it("should mint a new token", async () => {
    const instance = await RealEstateNFT.deployed();
    const tokenURI = "https://example.com/property/1";
    const tokenId = await instance.mint(tokenURI, { from: accounts[0] });

    const owner = await instance.ownerOf(tokenId.logs[0].args.tokenId.toString());
    assert.equal(owner, accounts[0]);
  });
});
