'use strict';
const app = require('../lib/server.js');
// const wrongRoute = require('../lib/ middleware/404.js');
// const logger = require('../lib/ middleware/logger.js');

const supergoose = require('@code-fellows/supergoose');

const mockRequest = supergoose(app.server);

describe('categories route ', () => {
  it('Category', async () => {
    let response = await mockRequest.get('/categories');
    // console.log('categoryyyyyy', response.body);
    expect(JSON.stringify(response.body)).toBe(
      JSON.stringify([
        {
          id: '1',
          category: 'Movie',
          name: 'drama',
          display_name: 'sewu lesewu',
          description: 'A family drama movie.',
        },
        {
          id: '2',
          name: 'Clothing Shope',
          display_name: 'Man\'s and women\'s clothing shope',
          description: 'clothing to any type of age and size.',
        },
        {
          id: '3',
          name: 'Movie',
          display_name: 'Hollywood',
          description: 'All type of movies. action,advanture,dram e.t.c',
        },
      ]),
    );
    expect(response.status).toBe(200);
  });
});

describe('production route', () => {
  it('GET/product', async () => {
    let response = await mockRequest.get('/products');
    console.log('productttttt', response.body);
    expect(JSON.stringify(response.body)).toBe(
      JSON.stringify([
        {
          id: '1',
          category: 'beverage',
          name: 'coca-cola',
          display_name: 'coca-cola',
          description: 'manufacturer and marketer of non-alcholic beverage.',
        },
        {
          id: '2',
          category: 'Clothing Shope',
          name: 'Pure fashion',
          display_name: 'man\'s fasion ',
          description: 'most of the products are 100 % cotton and easy to wash',
        },
        {
          id: '3',
          category: 'Movie',
          name: 'Action',
          display_name: 'spider man',
          description:
            'Spider -man has spide -like abilities including superhuman strength and the ability to cling to most surfaces.',
        },
        {
          id: '4',
          category: 'Movie',
          name: 'drama',
          display_name: 'sewu lesewu',
          description: 'A family drama movie.',
        },
      ]),
    );
    expect(response.status).toBe(200);
  });
  it('POST/products', async () => {
    let response = await mockRequest.post('/products');
    expect(JSON.stringify()).toBe();
  });
});

describe('MiddleWare ', () => {
  it('404 ', async () => {
    let response = await mockRequest.get('/henok');
    expect(response.status).toBe(404);
  });
});

// describe
// it ( () => {
//  let response1 = await mockreq.get('./fruit);
//})
//expect (JSON.stringify(response.boy)).tobe(JSON>stringfy([...{ id :} ,{name:}........]))

// expect(response1.status).tobe(200);

//it('update' , asyn () => {

// let newfrut = {
//   name:'apple',
//   cout:90
// }
// let response1 = await mockreq.put('./fruite);
// expect(JSON.stringfy(response1.body)).tobe(JSON.stringy({
//   name:'apple',
//   cout:90
// }))
// })
// expect(response1.status).tobe(200);
