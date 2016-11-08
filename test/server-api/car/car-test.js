const SERVER = 'http://127.0.0.1:7500';

describe('Cars', function () {

  var token;

  before(function (done) {
    chai.request(SERVER).
      post('/api/autenticado').
      field('email', 'asdasd@asd.com').
      field('password', '4sg4df45gsdf5s4d').
      end(function (err, res) {
        token = '12345678';
        done();
      });
  });

  it('Get basic data', function (done) {

    chai.request(SERVER).
      get('/api/cars').
      set('X-TOKEN', token).
      end(function (err, res) {

        expect(err).to.be.falsy;

        expect(res.status).to.equal(200);
        expect(res.body).to.be.a('array');

        res.body.forEach(function (car) {
          expect(car).to.be.a('object');
          expect(car).to.have.property('id').that.is.a('string');
          expect(car).to.have.property('name').that.is.a('string');
          expect(car).to.have.property('price').that.is.a('number');
          expect(car).to.have.property('brand').that.is.a('string');
        });

        done();
      });
  });
});
