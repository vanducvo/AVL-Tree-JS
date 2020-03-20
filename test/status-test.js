const {describe, it} = require('mocha');
const {expect} = require('chai');
const Status = require('../src/status');

describe('Test For: Status Class', function() {
  describe('Test Init Status', function(){
    it('shoud be balance when init - isBalance should be true', function() {
      const status = new Status();
      expect(status.isBalance).is.true;
    });
  
    it('shoud be balance when init - isLeftHigh should be false', function() {
      const status = new Status();
      expect(status.isLeftHigh).is.false;
    });
  
    it('shoud be balance when init - isRightHigh shous be false', function() {
      const status = new Status();
      expect(status.isRightHigh).is.false;
    });
  });
 
  describe('Test Change Status', function() {
    it('shoud be left when set left - isBalance shoud be false', function() {
      const status = new Status();
      status.setLeftHigh();
      expect(status.isBalance).is.false;
    });
  
    it('shoud be left when set left - isLeftHigh shoud be true', function() {
      const status = new Status();
      status.setLeftHigh();
      expect(status.isLeftHigh).is.true;
    });
  
    it('shoud be left when set left - isRightHigh shoud be false', function() {
      const status = new Status();
      status.setLeftHigh();
      expect(status.isRightHigh).is.false;
    });
  
    it('shoud be left when set right - isBalance shoud be false', function() {
      const status = new Status();
      status.setRightHigh();
      expect(status.isBalance).is.false;
    });
  
    it('shoud be left when set right - isLeftHigh shoud be false', function() {
      const status = new Status();
      status.setRightHigh();
      expect(status.isLeftHigh).is.false;
    });
  
    it('shoud be left when set right - isRightHigh shoud be true', function() {
      const status = new Status();
      status.setRightHigh();
      expect(status.isRightHigh).is.true;
    });
  
    it('shoud be left when set balnace - isBalance shoud be true', function() {
      const status = new Status();
      status.setRightHigh();
      status.setBalance();
      expect(status.isBalance).is.true;
    });
  
    it('shoud be left when set balnace - isLeftHigh shoud be false', function() {
      const status = new Status();
      status.setRightHigh();
      status.setBalance();
      expect(status.isLeftHigh).is.false;
    });
  
    it('shoud be left when set balnace - isRightHigh shoud be false', function() {
      const status = new Status();
      status.setRightHigh();
      status.setBalance();
      expect(status.isRightHigh).is.false;
    });
  });
});
