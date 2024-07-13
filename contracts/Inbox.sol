pragma solidity ^0.4.17;
// linter warnings (red underline) about pragma version can igonored!

// contract code will go here




contract Inbox {
    string public message;

    function Inbox(string initialMessage) public {
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }

    function getMessage() public view returns (string) {
        return message;
    }

   // function getMessage() public view returns (string) {
    //     return message;
    // }

    //     function doMath(uint a, uint b) {
    //         a + b;
    //         a - b;
    //         a * b;
    //         a === 0;
    // }
}