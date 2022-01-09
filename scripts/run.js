const main = async () => {
  // compiled contracts and generates necessary files under artifacts directory
  const nftContractFactory = await hre.ethers.getContractFactory("MyEpicNFT");
  // deploys the contract on the temporary local blockchain
  const nftContract = await nftContractFactory.deploy();
  // we will actally wait until the contract is official mined and deployed
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  let txn = await nftContract.makeAnEpicNFT();
  await txn.wait();

  txn = await nftContract.makeAnEpicNFT();
  await txn.wait();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
