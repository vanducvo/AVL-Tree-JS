const {describe, it} = require('mocha');
const {expect} = require('chai');
const Node = require('../src/node');
const Status = require('../src/status');
const CustomError = require('../src/error');

describe('Test For: Node', function(){
    describe('Test Init Node', function(){
        it('should have left be null', function(){
            let node = new Node(1);
            expect(node.left).is.null;
        });

        it('should have right be null', function(){
            let node = new Node(1);
            expect(node.right).is.null;
        });

        it('should have status', function(){
            let node = new Node(1);
            expect(node.status).is.instanceof(Status);
        });

        it('should have value', function(){
            let node = new Node(1);
            expect(node.value).is.equal(1);
        });
    });

    describe('Test Change Node', function(){
        it('shoud left change when set', function(){
            let left = new Node(1);
            let node = new Node(2);
            node.left = left;
            expect(node.left).is.equal(left);
        });

        it('shoud right change when set', function(){
            let right = new Node(3);
            let node = new Node(2);
            node.right = right;
            expect(node.right).is.equal(right);
        });

        it('shoud throw exception when set left not valid', function(){
            let node = new Node(0);
            try {
                node.left = 1;
            } catch (err){
                expect(err).is.instanceof(CustomError.TypeMustIsNode);
            }
        });

        it('shoud throw exception when set right not valid', function(){
            let node = new Node(0);
            try {
                node.right = 1;
            } catch (err){
                expect(err).is.instanceof(CustomError.TypeMustIsNode);
            }
        });
    });
});