const HFTCrowdsale = artifacts.require('./HFTCrowdsale.sol');

module.exports = (deployer) => {
    //http://www.onlineconversion.com/unix_time.htm
    var owner = "0x55Ecc562c95f19488943c7a7fD1FC3766594D920";
    var startTime = 1522022400; //Mon, 26 Mar 2018 00:00:00 GMT
    var endTime   = 1527551999; //Mon, 28 May 2018 23:59:59 GMT

    deployer.deploy(HFTCrowdsale, owner, startTime, endTime);

};
