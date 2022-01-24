module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    "sales",
    {
      user_id: DataTypes.INTEGER,
      seller_id: DataTypes.INTEGER,
      total_price: DataTypes.DECIMAL,
      delivery_address: DataTypes.STRING,
      delivery_number: DataTypes.STRING,
      sale_date: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      tableName: "sales",
    }
  );

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users, {
      foreignKey: "user_id",
      as: "user",
    });

    Sales.belongsTo(models.Users, {
      foreignKey: "seller_id",
      as: "user",
    });
  };

  return Sales;
};
