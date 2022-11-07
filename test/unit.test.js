const { assert, expect } = require("chai");
const { hexStripZeros } = require("ethers/lib/utils");
const { network, getNamedAccounts, deployments, ethers } = require("hardhat");
const {
  developmentChains,
  INITIAL_SUPPLY,
  networkConfig,
} = require("../helper_hardhat");

// describe("Token contract", function () {
//     it("Deployment should assign the total supply of tokens to the owner", async function () {
//       const [owner] = await ethers.getSigners();
  
//       const Token = await ethers.getContractFactory("OurToken");
  
//       const hardhatToken = await Token.deploy();
  
//       const ownerBalance = await hardhatToken.balanceOf(owner.address);
//       expect(await hardhatToken.totalSupply()).to.equal(INITIAL_SUPPLY);
//     });
!developmentChains.includes(network.name)
  ? describe.skip
  : describe("OurToken Unit Test", function() {
      //Multipler is used to make reading the math easier because of the 18 decimal points
      const multiplier = 10 ** 18;
      let ourToken, deployer, user1, owner, addr1,ercToken;
      beforeEach(async function() {
    //     const accounts = await getNamedAccounts();
    //     deployer = accounts.deployer;
    //     //const [deployer] = accounts.deployer;
    //     user1 = accounts.user1;
    //     await deployments.fixture(["all"]);
    //     //ourToken = await eth
    //     ourToken = await ethers.getContract("OurToken",deployer);
    const ourToken = await hre.ethers.getContractFactory('OurToken');
    ercToken = await ourToken.deploy();
    await ercToken.deployed();
    [owner,addr1] = await ethers.getSigners();

     });

    //   describe("constructor", () => {
    //     it("Should have correct INITIAL_SUPPLY of token ", async () => {
    //       const totalSupply = await ercToken.totalSupply();
    //       assert.equal(totalSupply.toString(), INITIAL_SUPPLY);
    //     });
    


        describe("Token contract", function () {
            it("Deployment should assign the total supply of tokens to the owner", async function () {

             const decimals = await ercToken.decimals();
             const balance = await ercToken.balanceOf(owner.address)
             console.log(ethers.utils.formatEther(balance));

    })

})
        });

