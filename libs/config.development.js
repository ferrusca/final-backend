import logger from './logger.js'

module.exports = {
  database: 'dinero_seguro',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: 'dineroSeguro.sqlite',
    logging: sql => {
      logger.info(`[${new Date()}] ${sql}`)
    },
    define: {
      underscore: true
    }
  },
  jwtSecret: 'IOSfoobarbaz',
  jwtSession: { session: false }
}
