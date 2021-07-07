const {User}=require('../models/user');
const request=require('supertest');
const { Genre } = require('../models/genres');
describe('auth middleware',()=>{
    beforeEach(()=>{server=require('../app')})
    afterEach(async()=>{
        await Genre.remove({});
        await  server.close();});
    let token;
    const exec=()=>{
        return request(server)
        .post('/api/genres')
        .set('x-auth-token',token)
        .send({name:'genre1'})
    
    }
    beforeEach(()=>{
   token=new User().generateAuthToken();
    });
    it('should return 401 if no token is provided',async()=>{
        token='';
  const res= await exec();
   expect(res.status).toBe(401);
    });
    it('should return 400 if an invalid token is provided',async()=>{
        token='ba';
  const res= await exec();
   expect(res.status).toBe(400);
    });
    it('should return 403 if a valid token is provided',async()=>{

  const res= await exec();
   expect(res.status).toBe(403);
    });
});