const { describe, test, expect } = require("@jest/globals");
const supertest = require("supertest");
const app = require("../index");
const pool = require("../db/pool");

describe('GET plants endoint', () => {

    test('should return 200', (done) => {
      supertest(app)
        .get('/api/plants')
        .expect(200) 
        .end(done);
    });
  
  
    /*test('should return 200 and valid JSON', async () => {
      const response = await supertest(app)
        .get('/api/plants')
        .set('Accept', 'application/json');
  
      expect(response.status).toEqual(200);
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: 1,
            name: "Peikonlehti",
            description: "hieno kasvi",
            price: "15.00",
          }),
          expect.objectContaining({
            id: 2,
            name: "Jukkapalmu",
            description: "hieno kasvi",
            price: "39.99",
          }),
          expect.objectContaining({
            id: 3,
            name: "Lyyranviikuna",
            description: "hieno kasvi",
            price: "69.99",
          }),
          expect.objectContaining({
            id: 4,
            name: "Kultapalmu",
            description: "hieno kasvi",
            price: "39.99",
          }),
          expect.objectContaining({
            id: 5,
            name: "Kiiltojukka",
            description: "hieno kasvi",
            price: "49.99",
          }),
        ]),
      );
    });*/
});

describe('GET plant by id endpoint', () => {

    test('should return 200 if item was found', (done) => {
      supertest(app)
        .get('/api/plants/1')
        .expect(200)
        .end(done);
    });
  
    test('should return 200 and json if item was found', async() => {
      const response = await supertest(app)
        .get('/api/plants/1')
        .set('Accept', 'application/json');
  
        expect(response.status).toEqual(200);
        expect(response.headers['content-type']).toMatch(/json/); 
        expect(response.body).not.toBe(null);
    });

    test('should return 404 and Not Found', async () => {
        const response = await supertest(app)
          .get('/api/plants/101')
          .set('Accept', 'application/json');
        expect(response.status).toEqual(404);
        expect(response.text).toContain('Not Found');
    });

});

describe('POST plant endpoint', ()=> { 
    /*const loggedInUser = {
      id: '',
      email: '',
      token: ''
    }
  
    beforeAll(async () => {
      const data = {
        name: 'Test User',
        email: 'test@user.com',
        password: 'password123'
      }
  
      const response = await supertest(app)
        .post('/api/users/signup')
        .set('Accept', 'application/json')
        .set('Content', 'application/json')
        .send(data)
      loggedInUser.id = response.body.id
      loggedInUser.email = response.body.email
      loggedInUser.token = response.body.token
    })
    */
    afterAll(async() => {
      //connection.query('DELETE FROM users WHERE email=?', ['test@user.com']);      
      const deleteQuery = `DELETE FROM plants WHERE name LIKE 'test name' AND description LIKE 'test description';`;
      pool.query(deleteQuery, (err, result) => {
        if(err){
        console.log(err);
        }
      });
    });

    test('should create a new plant', async () => {
      const plant = {
        name: 'test name',
        description: 'test description',
        price: '20.00',
      };
  
      const response = await supertest(app)
        .post('/api/plants')
        .set('Accept', 'application/json')
        //.set('Authorization', 'Bearer ' + loggedInUser.token)
        .set('Content', 'application/json')
        .send(plant);
  
      expect(response.status).toEqual(201);
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.body.name).toEqual('test name');
      expect(response.body.description).toEqual('test description');
      expect(response.body.price).toEqual('20.00');
    });

    test('should not allow no name property', async () => {
      const plant = {
        description: 'test description',
        price: '20.00',
      };
      const response = await supertest(app)
        .post('/api/plants')
        .set('Accept', 'application/json')
        .set('Content', 'application/json')
        //.set('Authorization', 'Bearer ' + loggedInUser.token)
        .send(plant);
      expect(response.status).toEqual(400);
      expect(response.text).toContain('"name" is required');
    });
  
    test('should not allow no description property', async () => {
      const plant = {
        name: 'test name',
        price: '20.00',
      };
      const response = await supertest(app)
        .post('/api/plants')
        .set('Accept', 'application/json')
        .set('Content', 'application/json')
        //.set('Authorization', 'Bearer ' + loggedInUser.token)
        .send(plant);
      expect(response.status).toEqual(400);
      expect(response.text).toContain('"description" is required');
    });

    test('should not allow no price property', async () => {
        const plant = {
          name: 'test name',
          description: 'test description',
        };
        const response = await supertest(app)
          .post('/api/plants')
          .set('Accept', 'application/json')
          .set('Content', 'application/json')
          //.set('Authorization', 'Bearer ' + loggedInUser.token)
          .send(plant);
        expect(response.status).toEqual(400);
        expect(response.text).toContain('"price" is required');
    });


    test('should not allow empty name', async () => {
        const plant = {
          name: '',
          description: 'test description',
          price: '20.00',
        };
        const response = await supertest(app)
          .post('/api/plants')
          .set('Accept', 'application/json')
          .set('Content', 'application/json')
          //.set('Authorization', 'Bearer ' + loggedInUser.token)
          .send(plant);
        expect(response.status).toEqual(400);
        expect(response.text).toContain('"name" is not allowed to be empty');
      });
    
      test('should not allow empty description', async () => {
        const plant = {
          name: 'test name',
          description:'',
          price: '20.00',
        };
        const response = await supertest(app)
          .post('/api/plants')
          .set('Accept', 'application/json')
          .set('Content', 'application/json')
          //.set('Authorization', 'Bearer ' + loggedInUser.token)
          .send(plant);
        expect(response.status).toEqual(400);
        expect(response.text).toContain('"description" is not allowed to be empty');
      });
  
      test('should not allow empty price', async () => {
        const plant = {
          name: 'test name',
          description: 'test description',
          price: '',
        };
        const response = await supertest(app)
          .post('/api/plants')
          .set('Accept', 'application/json')
          .set('Content', 'application/json')
          //.set('Authorization', 'Bearer ' + loggedInUser.token)
          .send(plant);
        expect(response.status).toEqual(400);
        expect(response.text).toContain('"price" is not allowed to be empty');
      });


});

