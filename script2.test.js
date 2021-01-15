const fetch = require('node-fetch');
const swapi = require('./script2');

it('calls swapi to get people', (/* done */)=> {
    /* always use assertions to test async code */
    expect.assertions(1)
    /* return OR done to wait for async */
    return swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(82)
       /*  done(); */
    })
})

it('calls swapi to get people with a promise', ()=> {
    expect.assertions(2)

    return swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(82)
        expect(data.results.length).toBeGreaterThan(5);
    })
})