import React from 'react';

const InventoryLevelDisplay = ({ totalProducts, outOfStockCount }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">Inventory Levels</h3>
      <div>
        <p>Total Products: <span className="font-bold">{totalProducts}</span></p>
        <p>Out of Stock: <span className="text-red-600 font-bold">{outOfStockCount}</span></p>
      </div>
    </div>
  );
};

export default InventoryLevelDisplay;