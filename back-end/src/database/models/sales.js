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
    Sales.belongsTo(models.users, {
      foreignKey: "user_id",
      as: "user",
    });

    Sales.belongsTo(models.users, {
      foreignKey: "seller_id",
      as: "seller",
    });
  };

  return Sales;
};
