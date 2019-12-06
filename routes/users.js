module.exports = app => {
  const Users = app.db.models.Users
  app
    .route('/user')
    .all(app.auth.authenticate())
    .get((req, res) => {
      Users.findById(req.user.id, {
        attributes: ['id', 'name', 'username']
      })
        .then(result => res.json(result))
        .catch(error => res.status(412).json({ msg: error.message }))
    })
    .delete((req, res) => {
      Users.destroy({ where: { id: req.user.id } })
        .then(result => res.sendStatus(204))
        .catch(error => res.status(412).json({ msg: error.message }))
    })

  app.route('/users').post((req, res) => {
    console.log(req, res)
    Users.create(req.body)
      .then(result => res.json(result))
      .catch(error => {
        console.log(error)
        res.status(412).json({ msg: error.message })
      })
  })

  app
    .route('/users/:id')
    .all(app.auth.authenticate())
    .get((req, res) => {
      Users.findById(req.params.id, {
        attributes: [
          'id',
          'name',
          'username',
          'created_at',
          'updated_at'
        ]
      })
        .then(result => res.json(result))
        .catch(error => res.status(412).json({ msg: error.message }))
    })
    .post((req, res) => {
      Users.create(req.body)
        .then(result => res.json(result))
        .catch(error => res.status(412).json({ msg: error.message }))
    })
    .delete((req, res) => {
      Users.destroy({ where: { id: req.params.id } })
        .then(result => res.sendStatus(204))
        .catch(error => res.status(412).json({ msg: error.message }))
    })
}
