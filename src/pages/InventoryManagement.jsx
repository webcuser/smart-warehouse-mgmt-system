import React from 'react';
import ProductCard from '../components/ProductCard';
import InventoryLevelDisplay from '../components/InventoryLevelDisplay';

const InventoryManagement = ({ products }) => {
  const totalProducts = products.length;
  const outOfStockCount = products.filter(product => product.stock === 0).length;

  return (
    <div className="container mx-auto p-4">
      <InventoryLevelDisplay totalProducts={totalProducts} outOfStockCount={outOfStockCount} />
      <div className="flex flex-wrap justify-start mt-4">
        {products.map(product => (
          <ProductCard key={product.sku} product={product} />
        ))}
      </div>
    </div>
  );
};

export default InventoryManagement;