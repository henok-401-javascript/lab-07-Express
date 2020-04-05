'use strict';
const app = require('../lib/server.js');
// const superagent = require('superagent');

const supergoose = require('@code-fellows/supergoose');

const mockRequest = supergoose(app.server);



describe('categories rout work', () => {
  it('Category', async () => {
    let res = await mockRequest.get('/categories');
    console.log('categoryyyyyy', res);
  });
  expect();
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