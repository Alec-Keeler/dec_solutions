const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app');

chai.use(chaiHttp);
const expect = chai.expect;

const { resetDB, seedAllDB } = require('./utils/test-utils');

describe('Step 2: Implement named scopes to their respective routes', () => {
    before(async function () {
      await resetDB();
      return seedAllDB();
    });

    describe('GET /instruments/keyboard', () => {
        it('get instruments/keyboard query only returns keyboards', async () => {
            return await chai.request(server)
                .get('/instruments/keyboard')
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.eq(6);

                    for (const instrument of res.body) {
                        expect(instrument).to.have.own.property('id');
                        expect(instrument).to.have.own.property('name');
                        expect(instrument).to.have.own.property('type');
                        expect(instrument).to.have.own.property('storeId');
                        expect(instrument.type).to.equal('keyboard');
                    }

                    expect(res.body.map(instrument => instrument.type))
                        .to.not.include("string", "woodwind", "percussion", "brass wind");
            });
        });

        it('get instruments/keyboard query excludes createdAt and updatedAt', async () => {
            return await chai.request(server)
                .get('/instruments/keyboard')
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;

                    for (const instrument of res.body) {
                        expect(instrument).not.to.have.own.property('createdAt');
                        expect(instrument).not.to.have.own.property('updatedAt');
                    }
            });
        });
    });

    describe('GET /instruments/string', () => {
        it('get instruments/string query only returns strings', async () => {
            return await chai.request(server)
                .get('/instruments/string')
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.eq(14);

                    for (const instrument of res.body) {
                        expect(instrument).to.have.own.property('id');
                        expect(instrument).to.have.own.property('name');
                        expect(instrument).to.have.own.property('type');
                        expect(instrument).to.have.own.property('storeId');
                        expect(instrument.type).to.equal('string');
                    }

                    expect(res.body.map(instrument => instrument.type))
                        .to.not.include("keyboard", "woodwind", "brass wind", "percussion");
            });
        });

        it('get instruments/string query excludes createdAt and updatedAt', async () => {
            return await chai.request(server)
                .get('/instruments/string')
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;

                    for (const instrument of res.body) {
                        expect(instrument).not.to.have.own.property('createdAt');
                        expect(instrument).not.to.have.own.property('updatedAt');
                    }
            });
        });
    });

    describe('GET /instruments/woodwind', () => {
        it('get instruments/woodwind query only returns woodwinds', async () => {
            return await chai.request(server)
                .get('/instruments/woodwind')
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.eq(6);

                    for (const instrument of res.body) {
                        expect(instrument).to.have.own.property('id');
                        expect(instrument).to.have.own.property('name');
                        expect(instrument).to.have.own.property('type');
                        expect(instrument).to.have.own.property('storeId');
                        expect(instrument.type).to.equal('woodwind');
                    }

                    expect(res.body.map(instrument => instrument.type))
                        .to.not.include("keyboard", "string", "percussion", "brass wind");
            });
        });

        it('get instruments/woodwind query excludes createdAt and updatedAt', async () => {
            return await chai.request(server)
                .get('/instruments/woodwind')
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;

                    for (const instrument of res.body) {
                        expect(instrument).not.to.have.own.property('createdAt');
                        expect(instrument).not.to.have.own.property('updatedAt');
                    }
            });
        });
    });
});
