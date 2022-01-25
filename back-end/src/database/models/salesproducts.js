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
    models.sales.belongsToMany(models.products, {
      as: "products",
      through: SalesProducts,
      foreignKey: "sale_id",
      otherKey: "id",
    });

    models.products.belongsToMany(models.sales, {
      as: "sales",
      through: SalesProducts,
      foreignKey: "product_id",
      otherKey: "id",
    });
  };

  return SalesProducts;
};
