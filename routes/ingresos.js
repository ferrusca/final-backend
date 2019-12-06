module.exports = app => {
  const Ingresos = app.db.models.Ingresos
  app
    .route('/ingresos')
    .all(app.auth.authenticate())
    .get((req, res) => {
      Ingresos.findAll({
        where: { UserId: req.user.id }
      })
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message })
        })
    })
    .post((req, res) => {
      req.body.UserId = req.user.id
      Ingresos.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
          res.status(412).json({ msg: error.message })
        })
    })

  app
    .route('/ingresos/:id')
    .all(app.auth.authenticate())
    .get((req, res) => {
      Ingresos.findOne({
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
      Ingresos.update(req.body, {
        where: {
          id: req.params.id,
          UserId: req.user.id
        }
      })
      .then(result => res.sendStatus(204))
      .catch(error => res.status(412).json({ msg: error.message }))
    })
    .delete((req, res) => {
      Ingresos.destroy({
        where: {
          id: req.params.id,
          UserId: req.user.id
        }
      })
      .then(result => res.sendStatus(204))
      .catch(error => res.status(412).json({ msg: error.message }))
    })
}
