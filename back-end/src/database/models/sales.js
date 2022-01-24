module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define(
    "sales",
    {
      user: DataTypes.INTEGER,
      seller: DataTypes.INTEGER,
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

  return Sales;
};
