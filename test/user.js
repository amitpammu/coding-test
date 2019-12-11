//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let User = require('../users/models/users.model');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');

chai.use(chaiHttp);

//Our parent block
describe('Users', () => {
    beforeEach((done) => { //Before each test we empty the database
        User.remove({}, (err) => { 
           done();           
        });        
    });
/*
  * Test the /GET route
  */
  describe('/GET users', () => {
      it('it should GET all the users', (done) => {
        
        chai.request(server)
            .get('/users')
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI1ZGYwYWFjMjZkYjQ4NWFlYWFkMmI4YmYiLCJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsInBlcm1pc3Npb25MZXZlbCI6MiwicHJvdmlkZXIiOiJlbWFpbCIsIm5hbWUiOiJBZG1pbiBVc2VyIiwicmVmcmVzaEtleSI6IjAyTG1OUzlXMXVmR3ZPOGRLSEtleEE9PSIsImlhdCI6MTU3NjA1MzQ1MH0.cmwwHnevd_-YAp4wcXKDt1c1uzMu2B6cGjym-yDyqYU') // Works.
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.should.be.a('array');
                  res.body.length.should.be.eql(0);
              done();
            });
      });
  });

});