const { describe, test, expect } = require("@jest/globals");
const supertest = require("supertest");
const app = require("../index");
const pool = require("../db/pool");
let user_id = "";
describe("SIGNUP users endpoint", () => {
  beforeAll(async () => {
    const deleteQuery = "DELETE FROM accounts WHERE email=$1;";
    pool.query(deleteQuery, ["testi1@gmail.com"], (err, result) => {
      if (err) {
        console.log(err);
      }
    });
  });
  test("should signup account with valid credentials", async () => {
    const data = {
      email: "testi1@gmail.com",
      password: "password123",
      username: "testaus",
    };

    const response = await supertest(app)
      .post("/api/accounts/signup")
      .set("Accept", "application/json")
      .set("Content", "application/json")
      .send(data);

    user_id = response.body.id;
    expect(response.status).toEqual(201);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.id).toBeTruthy();
    expect(response.body.email).toBeTruthy();
  });

  test("should login account with valid credentials", async () => {
    const data = {
      email: "testi1@gmail.com",
      password: "password123",
    };

    const response = await supertest(app)
      .post("/api/accounts/login")
      .set("Accept", "application/json")
      .set("Content", "application/json")
      .send(data);
    expect(response.status).toEqual(201);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.id).toBeTruthy();
    expect(response.body.email).toBeTruthy();
    expect(response.body.token).toBeTruthy();
  });
});
describe("Find account by id endpoint", () => {
  test("should find an account by id", async () => {
    const response = await supertest(app).get("/api/accounts/" + user_id);
    expect(response.status).toEqual(200);
    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.body.id).toBeTruthy();
    expect(response.body.email).toBeTruthy();
    expect(response.body.username).toBeTruthy();
    expect(response.body.last_login).toBeDefined();
    expect(response.body.created_on).toBeTruthy();
  });
});