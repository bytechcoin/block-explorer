var api = 'http://127.0.0.1:11127';
var donationAddress = "";
var blockTargetInterval = 120; // enter the block interval in seconds
var coinUnits = 100;  // enter in the amount of atomic units in 1 coin, eg. 100 techs = 1 bytc
var totalSupply =  100000000000000; // enter the total supply in atomic units
var symbol = 'bytc'; // enter the coin's ticker
var refreshDelay = 30000;

// pools stats by MainCoins
var networkStat = {
 "bytc": [
	["pool.bytechcoin.com", "http://pool.bytechcoin.com:8117"],
 ]
};

var networkStat2 = {
    "bytc": [
	[""]
 ]
};
