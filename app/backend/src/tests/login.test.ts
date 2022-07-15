import * as sinon from 'sinon';
import * as chai from 'chai';

import chaiHttp = require('chai-http');

import { app } from '../app';

import Users from '../database/models/UsersModel';

chai.use(chaiHttp);
const { expect } = chai;

const mock = {
  id: 1,
  username: 'admin',
  role: 'admin',
  password: '$2a$08$xi.Hxk1czAO0nZR..B393u10aED0RQ1N3PAEXQ7HxtLjKPEZBu.PW',
  email: 'admin@admin.com'
};

let UsersStub: sinon.SinonStub;

describe('Ao fazer uma requisição POST à rota /login', () => {
  beforeEach(function() {
    UsersStub = sinon.stub(Users, 'findOne');
  });
  afterEach(() => {
    UsersStub.restore();
  })
  it('sem um email, recebe o status 400', async () => {
    UsersStub.resolves(undefined);
    const chaiHttpResponse = await chai.request(app).post('/login')
    .send({ password: 'secret_admin' })

    expect(chaiHttpResponse.status).to.be.equal(400);
  })
  it('sem um password, recebe o status 400', async () => {
    UsersStub.resolves(undefined);
    const chaiHttpResponse = await chai.request(app).post('/login')
    .send({ email: 'admin@admin.com' })

    expect(chaiHttpResponse.status).to.be.equal(400);
  })
});