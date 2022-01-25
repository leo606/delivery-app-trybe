module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "users",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      timestamps: false,
      tableName: "users",
    }
  );

  Users.associate = (models) => {
    Users.hasMany(models.sales, { foreignKey: "user_id", as: "userSales" });
    Users.hasMany(models.sales, { foreignKey: "seller_id", as: "sellerSales" });
  };

  return Users;
};
