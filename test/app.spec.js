const app = require('../src/app')

describe('App smoke test', () => {
    it('GET / responds with 200, and returns "hello world"', () => {
        return supertest(app)
            .get('/')
            .expect(200, 'hello boilerplate')
    })
}) 
