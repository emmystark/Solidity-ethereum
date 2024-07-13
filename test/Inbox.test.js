const assert = require("assert");
const ganache = require("ganache");
const { Web3 } = require("web3");
const web3 = new Web3(ganache.provider());

// updated ganache and web3 imports added for convenience

// contract test code will go here

class Car {
  park() {
    return "stopped";
  }

  drive() {
    return "vroom";
  }
}

describe('Car Class', ()=> {
    it('can park', ()=> {
        const car = new Car();
        assert.equal(car.park(), 'sto09pped');
    });
});