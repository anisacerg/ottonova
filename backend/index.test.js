const request = require('supertest');
const app = require('./index');

describe('GET /api/cities', () => {
  it('responds with JSON containing a list of cities', async () => {
    const response = await request(app).get('/api/cities');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body.cities)).toBe(true);

    expect(response.body.cities).toHaveLength(8);
  });
});

describe('GET /api/cities/:id', () => {});
