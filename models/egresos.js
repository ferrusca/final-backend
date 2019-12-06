module.exports = (sequelize, DataType) => {
  const Egresos = sequelize.define('Egresos', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    concepto: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    cantidad: {
      type: DataType.FLOAT,
      defaultValue: 0.0
    },
    fecha_pago: {
      type: DataType.DATE,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    pagado: {
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
  Egresos.associate = models => {
    Egresos.belongsTo(models.Users)
  }
  return Egresos
}
