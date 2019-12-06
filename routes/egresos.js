module.exports = app => {
  const egresos = app.db.models.Egresos
  app
    .route('/egresos')
    .all(app.auth.authenticate())
    .get((req, res) => {
      egresos.findAll({
        where: { UserId: req.user.id }
      })
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({ msg: error.message })
      })
    })
    .post((req, res) => {
      req.body.UserId = req.user.id
      egresos.create(req.body)
      .then(result => res.json(result))
      .catch(error => {
        res.status(412).json({ msg: error.message })
      })
    })

  app
    .route('/egresos/:id')
    .all(app.auth.authenticate())
    .get((req, res) => {
      egresos.findOne({
        where: {
          id: req.params.id,
          UserId: req.user.id
        }
      })
      .then(result => {
          if (result) res.json(result)
          else res.sendStatus(404)
        })
      .catch(error => {
        res.status(412).json({ msg: error.message })
      })
    })
    .put((req, res) => {
      egresos.update(req.body, {
        where: {
          id: req.params.id,
          UserId: req.user.id
        }
      })
      .then(result => res.sendStatus(204))
      .catch(error => res.status(412).json({ msg: error.message }))
    })
  .delete((req, res) => {
      egresos.destroy({
        where: {
          id: req.params.id,
          UserId: req.user.id
        }
      })
      .then(result => res.sendStatus(204))
      .catch(error => res.status(412).json({ msg: error.message }))
  })
}

