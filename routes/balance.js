module.exports = app => {
  const balance = app.db.models.Balance
  app
    .route('/balance')
    .all(app.auth.authenticate())
    .get((req, res) => {
      // TODO: obtener el balance asociado
    })
    .post((req, res) => {
      
    })

  app
    .route('/balance/:id')
    .all(app.auth.authenticate())
    .get((req, res) => {
      // TODO 
    })
    .put((req, res) => {
    })
    .delete((req, res) => {
    })
}
