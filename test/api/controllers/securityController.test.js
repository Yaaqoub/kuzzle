var
  q = require('q'),
  should = require('should'),
  params = require('rc')('kuzzle'),
  Kuzzle = require.main.require('lib/api/Kuzzle'),
  RequestObject = require.main.require('lib/api/core/models/requestObject'),
  ResponseObject = require.main.require('lib/api/core/models/responseObject');

describe('Test: security controller', function () {
  var
    kuzzle;

  before(function (done) {
    kuzzle = new Kuzzle();
    kuzzle.start(params, {dummy: true})
      .then(function () {
        kuzzle.repositories.role.validateAndSaveRole = role => {
          return q({
            _index: '%kuzzle',
            _type: 'roles',
            _id: role._id,
            created: true
          });
        };

        done();
      });
  });

  it('should resolve to a responseObject on a putRole call', done => {
    kuzzle.funnel.security.putRole(new RequestObject({
        body: { _id: 'test', indexes: {} }
      }))
      .then(result => {
        should(result).be.an.instanceOf(ResponseObject);
        should(result.data.body._id).be.exactly('test');
        done();
      })
      .catch(error => {
        done(error);
      });
  });


});