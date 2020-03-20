/** !
 * AVL tree
 * Copyright(c) 2020 Vo Van Duc
 * ISC licensed
 */
'use strict';

/**
 * @description Status use to store status of Node
 * @private
 *
 */
class Status {
  /**
     * @static
     */
  static get LH() {
    return -1;
  };

  /**
     * @static
     */
  static get BL() {
    return 0;
  };

  /**
     * @static
     */
  static get RH() {
    return 1;
  };

  /**
     * @constructor
     */
  constructor() {
    this._status = 0;
    this.setBalance();
  }

  /**
     * @description set left high status to Status
     */
  setLeftHigh() {
    this._status = Status.LH;
  }

  /**
     * @description set right high satus
     */
  setRightHigh() {
    this._status = Status.RH;
  }

  /**
     * @description set balance satus
     */
  setBalance() {
    this._status = Status.BL;
  }

  /**
     * @description check is left high
     * @return {boolean}
     */
  get isLeftHigh() {
    return this._status == Status.LH;
  }

  /**
     * @description check is right high
     * @return {boolean}
     */
  get isRightHigh() {
    return this._status == Status.RH;
  }

  /**
     * @description check is right high
     * @return {boolean}
     */
  get isBalance() {
    return this._status == Status.BL;
  }
};

module.exports = Status;
