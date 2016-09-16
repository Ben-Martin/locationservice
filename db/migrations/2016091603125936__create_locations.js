module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateLocations extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016091603125936;
    }

    up() {

      return [
        this.createTable("locations", [{"name":"device_id","type":"string"},{"name":"latitude","type":"string"},{"name":"longitude","type":"string"},{"name":"speed","type":"int"},{"name":"course","type":"int"},{"name":"altitude","type":"int"},{"name":"timestamp","type":"datetime"},{"name":"true_heading","type":"int"},{"name":"magnetic_heading","type":"int"},{"name":"heading_accuracy","type":"int"}])
      ];

    }

    down() {

      return [
        this.dropTable("locations")
      ];

    }

  }

  return CreateLocations;

})();
