/** !
 * AVL tree
 * Copyright(c) 2020 Vo Van Duc
 * ISC licensed
 */
'use strict';

/**
 * Module Dependencies
 */
const NodeError = require('./error');
const Status = require('./status');

/**
 * @private
 */
class Node {
  /**
    * @constructor
    * @param {*} value
    * @description create node with value param and left, right is null
    */
  constructor(value) {
    this._left = null;
    this._right = null;
    this.value = value;
    this._status = new Status();
  }

  /**
    * @description get left node
    * @return {Node}
    */
  get left() {
    return this._left;
  }

  /**
    * @get set left node
    * @param {Node} node
    */
  set left(node) {
    if (node instanceof Node) {
      this._left = node;
    } else {
      throw new NodeError.TypeMustIsNode();
    }
  }

  /**
    * @description get right node
    * @return {Node}
    */
  get right() {
    return this._right;
  }

  /**
    * @description set right node
    * @param {Node} node
    */
  set right(node) {
    if (node instanceof Node) {
      this._right = node;
    } else {
      throw new NodeError.TypeMustIsNode();
    }
  }
  /**
    * @description get status
    * @return {Status}
    */
  get status() {
    return this._status;
  }
}

module.exports = Node;
