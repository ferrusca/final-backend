module.exports = (sequelize, DataType) => {
  const Balance = sequelize.define('Balance', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ingresos: {
      type: DataType.FLOAT,
      defaultValue: 0.0
    },
    egresos: {
      type: DataType.FLOAT,
      defaultValue: 0.0
    },
    balance: {
      type: DataType.FLOAT,
      defaultValue: 0.0
    }
  })
  Balance.associate = models => {
    Balance.belongsTo(models.Users)
  }
  return Balance
}
