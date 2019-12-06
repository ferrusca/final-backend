import http from 'http'
import fs from 'fs'

module.exports = app => {
  app.db.sequelize.sync().done(() => {
    http.createServer(app).listen(app.get('port'), () => {
      console.log(`Server is litening: ${app.get('port')}`)
    })
  })
}
