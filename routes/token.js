import jwt from 'jwt-simple'

module.exports = app => {
  const cfg = app.libs.config
  const Users = app.db.models.Users
  app.post('/token', (req, res) => {
    console.log(req)
    if (req.body.username && req.body.password) {
      Users.findOne({ where: { username: req.body.username, password: req.body.password } })
        .then(user => {
          const payload = { id: user.id }
          res.json({
            token: jwt.encode(payload, cfg.jwtSecret)
          })
        })
        .catch(error => res.sendStatus(401))
    } else {
      res.sendStatus(401)
    }
  })
}
