const assert = require("assert");
const ganache = require("ganache");
const { Web3 } = require("web3");
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile')

// updated ganache and web3 imports added for convenience

// contract test code will go here

// class Car {
//   park() {
//     return "stopped";
//   }

//   drive() {
//     return "vroom";
//   }
// }

// let car;

// beforeEach(()=> {
//     car = new Car();
// })


// describe("Car Class", () => {
// //   const car = new Car();
//     it("can park", () => {
//         assert.equal(car.park(), "stopped");
//     });

//     it("can drive", () => {
//         // const car = new Car();
//         assert.equal(car.drive(), "vroom");
//     });
// });

let accounts;

let inbox


beforeEach(async ()=> {
    //Get a list of all accounts
    accounts = await web3.eth.getAccounts()
    // .then(fetchedAccounts => {
        // console.log(fetchedAccounts)
    // })

    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({data: bytecode, arguments: ['Hi there!']})
    .send({from: accounts[0], gas: '1000000'})

    //Use one of those accounts to deploy the contract
})

describe('Inbox', ()=> {
    it('deploys a contract', ()=> {})
    console.log(inbox)
})