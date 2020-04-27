export default {
  port: '8083',
  log: {
    log_name: 'log',
    log_path: 'logs/'
  },
  mongo: {
    development: {
      host: 'mongodb://localhost:27017/ts-test'
    },
    production: {
      host: ''
    }
  },
  redis: {
    development: {
      host: 'localhost',
      db: 1
    },
    production: {
      host: '',
      db: 1
    }
  },
  session: {
    secrets: 'koa-ts'
  },
  jwt: {
    secret: 'koa-ts-jwt',
    key: 'mytoken',
    time: '1d'
  }
}
