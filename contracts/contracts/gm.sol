// SPDX-License-Identifier: MIT
// OpenZeppelin Contracts (last updated v4.6.0) (utils/math/SafeMath.sol)

pragma solidity ^0.8.0;

contract Gm {
  function getGM() public view returns (string memory) {
    uint8 h = uint8((block.timestamp / 60 / 60) % 24);
    if(h >= 6 && h <= 12) return "GM GM, Say it back UwU";
  }
}