const server = require('./index');
const request = require('supertest');

it('Can successfully call the / endpoint', async () => {
    const resp = await request(server).get('/').send({});
    expect(resp.statusCode).toEqual(200);
    expect(resp.body).toHaveProperty('message');
});
it('Can successfully call the /users endpoint', async () => {
    const resp = await request(server).get('/users').send({});
    expect(resp.statusCode).toEqual(200);
    expect(resp.body).toHaveProperty('users');
});

afterAll(() => {
    server.close();
})