const request = require('supertest');
const {app} = require('../src/app');

describe('POST /osrs-players', () => {
  it('creates a new OSRS player', async () => {
    const response = await request(app)
      .post('/osrs-players')
      .send({ name: 'Test Player', combatLevel: 100 });

    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({
      name: 'Test Player',
      combatLevel: 100
    });
  });
});
