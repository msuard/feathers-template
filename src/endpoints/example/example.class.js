class Service {

  constructor (app, options) {
    this.options = options || {};
    this.app = app;

  }

  async create(params) {

  }

}

module.exports = function (app, options) {
  return new Service(app, options);
};

module.exports.Service = Service;
