describe('',function(){
it('',async function(){
const axios = require('axios');
id = '';
res = 'error';
await axios({
  method: 'post',
  baseURL: 'https://api.dropboxapi.com/2/files/delete_v2',
//  timeout: 1000,
  headers: {'Authorization': 'Bearer '+id,
            'Content-Type': 'application/json'},
  data: '{\"path\": \"/arch.txt\"}'
}).then(function (response) {
    console.log(response);
    res = response;
  });
expect(res=='error').toBe(false);
});
});