// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../node_modules/hardhat/console.sol";

contract Coffee{
    address public owner;
    mapping(address=>uint) public coffeeBalance;
    constructor(){
        owner=msg.sender;
        coffeeBalance[address(this)]=100;
    }


    function Coffee_Balance() public view returns(uint){
        return coffeeBalance[address(msg.sender)];
    }

    function Purchase_Coffee(uint amount) public {
        
        require(coffeeBalance[address(this)]>amount,"Not enough coffee, need to restock"); 
        // require(msg.value>=amount*2 ether,"Must pay 2 ether per coffee");
        coffeeBalance[address(this)]=coffeeBalance[address(this)]-amount;
        coffeeBalance[msg.sender]=coffeeBalance[msg.sender]+amount;
        console.log("YOU HAVE PURCHASED COFFEE!!!!");
    }


    function Restock_Coffee(uint amount) public{
        //require(msg.sender==owner, "Only owner can restock the coffee machine");
        coffeeBalance[address(this)]=coffeeBalance[address(this)]+amount;
        console.log("Coffee machine has been restocked.");
    }

}