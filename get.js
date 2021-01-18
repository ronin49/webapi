describe('',function(){
it('',async function(){
const axios = require('axios');
id = '';
res = 'error';
await axios({
  method: 'post',
  baseURL: 'https://api.dropboxapi.com/2/files/get_metadata',
//  timeout: 1000,
  headers: {'Authorization': 'Bearer '+id,
            'Content-Type': 'application/json'},
  data: '{\"path\": \"/arch.txt\",\"include_media_info\": false,\"include_deleted\": false,\"include_has_explicit_shared_members\": false}'
}).then(function (response) {
    console.log(response);
    res = response;
  });
expect(res=='error').toBe(false);
});
});