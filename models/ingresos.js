module.exports = (sequelize, DataType) => {
  const Ingresos = sequelize.define('Ingresos', {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    nombre_producto: {
      type: DataType.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    monto: {
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
  Ingresos.associate = models => {
    Ingresos.belongsTo(models.Users)
  }
  return Ingresos
}
