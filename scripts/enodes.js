'use strict';

var Enode = require('./enode');

enodes = new Map;

enodes.import = function(json_nodes){
  json_nodes.forEach(n => {
    node = new Enode(n)
    this.set(n.id, node)
  })
  return this
}

Enodes = enodes

module.exports = Enodes;