describe('UPDATE plants endpoint', () => {
    /*const loggedInUser = {
      id: '',
      email: '',
      token: ''
    }
  
    beforeAll(async () => {
      const data = {
        name: 'Test User',
        email: 'test@user.com',
        password: 'password123'
      }
  
      const response = await supertest(app)
        .post('/api/users/signup')
        .set('Accept', 'application/json')
        .set('Content', 'application/json')
        .send(data)
      loggedInUser.id = response.body.id
      loggedInUser.email = response.body.email
      loggedInUser.token = response.body.token
    });*/

    afterAll(async() => {      
      //connection.query('DELETE FROM users WHERE email=?', ['test@user.com'])
      const deleteQuery = `DELETE FROM plants WHERE name LIKE 'update test name' AND description LIKE 'update test description';`;
      pool.query(deleteQuery, (err, result) => {
        if(err){
        console.log(err);
        }
      });
    });
  
    test('should update the plant by id', async () => {
      const plant = {
        name: 'test name',
        description:'test description',
        price: '20.00',
      };
      const postResponse = await supertest(app)
        .post('/api/plants')
        .set('Accept', 'application/json')
        .set('Content', 'application/json')
        //.set('Authorization', 'Bearer ' + loggedInUser.token)
        .send(plant);
      const postId = postResponse.body.id;
      const updatedplant = {
        name: 'update test name',
        description:'update test description',
        price: '10.00',
      };
      const response = await supertest(app)
        .put(`/api/plants/${postId}`)
        .set('Accept', 'application/json')
        .set('Content', 'application/json')
        //.set('Authorization', 'Bearer ' + loggedInUser.token)
        .send(updatedplant);
      expect(response.status).toEqual(200);
      expect(response.text).toEqual('Plant information updated');
    });
  
    test('should check that plant with id exists', async () => {
      const response = await supertest(app)
        .get('/api/plants/100001')
        .set('Accept', 'application/json')
        //.set('Authorization', 'Bearer ' + loggedInUser.token);
  
      expect(response.status).toEqual(404);
      expect(response.text).toEqual('Not Found');
    });
  });

describe('DELETE plants endpoint', () => {
  /*const loggedInUser = {
    id: '',
    email: '',
    token: ''
  }

  beforeAll(async () => {
    const data = {
      name: 'Test User',
      email: 'test@user.com',
      password: 'password123'
    }

    const response = await supertest(app)
      .post('/api/users/signup')
      .set('Accept', 'application/json')
      .set('Content', 'application/json')
      .send(data)
    loggedInUser.id = response.body.id
    loggedInUser.email = response.body.email
    loggedInUser.token = response.body.token
  })

  afterAll(async() => {
    connection.query('DELETE FROM users WHERE email=?', ['test@user.com']);
  });
*/

  test('should delete the plant by id', async () => {
    const plant = {
      name: 'test name delete',
      description:'test description delete',
      price: '20.00',
    };
    const postResponse = await supertest(app)
      .post('/api/plants')
      .set('Accept', 'application/json')
      .set('Content', 'application/json')
      //.set('Authorization', 'Bearer ' + loggedInUser.token)
      .send(plant);
    const postId = postResponse.body.id;
    const response = await supertest(app)
      .delete(`/api/plants/${postId}`)
      .set('Accept', 'application/json')
      .set('Content', 'application/json')
      //.set('Authorization', 'Bearer ' + loggedInUser.token);
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Plant deleted');
  });

  test('should check that plant with id exists', async () => {
    const response = await supertest(app)
      .delete('/api/plants/100001')
      .set('Accept', 'application/json')
      //.set('Authorization', 'Bearer ' + loggedInUser.token);

    expect(response.status).toEqual(404);
    expect(response.text).toEqual('Not Found');
  });
});