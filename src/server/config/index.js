process.env.NODE_ENV = 'development';
// console.log(process.env.NODE_ENV);
let config = {
  phpBaseUrl: 'http://localhost:8181/',
  port:''
}
if(process.env.NODE_ENV == 'development'){
  config.port = 3000
}
if(process.env.NODE_ENV == 'production'){
  config.port = 8081
}

module.exports = config;
