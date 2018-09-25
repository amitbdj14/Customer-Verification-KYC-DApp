pragma solidity ^0.4.24;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/Verification.sol";


contract TestVerification {
    Verification verification = Verification(DeployedAddresses.Verification());

    function testAddCustomer() public {
        String signature = verification.addCustomerSignature(1122, "test");
        String expected = "test";
        Assert.equal(signature, expected, "Signature should match with Test");
    }

    function testGetCustomerSignature() public {
        String signature = verification.getCustomerSignature(1122);
        String expected = "test";
        Assert.equal(signature, expected, "Signature should match with Test");
    }

    function testVerifyCustomerSignature() public {
        String signature = verification.verifyCustomerSignature("Verify Customer Signature", "0x", "test");
        String expected = "test";
        Assert.equal(signature, expected, "Signature should match with Test");
    }
    
}


