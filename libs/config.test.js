module.exports = {
  database: 'dinero_seguro',
  username: '',
  password: '',
  params: {
    dialect: 'sqlite',
    storage: 'dineroSeguro.sqlite',
    logging: false,
    define: {
      underscore: true
    }
  },
  jwtSecret: 'IOSfoobarbaz',
  jwtSession: { session: false }
}
