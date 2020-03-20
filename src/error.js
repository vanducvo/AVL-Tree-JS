/** !
 * AVL tree
 * Copyright(c) 2020 Vo Van Duc
 * ISC licensed
 */
'use strict';

/**
 * @private
 */
class TypeMustIsNode extends TypeError {
  /**
   * @constructor
   */
  constructor() {
    super('node must type of Node');
  }
}

module.exports.TypeMustIsNode = TypeMustIsNode;
