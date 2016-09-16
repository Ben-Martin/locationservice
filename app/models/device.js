module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class Device extends Nodal.Model {}

  Device.setDatabase(Nodal.require('db/main.js'));
  Device.setSchema(Nodal.my.Schema.models.Device);

  return Device;

})();
