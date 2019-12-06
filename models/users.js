module.exports = (sequelize, DataType) => {
  const Users = sequelize.define(
    'Users',
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      },
      username: {
        type: DataType.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true
        }
      },
      password: {
        type: DataType.STRING,
        allowNull: false,
        validate: {
          notEmpty: true
        }
      }
    }
  )
  // classMethod
  Users.associate = models => {
    // Users.hasOne(models.Companys)
    // Users.hasMany(models.Debits)
    // Users.hasMany(models.Payments)
    // Users.hasMany(models.Salarys)
  }
  Users.isPassword = (encodedPassword, password) => {
    return bcrypt.compareSync(password, encodedPassword)
  }
  return Users
}
