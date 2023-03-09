const chai = require("chai");
let chaiHttp = require("chai-http");
let chaiJsonSchema = require('chai-json-schema');
let server = require("../app");
chai.use(chaiHttp);
chai.use(chaiJsonSchema);
const expect = chai.expect;

const { resetDB, seedAllDB } = require("./utils/test-utils");

describe("Step #1 Specs", () => {
  before(async function () {
    await resetDB();
    return seedAllDB();
  });

  describe("GET /toys-summary", () => {
    it("returns the count, min price, max price, and sum of the price of all toys", async () => {
      await chai
        .request(server)
        .get("/toys-summary")
        .then(res => {
          expect(res).to.have.status(200);
          expect(res).to.be.json;
          const schema = {
            type: 'object',
            required: ['count', 'minPrice', 'maxPrice', 'sumPrice'],
            properties: {
              count: {
                type: 'number',
                enum: [10056]
              },
              minPrice: {
                type: 'number',
                enum: [1]
              },
              maxPrice: {
                type: 'number',
                enum: [100]
              },
              sumPrice: {
                type: 'number',
                enum: [543262]
              },
            }
          };
          expect(res.body).to.be.jsonSchema(schema);
        });
    });
  });
});
