module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define(
    "salesProducts",
    {
      quantity: DataTypes.INTEGER,
    },
    {
      timestamps: false,
      tableName: "salesProducts",
    }
  );

  SalesProducts.associate = (models) => {
    models.Sales.belongsToMany(models.Products, {
      as: "products",
      through: SalesProducts,
      foreignKey: "sale_id",
      otherKey: "id",
    });

    models.Products.belongsToMany(models.Sales, {
      as: "sales",
      through: SalesProducts,
      foreignKey: "product_id",
      otherKey: "id",
    });
  };

  return SalesProducts;
};
