const assert = require("assert");
const ganache = require("ganache");
const { Web3 } = require("web3");
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile");

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

let inbox;

const INITIAL_STRING = "Hi there!";
const INITIAL_STRING1 = "Hello there";

beforeEach(async () => {
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts();
  // .then(fetchedAccounts => {
  // console.log(fetchedAccounts)
  // })

  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ["Hi there!"] })
    .send({ from: accounts[0], gas: "1000000" });

  //Use one of those accounts to deploy the contract
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    assert.ok(inbox.options.address);
  });

  it("has a default message", async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_STRING);
  });
  it("can change the message", async () => {
    await inbox.methods.setMessage("Hello there").send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_STRING1);
  });
});
