import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-2 max-w-xs w-full">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded" />
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600">SKU: {product.sku}</p>
      <p className={`mt-2 ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>Stock: {product.stock > 0 ? 'In Stock' : 'Out of Stock'}</p>
    </div>
  );
};

export default ProductCard;