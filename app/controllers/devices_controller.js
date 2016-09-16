module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Device = Nodal.require('app/models/device.js');

  class DevicesController extends Nodal.Controller {

    index() {

      Device.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      Device.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Device.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      Device.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Device.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return DevicesController;

})();
