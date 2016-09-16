module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateDevices extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016091603100878;
    }

    up() {

      return [
        this.createTable("devices", [{"name":"name","type":"string"},{"name":"system_name","type":"string"},{"name":"system_version","type":"string"},{"name":"device_model","type":"string"},{"name":"device_id","type":"string"}])
      ];

    }

    down() {

      return [
        this.dropTable("devices")
      ];

    }

  }

  return CreateDevices;

})();
