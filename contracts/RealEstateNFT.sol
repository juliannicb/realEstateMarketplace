// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract RealEstateNFT is ERC721URIStorage, Ownable {
    uint256 public tokenCount;

    constructor() ERC721("RealEstateNFT", "REALESTATE") {}

    function mint(string memory _tokenURI) public onlyOwner returns (uint256) {
        tokenCount++;
        _mint(msg.sender, tokenCount);
        _setTokenURI(tokenCount, _tokenURI);
        return tokenCount;
    }
}
